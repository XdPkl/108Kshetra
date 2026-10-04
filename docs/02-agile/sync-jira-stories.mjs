/**
 * sync-jira-stories — create the US-PO-01..17 backlog (plus epic
 * EP-PO-ITER) in Jira project DTRPR108K from jira-payloads.json.
 *
 * Run AFTER the PO supplies a fresh API token (the previous one was
 * revoked — it appeared in chat history). Credentials are read from
 * .env.local at the repo root (JIRA_EMAIL, JIRA_API_TOKEN, JIRA_BASE)
 * and never committed.
 *
 * Idempotency: the epic is looked up by summary first (JQL) and reused
 * if found; stories are NOT deduplicated — run once. Each story is
 * created parented to the epic and transitioned to Done (the delivered
 * state; epics remain To Do per convention).
 *
 * Usage:  node docs/02-agile/sync-jira-stories.mjs
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));

// --- credentials from .env.local (repo root) ---
const env = {};
for (const line of readFileSync(resolve(here, '../../../.env.local'), 'utf8').split(/\r?\n/)) {
  const m = line.match(/^([A-Z_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const { JIRA_EMAIL, JIRA_API_TOKEN, JIRA_BASE } = env;
if (!JIRA_EMAIL || !JIRA_API_TOKEN || !JIRA_BASE) {
  console.error('Missing JIRA_EMAIL / JIRA_API_TOKEN / JIRA_BASE in .env.local');
  process.exit(1);
}
const auth = `Basic ${Buffer.from(`${JIRA_EMAIL}:${JIRA_API_TOKEN}`).toString('base64')}`;
const api = async (path, opts = {}) => {
  const res = await fetch(`${JIRA_BASE}/rest/api/3${path}`, {
    ...opts,
    headers: { Authorization: auth, 'Content-Type': 'application/json', ...(opts.headers ?? {}) },
  });
  if (!res.ok) {
    console.error(`HTTP ${res.status} ${res.statusText} — ${path}\n${await res.text()}`);
    process.exit(1);
  }
  return res.status === 204 ? null : res.json();
};

const payloads = JSON.parse(readFileSync(join(here, 'jira-payloads.json'), 'utf8'));

// --- epic: reuse if it already exists ---
const search = await api(`/search?jql=${encodeURIComponent(`project=DTRPR108K AND summary~"EP-PO-ITER" AND issuetype=Epic`)}`);
let epicKey = search.issues?.[0]?.key;
if (epicKey) {
  console.log(`Epic exists: ${epicKey}`);
} else {
  const created = await api('/issue', { method: 'POST', body: JSON.stringify(payloads.epic.fields) });
  epicKey = created.key;
  console.log(`Epic created: ${epicKey}`);
}

// --- stories: create parented, then transition to Done ---
const keys = [];
for (const story of payloads.stories) {
  const body = { ...story.fields, parent: { key: epicKey } };
  const created = await api('/issue', { method: 'POST', body: JSON.stringify(body) });
  const transitions = await api(`/issue/${created.key}/transitions`);
  const done = transitions.transitions.find((t) => /done/i.test(t.name));
  if (done) await api(`/issue/${created.key}/transitions`, { method: 'POST', body: JSON.stringify({ transition: { id: done.id } }) });
  keys.push([story.fields.summary, created.key]);
  console.log(`${created.key} — ${story.fields.summary} (Done)`);
}

console.log('\nRecord these keys in docs/02-agile/user-stories.md (v2.1 sync record):');
for (const [summary, key] of keys) console.log(`| Story | ${summary.split(' — ')[0]} | EP-PO-ITER | | ${key} |`);
console.log(`| Epic | EP-PO-ITER — PO Refinement Iterations | — | — | ${epicKey} |`);
