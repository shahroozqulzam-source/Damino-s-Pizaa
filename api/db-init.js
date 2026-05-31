const pool = require('./db');
const fs = require('fs').promises;
const path = require('path');

async function initDatabase() {
  console.log('Initializing database schema...');
  try {
    // 1. Create tables
    await pool.query(`
      CREATE TABLE IF NOT EXISTS shop_info (
        id INT PRIMARY KEY DEFAULT 1,
        phone VARCHAR(50),
        whatsapp VARCHAR(50),
        address TEXT,
        hours TEXT,
        delivery_time TEXT,
        discount_text TEXT,
        discount_text_mobile TEXT,
        facebook VARCHAR(255),
        instagram VARCHAR(255),
        tiktok VARCHAR(255),
        social_whatsapp VARCHAR(255),
        CONSTRAINT chk_only_one_row CHECK (id = 1)
      )
    `);
    console.log('✓ Table "shop_info" verified/created.');

    await pool.query(`
      CREATE TABLE IF NOT EXISTS menu_items (
        id INT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category VARCHAR(100) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        badge VARCHAR(100),
        \`desc\` TEXT NOT NULL,
        img TEXT NOT NULL
      )
    `);
    console.log('✓ Table "menu_items" verified/created.');

    await pool.query(`
      CREATE TABLE IF NOT EXISTS deals (
        id VARCHAR(50) PRIMARY KEY,
        deal_no VARCHAR(100) NOT NULL,
        name VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        tag VARCHAR(100) NOT NULL,
        \`desc\` TEXT NOT NULL,
        img TEXT NOT NULL
      )
    `);
    console.log('✓ Table "deals" verified/created.');

    // 2. Check if tables are empty and seed if needed
    const [shopRows] = await pool.query('SELECT COUNT(*) as count FROM shop_info');
    const [menuRows] = await pool.query('SELECT COUNT(*) as count FROM menu_items');
    const [dealRows] = await pool.query('SELECT COUNT(*) as count FROM deals');

    const shopEmpty = shopRows[0].count === 0;
    const menuEmpty = menuRows[0].count === 0;
    const dealsEmpty = dealRows[0].count === 0;

    if (shopEmpty || menuEmpty || dealsEmpty) {
      console.log('One or more tables are empty. Attempting to seed from data.json...');
      const dataPath = path.join(__dirname, '../public/data.json');
      
      try {
        const fileContent = await fs.readFile(dataPath, 'utf8');
        const data = JSON.parse(fileContent);

        // Seed shop_info
        if (shopEmpty && data.shopInfo) {
          const info = data.shopInfo;
          await pool.query(`
            INSERT INTO shop_info (id, phone, whatsapp, address, hours, delivery_time, discount_text, discount_text_mobile, facebook, instagram, tiktok, social_whatsapp)
            VALUES (1, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `, [
            info.phone, info.whatsapp, info.address, info.hours, info.deliveryTime,
            info.discountText, info.discountTextMobile,
            info.social?.facebook || '', info.social?.instagram || '', info.social?.tiktok || '', info.social?.whatsapp || ''
          ]);
          console.log('✓ Seeded "shop_info" from data.json.');
        }

        // Seed menu_items
        if (menuEmpty && data.menuItems && data.menuItems.length > 0) {
          const values = data.menuItems.map(item => [
            item.id, item.name, item.category, item.price, item.badge || null, item.desc, item.img
          ]);
          await pool.query(`
            INSERT INTO menu_items (id, name, category, price, badge, \`desc\`, img)
            VALUES ?
          `, [values]);
          console.log(`✓ Seeded ${data.menuItems.length} menu items from data.json.`);
        }

        // Seed deals
        if (dealsEmpty && data.dealsData && data.dealsData.length > 0) {
          const values = data.dealsData.map(deal => [
            deal.id, deal.dealNo, deal.name, deal.price, deal.tag, deal.desc, deal.img
          ]);
          await pool.query(`
            INSERT INTO deals (id, deal_no, name, price, tag, \`desc\`, img)
            VALUES ?
          `, [values]);
          console.log(`✓ Seeded ${data.dealsData.length} deals from data.json.`);
        }

      } catch (err) {
        console.error('Error reading/parsing data.json for seeding:', err.message);
      }
    } else {
      console.log('Database already has data. Skipping seeding.');
    }

    console.log('Database initialization completed successfully! 🎉');
  } catch (err) {
    console.error('Database initialization failed:', err);
    throw err;
  }
}

// Support running directly or importing as module
if (require.main === module) {
  initDatabase()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}

module.exports = initDatabase;
