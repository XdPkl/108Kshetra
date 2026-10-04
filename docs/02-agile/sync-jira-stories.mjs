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
 * Field quirk (observed 2026-10-04): combining labels/description/story-
 * points in one CREATE call trips a false "Specify a valid project ID or
 * key" error on this site, so we create with the core fields and apply
 * labels + points via a follow-up edit.
 *
 * Usage:  node docs/02-agile/sync-jira-stories.mjs [--only=US-PO-18,US-PO-19]
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));

// --- credentials from .env.local (repo root) ---
const env = {};
for (const line of readFileSync(resolve(here, '../../.env.local'), 'utf8').split(/\r?\n/)) {
  const m = line.match(/^([A-Z_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const { JIRA_EMAIL, JIRA_API_TOKEN, JIRA_BASE } = env;
if (!JIRA_EMAIL || !JIRA_API_TOKEN || !JIRA_BASE) {
  console.error('Missing JIRA_EMAIL / JIRA_API_TOKEN / JIRA_BASE in .env.local');
  process.exit(1);
}
const auth = `Basic ${Buffer.from(`${JIRA_EMAIL}:${JIRA_API_TOKEN}`).toString('base64')}`;
const sleep = (ms) => new Promise((ok) => setTimeout(ok, ms));
const api = async (path, opts = {}, attempt = 1) => {
  const res = await fetch(`${JIRA_BASE}/rest/api/3${path}`, {
    ...opts,
    headers: { Authorization: auth, 'Content-Type': 'application/json', ...(opts.headers ?? {}) },
  });
  if (res.ok) return res.status === 204 ? null : res.json();
  const body = await res.text();
  if (res.status >= 500 || res.status === 429 || attempt < 3) {
    console.log(`  retry ${attempt} after HTTP ${res.status}...`);
    await sleep(1200);
    return api(path, opts, attempt + 1);
  }
  console.error(`HTTP ${res.status} ${res.statusText} — ${path}\n${body}`);
  process.exit(1);
};

const payloads = JSON.parse(readFileSync(join(here, 'jira-payloads.json'), 'utf8'));

// --only US-PO-18,US-PO-19: sync a subset (already-synced stories are NOT
// deduplicated, so a full re-run would recreate them).
const onlyArg = process.argv.find((a) => a.startsWith('--only='));
const only = onlyArg ? onlyArg.split('=')[1].split(',').map((s) => s.trim()) : null;
const stories = only ? payloads.stories.filter((s) => only.some((k) => s.fields.summary.startsWith(k))) : payloads.stories;
if (only && stories.length === 0) {
  console.error('--only matched no stories:', only);
  process.exit(1);
}
if (only) console.log('syncing only:', stories.map((s) => s.fields.summary.split(' — ')[0]));

// --- epic: reuse if it already exists ---
const search = await api('/search/jql', { method: 'POST', // the new /search/jql API returns bare issue IDs unless fields are
  // requested — without fields:["key"] the lookup reads undefined and
  // duplicates the epic (observed 2026-10-04, round 31)
  body: JSON.stringify({ jql: 'project=DTRPR108K AND summary~"EP-PO-ITER" AND issuetype=Epic', fields: ['key'] }) });
let epicKey = search.issues?.[0]?.key;
if (epicKey) {
  console.log(`Epic exists: ${epicKey}`);
} else {
  const { labels, customfield_10016, ...core } = payloads.epic.fields;
  const created = await api('/issue', { method: 'POST', body: JSON.stringify({ fields: core }) });
  epicKey = created.key;
  await api(`/issue/${epicKey}`, { method: 'PUT', body: JSON.stringify({ fields: { labels, customfield_10016 } }) });
  console.log(`Epic created: ${epicKey}`);
}

// --- stories: create core, update labels/points, parent, transition Done ---
const keys = [];
for (const story of stories) {
  const { labels, customfield_10016, ...core } = story.fields;
  const created = await api('/issue', { method: 'POST', body: JSON.stringify({ fields: { ...core, parent: { key: epicKey } } }) });
  await api(`/issue/${created.key}`, { method: 'PUT', body: JSON.stringify({ fields: { labels, customfield_10016 } }) });
  const transitions = await api(`/issue/${created.key}/transitions`);
  const done = transitions.transitions.find((t) => /done/i.test(t.name));
  if (done) await api(`/issue/${created.key}/transitions`, { method: 'POST', body: JSON.stringify({ transition: { id: done.id } }) });
  keys.push([story.fields.summary, created.key]);
  console.log(`${created.key} — ${story.fields.summary} (Done)`);
}

console.log('\nRecord these keys in docs/02-agile/user-stories.md (v2.1 sync record):');
for (const [summary, key] of keys) console.log(`| Story | ${summary.split(' — ')[0]} | EP-PO-ITER | | ${key} |`);
console.log(`| Epic | EP-PO-ITER — PO Refinement Iterations | — | — | ${epicKey} |`);
