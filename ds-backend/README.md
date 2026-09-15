# Data Science Quiz & Puzzle

Static quiz/puzzle site with a tiny Express backend that stores shared
leaderboard scores in a real Postgres database (Supabase free tier),
so scores never disappear — not on spin-down, not on redeploy.

## Project structure

- `public/` — the website (HTML/CSS/JS), served as static files.
- `server.js` — Express server that serves `public/` and exposes:
  - `GET  /api/storage/:key`  — read a stored value
  - `POST /api/storage/:key`  — write a stored value (`{ "value": "..." }`)
- Leaderboard data is stored in a Postgres table `storage_kv` (created
  automatically the first time the server starts). Only leaderboard
  data goes through the backend; the player's name is kept in the
  browser's localStorage.

## 1. Create a free Supabase Postgres database

1. Go to https://supabase.com and sign up (free).
2. Click "New project". Pick any name, set a database password
   (save it somewhere), pick a region close to you, and create it.
3. Once the project is ready, go to **Project Settings → Database**.
4. Under **Connection string**, choose the **URI** tab. Pick the
   **Transaction pooler** connection (port 6543) — it works well for
   apps like this that open short-lived connections.
5. Copy the connection string. It looks like:
   `postgresql://postgres.xxxxx:[YOUR-PASSWORD]@aws-0-xxxx.pooler.supabase.com:6543/postgres`
6. Replace `[YOUR-PASSWORD]` with the database password you set in step 2.

This full string is your `DATABASE_URL`.

> If you already made a Supabase project for another quiz site (e.g. the
> IoT one), you can create a **second** free project for this one, or
> reuse the same project — just make sure each site uses a different
> key prefix so their leaderboards don't collide. This project's keys
> are already namespaced as `leaderboard:quiz:unitN` and
> `leaderboard:puzzle:unitN`, so as long as you don't reuse those exact
> key names for another site sharing the same database, you're safe.
> Simplest and safest: use a separate Supabase project per site.

## 2. Run locally (optional)

```
cp .env.example .env
# edit .env and paste your DATABASE_URL
npm install
npm start
```

Then open http://localhost:3000

## 3. Deploy on Render (free)

1. Push this folder to a GitHub repo (root files + the `public` folder).
2. On Render.com: New → Web Service → connect the repo.
3. Build command: `npm install`  |  Start command: `npm start`
4. Under **Environment**, add an environment variable:
   - Key: `DATABASE_URL`
   - Value: your Supabase connection string from step 1
5. Deploy. Render gives you a public URL — leaderboard data will now
   persist permanently, across spin-downs, restarts, and redeploys.

## Notes

- Supabase's free tier is generous for a project like this (500MB
  storage, no time limit as long as it stays active). Your data is
  never deleted, but if the project sees **zero** activity for 7
  straight days, Supabase pauses it — and unlike Render's free-tier
  spin-down, a paused Supabase project does **not** wake itself back
  up on the next request. You'd need to click "Restore" in the
  Supabase dashboard, and the site would show errors until you do.
  In practice, if a handful of people play at least once a week, this
  never triggers.
- If you ever outgrow the key-value table, the same Postgres database
  can hold normal relational tables too — happy to help extend it.
