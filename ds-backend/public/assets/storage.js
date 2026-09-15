/*
  Storage module.

  - Personal data (shared = false), like the player's name, stays in
    the browser's localStorage — no need to round-trip to a server.
  - Shared data (shared = true), like leaderboard entries, is sent to
    our own backend's /api/storage/:key endpoint so every visitor sees
    the same leaderboard.
*/
const CCStorage = (function () {
  const hasRemote = true; // backend is always available once deployed

  async function get(key, shared) {
    if (shared) {
      try {
        const res = await fetch(`/api/storage/${encodeURIComponent(key)}`);
        if (!res.ok) return null;
        const data = await res.json();
        return data && data.value != null ? data.value : null;
      } catch (e) {
        return null;
      }
    }
    return localStorage.getItem(key);
  }

  async function set(key, value, shared) {
    if (shared) {
      try {
        const res = await fetch(`/api/storage/${encodeURIComponent(key)}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ value }),
        });
        return res.ok;
      } catch (e) {
        return false;
      }
    }
    localStorage.setItem(key, value);
    return true;
  }

  return { get, set, hasRemote };
})();

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str == null ? '' : String(str);
  return div.innerHTML;
}

async function ccLoadStoredName(inputEl) {
  try {
    const value = await CCStorage.get('player-name', false);
    if (value) inputEl.value = value;
  } catch (e) {
    /* no stored name yet */
  }
}

function ccWatchNameInput(inputEl) {
  inputEl.addEventListener('input', async () => {
    const name = inputEl.value.trim();
    if (!name) return;
    await CCStorage.set('player-name', name, false);
  });
}

function ccCurrentPlayerName(inputEl) {
  const v = inputEl ? inputEl.value.trim() : '';
  return v || 'Anonymous';
}

// MODIFIED: Added 'mode' parameter to support both quizzes and puzzles
async function ccLoadLeaderboard(unitIdx, mode = 'quiz') {
  const key = `leaderboard:${mode}:unit${unitIdx}`;
  const raw = await CCStorage.get(key, true);
  try {
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

// MODIFIED: Added 'mode' parameter and passed it to ccLoadLeaderboard
async function ccSaveLeaderboardEntry(unitIdx, name, score, total, mode = 'quiz') {
  const key = `leaderboard:${mode}:unit${unitIdx}`;
  let entries = await ccLoadLeaderboard(unitIdx, mode);
  entries.push({ name, score, total, ts: Date.now() });
  entries.sort((a, b) => (b.score / b.total) - (a.score / a.total) || a.ts - b.ts);
  entries = entries.slice(0, 30);
  await CCStorage.set(key, JSON.stringify(entries), true);
  return entries;
}

function ccRenderLeaderboardRows(container, entries, highlightEntry) {
  if (!entries || !entries.length) {
    container.innerHTML = '<p class="lb-empty">No scores yet — be the first to finish this unit.</p>';
    return;
  }
  const sorted = [...entries].sort((a, b) => (b.score / b.total) - (a.score / a.total) || a.ts - b.ts);
  const top = sorted.slice(0, 10);
  container.innerHTML = top.map((e, i) => `
    <div class="lb-row${e === highlightEntry ? ' me' : ''}">
      <span class="lb-rank">${i + 1}</span>
      <span class="lb-name">${escapeHtml(e.name)}</span>
      <span class="lb-score">${e.score}/${e.total}</span>
    </div>
  `).join('');
}

function ccShowStorageNoteIfLocal(noteEl) {
  if (noteEl && !CCStorage.hasRemote) {
    noteEl.classList.add('show');
  }
}