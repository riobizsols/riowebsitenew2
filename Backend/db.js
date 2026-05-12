const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

pool.on('connect', () => {
  console.log('[postgresql] Pool client connected');
});

pool.on('error', (err) => {
  console.error('[postgresql] Unexpected pool error:', err.message);
});

async function testConnection() {
  try {
    const result = await pool.query('SELECT NOW() AS now');
    console.log('[postgresql] Connection OK, server time:', result.rows[0].now);
  } catch (err) {
    console.error('[postgresql] Connection test failed:', err.message);
  }
}

module.exports = { pool, testConnection };
