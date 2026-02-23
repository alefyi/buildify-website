const fs = require('fs');
const path = require('path');

const rows = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data', 'gsc_data.json'), 'utf8'));

// Aggregate by query (across all pages)
const queryMap = {};
rows.forEach(r => {
    const q = r.keys[0];
    if (!queryMap[q]) queryMap[q] = { query: q, clicks: 0, impressions: 0, positions: [], pages: [] };
    queryMap[q].clicks += r.clicks;
    queryMap[q].impressions += r.impressions;
    queryMap[q].positions.push({ pos: r.position, imps: r.impressions });
    queryMap[q].pages.push(r.keys[1]);
});

// Weighted average position
Object.values(queryMap).forEach(q => {
    const totalImps = q.positions.reduce((s, p) => s + p.imps, 0);
    q.avgPos = totalImps > 0 ? q.positions.reduce((s, p) => s + p.pos * p.imps, 0) / totalImps : 0;
});

const queries = Object.values(queryMap);

// Filter out branded queries
const branded = ['buildify', 'buildifi', 'buidify', 'buildify.com', 'buildify app', 'buildify saas', 'buildify company', 'buildify internship', 'buildify official', '"buildify"'];
const nonBranded = queries.filter(q => !branded.some(b => q.query.includes(b)));

// --- TIER 1: Strike Distance (Pos 5-20, >5 impressions) ---
const strikeDistance = nonBranded
    .filter(q => q.avgPos >= 5 && q.avgPos <= 20 && q.impressions >= 3)
    .sort((a, b) => a.avgPos - b.avgPos);

// --- TIER 2: Near Page 1 (Pos 20-40, >5 impressions) ---
const nearPage1 = nonBranded
    .filter(q => q.avgPos > 20 && q.avgPos <= 40 && q.impressions >= 3)
    .sort((a, b) => b.impressions - a.impressions);

// --- TIER 3: High Volume, Buried (>20 impressions, Pos >40) ---
const highVolBuried = nonBranded
    .filter(q => q.impressions >= 20 && q.avgPos > 40)
    .sort((a, b) => b.impressions - a.impressions);

// --- Aggregate by page ---
const pageMap = {};
rows.forEach(r => {
    const p = r.keys[1];
    if (!pageMap[p]) pageMap[p] = { url: p, clicks: 0, impressions: 0, queries: [] };
    pageMap[p].clicks += r.clicks;
    pageMap[p].impressions += r.impressions;
    pageMap[p].queries.push({ query: r.keys[0], impressions: r.impressions, position: r.position });
});

const pages = Object.values(pageMap).sort((a, b) => b.impressions - a.impressions);

// Print results
console.log('=== TIER 1: STRIKE DISTANCE (Pos 5-20) ===');
console.log('These keywords are closest to Page 1. Small improvements = big gains.\n');
strikeDistance.slice(0, 20).forEach(q => {
    console.log(`  Pos ${q.avgPos.toFixed(1)} | ${q.impressions} imps | "${q.query}"`);
    console.log(`    Pages: ${[...new Set(q.pages)].join(', ')}`);
});

console.log('\n=== TIER 2: NEAR PAGE 1 (Pos 20-40) ===');
console.log('These need content improvements to break into top 20.\n');
nearPage1.slice(0, 15).forEach(q => {
    console.log(`  Pos ${q.avgPos.toFixed(1)} | ${q.impressions} imps | "${q.query}"`);
});

console.log('\n=== TIER 3: HIGH VOLUME, BURIED (Pos >40, >20 imps) ===');
console.log('Google knows you exist for these terms but ranks you low.\n');
highVolBuried.slice(0, 15).forEach(q => {
    console.log(`  Pos ${q.avgPos.toFixed(1)} | ${q.impressions} imps | "${q.query}"`);
});

console.log('\n=== TOP PAGES BY IMPRESSION ===\n');
pages.slice(0, 10).forEach(p => {
    const slug = p.url.replace('https://usebuildify.com', '');
    const topQueries = p.queries.sort((a, b) => b.impressions - a.impressions).slice(0, 3);
    console.log(`  ${p.clicks} clicks / ${p.impressions} imps - ${slug}`);
    topQueries.forEach(q => console.log(`    "${q.query}" (${q.impressions} imps, Pos ${q.position.toFixed(1)})`));
});

// Summary stats
console.log('\n=== SUMMARY ===');
console.log(`Total non-branded queries: ${nonBranded.length}`);
console.log(`Strike distance opportunities: ${strikeDistance.length}`);
console.log(`Near-page-1 opportunities: ${nearPage1.length}`);
console.log(`High-volume buried: ${highVolBuried.length}`);
