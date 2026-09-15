/*
  Backend for the Data Science Quiz & Puzzle site.

  Serves the static frontend from /public and exposes a tiny
  key-value API used for the SHARED leaderboard data:

    GET  /api/storage/:key           -> { key, value }  (value is null if not set)
    POST /api/storage/:key  { value } -> { key, value }

  Data is stored in a Postgres database (works great with Supabase's
  free tier), so leaderboard scores survive redeploys, restarts, and
  free-tier spin-downs — unlike a local JSON file, which does not.

  Requires an environment variable:
    DATABASE_URL = the Postgres connection string (see README.md)
*/

const express = require('express');
const path = require('path');
const { Pool } = require('pg');

const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error(
    'Missing DATABASE_URL environment variable. Set it to your Postgres connection string (see README.md).'
  );
  process.exit(1);
}

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // required for Supabase's hosted Postgres
});

async function initDb() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS storage_kv (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `);
}

const app = express();
app.use(express.json());

// Basic key validation to keep things sane
function isValidKey(key) {
  return typeof key === 'string' && key.length > 0 && key.length < 200 && !/[\s/\\'"]/.test(key);
}

// ---- API routes ----
app.get('/api/storage/:key', async (req, res) => {
  const { key } = req.params;
  if (!isValidKey(key)) return res.status(400).json({ error: 'invalid key' });
  try {
    const result = await pool.query('SELECT value FROM storage_kv WHERE key = $1', [key]);
    const value = result.rows.length ? result.rows[0].value : null;
    res.json({ key, value });
  } catch (err) {
    console.error('GET /api/storage error:', err);
    res.status(500).json({ error: 'database error' });
  }
});

app.post('/api/storage/:key', async (req, res) => {
  const { key } = req.params;
  if (!isValidKey(key)) return res.status(400).json({ error: 'invalid key' });
  const { value } = req.body || {};
  if (typeof value !== 'string') {
    return res.status(400).json({ error: 'value must be a string' });
  }
  try {
    await pool.query(
      `INSERT INTO storage_kv (key, value, updated_at)
       VALUES ($1, $2, now())
       ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value, updated_at = now()`,
      [key, value]
    );
    res.json({ key, value });
  } catch (err) {
    console.error('POST /api/storage error:', err);
    res.status(500).json({ error: 'database error' });
  }
});

app.get('/api/health', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ ok: true, db: 'connected' });
  } catch (err) {
    res.status(500).json({ ok: false, db: 'error' });
  }
});

// ---- static frontend ----
app.use(express.static(path.join(__dirname, 'public')));

initDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Data Science Quiz & Puzzle server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to initialize database:', err);
    process.exit(1);
  });
