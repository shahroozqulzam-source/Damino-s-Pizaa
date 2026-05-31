require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const pool = require('./db');
const initDatabase = require('./db-init');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Serverless Middleware to ensure database is initialized on demand (cold starts)
let isDbInitialized = false;
app.use(async (req, res, next) => {
  if (!isDbInitialized) {
    try {
      await initDatabase();
      isDbInitialized = true;
    } catch (err) {
      console.error("Delayed database initialization failed:", err.message);
    }
  }
  next();
});

// Login endpoint checking password against .env configuration
app.post('/api/login', (req, res) => {
  const { password } = req.body;
  const adminPassword = process.env.ADMIN_PASSWORD || '3800380@@';
  
  if (password === adminPassword) {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, error: 'Incorrect password.' });
  }
});

// Get database data dynamically formatted to match data.json schema
async function getDatabaseData() {
  const [shopRows] = await pool.query('SELECT * FROM shop_info WHERE id = 1');
  const [menuRows] = await pool.query('SELECT * FROM menu_items ORDER BY id');
  const [dealRows] = await pool.query('SELECT * FROM deals');

  const shopInfo = shopRows.length > 0 ? {
    phone: shopRows[0].phone,
    whatsapp: shopRows[0].whatsapp,
    address: shopRows[0].address,
    hours: shopRows[0].hours,
    deliveryTime: shopRows[0].delivery_time,
    discountText: shopRows[0].discount_text,
    discountTextMobile: shopRows[0].discount_text_mobile,
    social: {
      facebook: shopRows[0].facebook,
      instagram: shopRows[0].instagram,
      tiktok: shopRows[0].tiktok,
      whatsapp: shopRows[0].social_whatsapp
    }
  } : {};

  const menuItems = menuRows.map(row => ({
    id: row.id,
    name: row.name,
    category: row.category,
    price: Number(row.price),
    badge: row.badge || undefined,
    desc: row.desc,
    img: row.img
  }));

  const dealsData = dealRows.map(row => ({
    id: row.id,
    dealNo: row.deal_no,
    name: row.name,
    price: Number(row.price),
    tag: row.tag,
    desc: row.desc,
    img: row.img
  }));

  return { shopInfo, menuItems, dealsData };
}

// Intercept data.json requests to fetch from database
app.get('/data.json', async (req, res) => {
  try {
    const data = await getDatabaseData();
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.json(data);
  } catch (err) {
    console.error("Failed to fetch data from database, falling back to data.json file:", err.message);
    res.sendFile(path.join(__dirname, '../public/data.json'));
  }
});

// Serve static frontend files from the public directory (supports clean URLs locally)
app.use(express.static(path.join(__dirname, '../public'), { extensions: ['html'] }));

