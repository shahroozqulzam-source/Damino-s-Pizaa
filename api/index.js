require('dotenv').config();
const express = require('express');
const pool = require('./db');
const initDatabase = require('./db-init');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

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

app.post('/api/login', (req, res) => {
  const { password } = req.body;
  const adminPassword = process.env.ADMIN_PASSWORD || '3800380@@';
  
  if (password === adminPassword) {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, error: 'Incorrect password.' });
  }
});

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

app.get('/data.json', async (req, res) => {
  try {
    const data = await getDatabaseData();
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Database unavailable' });
  }
});

// Removed express.static and path-based file serving for production safety
// Ensure your frontend calls /data.json to fetch data from the DB

app.post('/api/save', async (req, res) => {
  const data = req.body;
  if (!data.menuItems || !data.dealsData || !data.shopInfo) {
    return res.status(400).json({ success: false, error: 'Invalid data format.' });
  }

  let connection;
  try {
    connection = await pool.getConnection();
    await connection.beginTransaction();

    // 1. Save Shop Info
    const info = data.shopInfo;
    await connection.query(`
      INSERT INTO shop_info (id, phone, whatsapp, address, hours, delivery_time, discount_text, discount_text_mobile, facebook, instagram, tiktok, social_whatsapp)
      VALUES (1, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
        phone = VALUES(phone), whatsapp = VALUES(whatsapp), address = VALUES(address), hours = VALUES(hours),
        delivery_time = VALUES(delivery_time), discount_text = VALUES(discount_text), discount_text_mobile = VALUES(discount_text_mobile),
        facebook = VALUES(facebook), instagram = VALUES(instagram), tiktok = VALUES(tiktok), social_whatsapp = VALUES(social_whatsapp)
    `, [info.phone, info.whatsapp, info.address, info.hours, info.deliveryTime, info.discountText, info.discountTextMobile, 
        info.social?.facebook || '', info.social?.instagram || '', info.social?.tiktok || '', info.social?.whatsapp || '']);

    // 2. Save Menu Items
    await connection.query('DELETE FROM menu_items');
    if (data.menuItems.length > 0) {
      await connection.query('INSERT INTO menu_items (id, name, category, price, badge, `desc`, img) VALUES ?', [data.menuItems.map(i => [i.id, i.name, i.category, i.price, i.badge || null, i.desc, i.img])]);
    }

    // 3. Save Deals
    await connection.query('DELETE FROM deals');
    if (data.dealsData.length > 0) {
      await connection.query('INSERT INTO deals (id, deal_no, name, price, tag, `desc`, img) VALUES ?', [data.dealsData.map(d => [d.id, d.dealNo, d.name, d.price, d.tag, d.desc, d.img])]);
    }

    await connection.commit();
    res.json({ success: true });
  } catch (err) {
    if (connection) await connection.rollback();
    res.status(500).json({ success: false, error: 'Database update failed.' });
  } finally {
    if (connection) connection.release();
  }
});

// Note: /api/upload must be updated to use a cloud service (Cloudinary/S3)
// instead of writing to disk. I have commented it out.
app.post('/api/upload', (req, res) => {
  res.status(501).json({ success: false, error: 'File upload requires Cloud storage configuration.' });
});

module.exports = app;