// Save API endpoint
app.post('/api/save', async (req, res) => {
  const data = req.body;

  if (!data.menuItems || !data.dealsData || !data.shopInfo) {
    return res.status(400).json({ success: false, error: 'Invalid data format. Missing parameters.' });
  }

  let connection;
  try {
    connection = await pool.getConnection();
  } catch (dbErr) {
    console.error("Failed to connect to database for saving. Saving to data.json as fallback.", dbErr.message);
    const filePath = path.join(__dirname, '../public/data.json');
    fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8', (err) => {
      if (err) {
        console.error('Error writing fallback data.json:', err);
        return res.status(500).json({ success: false, error: 'Failed to write to file system.' });
      }
      console.log('Successfully updated fallback data.json on disk.');
      return res.json({ success: true, warning: 'Saved to disk fallback, database was offline.' });
    });
    return;
  }

  try {
    await connection.beginTransaction();

    // 1. Save Shop Info
    const info = data.shopInfo;
    await connection.query(`
      INSERT INTO shop_info (id, phone, whatsapp, address, hours, delivery_time, discount_text, discount_text_mobile, facebook, instagram, tiktok, social_whatsapp)
      VALUES (1, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
        phone = VALUES(phone),
        whatsapp = VALUES(whatsapp),
        address = VALUES(address),
        hours = VALUES(hours),
        delivery_time = VALUES(delivery_time),
        discount_text = VALUES(discount_text),
        discount_text_mobile = VALUES(discount_text_mobile),
        facebook = VALUES(facebook),
        instagram = VALUES(instagram),
        tiktok = VALUES(tiktok),
        social_whatsapp = VALUES(social_whatsapp)
    `, [
      info.phone, info.whatsapp, info.address, info.hours, info.deliveryTime,
      info.discountText, info.discountTextMobile,
      info.social?.facebook || '', info.social?.instagram || '', info.social?.tiktok || '', info.social?.whatsapp || ''
    ]);

    // 2. Save Menu Items
    await connection.query('DELETE FROM menu_items');
    if (data.menuItems && data.menuItems.length > 0) {
      const itemValues = data.menuItems.map(item => [
        item.id, item.name, item.category, item.price, item.badge || null, item.desc, item.img
      ]);
      await connection.query(`
        INSERT INTO menu_items (id, name, category, price, badge, \`desc\`, img)
        VALUES ?
      `, [itemValues]);
    }

    // 3. Save Deals
    await connection.query('DELETE FROM deals');
    if (data.dealsData && data.dealsData.length > 0) {
      const dealValues = data.dealsData.map(deal => [
        deal.id, deal.dealNo, deal.name, deal.price, deal.tag, deal.desc, deal.img
      ]);
      await connection.query(`
        INSERT INTO deals (id, deal_no, name, price, tag, \`desc\`, img)
        VALUES ?
      `, [dealValues]);
    }

    await connection.commit();
    console.log('Successfully updated configurations in database via Admin Panel.');
    
    // Also backup to data.json on disk for safety / fallback
    const filePath = path.join(__dirname, '../public/data.json');
    fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8', (err) => {
      if (err) console.warn('Could not write backup data.json:', err.message);
    });

    res.json({ success: true });
  } catch (err) {
    if (connection) await connection.rollback();
    console.error("Database transaction failed:", err);
    res.status(500).json({ success: false, error: 'Database update failed: ' + err.message });
  } finally {
    if (connection) connection.release();
  }
});

// Ensure uploads folder exists in public/
const uploadsDir = path.join(__dirname, '../public/uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Upload API endpoint (Base64 file receiver)
app.post('/api/upload', (req, res) => {
  const { filename, fileData } = req.body;
  if (!filename || !fileData) {
    return res.status(400).json({ success: false, error: 'Missing filename or fileData.' });
  }

  // Extract base64 content
  const matches = fileData.match(/^data:image\/([A-Za-z-+\/]+);base64,(.+)$/);
  if (!matches || matches.length !== 3) {
    return res.status(400).json({ success: false, error: 'Invalid base64 image data.' });
  }

  const extension = matches[1];
  const base64Data = matches[2];
  const buffer = Buffer.from(base64Data, 'base64');
  
  // Create unique filename using timestamp
  const safeFilename = `${Date.now()}_${filename.replace(/[^a-zA-Z0-9.\-_]/g, '_')}`;
  const filePath = path.join(uploadsDir, safeFilename);

  fs.writeFile(filePath, buffer, (err) => {
    if (err) {
      console.error('Error saving uploaded file:', err);
      return res.status(500).json({ success: false, error: 'Failed to save uploaded file.' });
    }
    
    const relativeUrl = `uploads/${safeFilename}`;
    console.log(`Saved uploaded image to: ${relativeUrl}`);
    res.json({ success: true, url: relativeUrl });
  });
});

// Fallback to index.html for undefined routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Local Development Server listener
if (process.env.NODE_ENV !== 'production' && require.main === module) {
  initDatabase().then(() => {
    app.listen(PORT, () => {
      console.log(`==================================================`);
      console.log(`🍕 Damino's Pizza Jaranwala — Local Dev Server`);
      console.log(`==================================================`);
      console.log(`👉 Web Portal:    http://localhost:${PORT}/`);
      console.log(`👉 Admin Panel:   http://localhost:${PORT}/admin`);
      console.log(`==================================================`);
      console.log(`Press Ctrl + C to stop the server.`);
    });
  }).catch(err => {
    console.error("Database initialization failed. Server starting with fallback.", err.message);
    app.listen(PORT, () => {
      console.log(`==================================================`);
      console.log(`🍕 Damino's Pizza Jaranwala — Local Dev Server (FALLBACK)`);
      console.log(`==================================================`);
      console.log(`👉 Web Portal:    http://localhost:${PORT}/`);
      console.log(`👉 Admin Panel:   http://localhost:${PORT}/admin`);
      console.log(`==================================================`);
      console.log(`Press Ctrl + C to stop the server.`);
    });
  });
}

module.exports = app;
