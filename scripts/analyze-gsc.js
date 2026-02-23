const data = require('../data/gsc_data.json');

// Aggregate by page
const byPage = {};
data.forEach(r => {
    const page = r.keys[1];
    if (!byPage[page]) byPage[page] = { clicks: 0, impressions: 0, queries: 0 };
    byPage[page].clicks += r.clicks;
    byPage[page].impressions += r.impressions;
    byPage[page].queries++;
});

console.log('=== TOP PAGES BY IMPRESSIONS ===');
Object.entries(byPage).sort((a, b) => b[1].impressions - a[1].impressions).slice(0, 15).forEach(([page, d]) => {
    console.log(`${d.impressions} imp | ${d.clicks} clicks | ${d.queries} queries | ${page}`);
});

console.log('\n=== TOP QUERIES BY IMPRESSIONS ===');
const byQuery = {};
data.forEach(r => {
    const q = r.keys[0];
    if (!byQuery[q]) byQuery[q] = { clicks: 0, impressions: 0, positions: [], pages: new Set() };
    byQuery[q].clicks += r.clicks;
    byQuery[q].impressions += r.impressions;
    byQuery[q].positions.push(r.position);
    byQuery[q].pages.add(r.keys[1]);
});
Object.entries(byQuery).sort((a, b) => b[1].impressions - a[1].impressions).slice(0, 25).forEach(([q, d]) => {
    const avgPos = (d.positions.reduce((a, b) => a + b, 0) / d.positions.length).toFixed(1);
    console.log(`${d.impressions} imp | ${d.clicks} clicks | pos ${avgPos} | "${q}"`);
});

console.log('\n=== STRIKING DISTANCE (pos 5-20, 3+ impressions) ===');
data.filter(r => r.position >= 5 && r.position <= 20 && r.impressions >= 3)
    .sort((a, b) => b.impressions - a.impressions).slice(0, 20).forEach(r => {
        console.log(`pos ${r.position.toFixed(1)} | ${r.impressions} imp | ${r.clicks} clicks | "${r.keys[0]}" -> ${r.keys[1].replace('https://usebuildify.com', '')}`);
    });

console.log('\n=== QUICK WINS (pos 1-10, 0 clicks, 3+ impressions) ===');
data.filter(r => r.position <= 10 && r.clicks === 0 && r.impressions >= 3)
    .sort((a, b) => b.impressions - a.impressions).slice(0, 15).forEach(r => {
        console.log(`pos ${r.position.toFixed(1)} | ${r.impressions} imp | "${r.keys[0]}" -> ${r.keys[1].replace('https://usebuildify.com', '')}`);
    });

console.log('\n=== PAGES WITH CLICKS ===');
data.filter(r => r.clicks > 0).sort((a, b) => b.clicks - a.clicks).forEach(r => {
    console.log(`${r.clicks} clicks | ${r.impressions} imp | pos ${r.position.toFixed(1)} | "${r.keys[0]}" -> ${r.keys[1].replace('https://usebuildify.com', '')}`);
});

console.log('\n=== TOTAL STATS ===');
const totalClicks = data.reduce((s, r) => s + r.clicks, 0);
const totalImpressions = data.reduce((s, r) => s + r.impressions, 0);
console.log(`Total clicks: ${totalClicks}`);
console.log(`Total impressions: ${totalImpressions}`);
console.log(`Overall CTR: ${(totalClicks / totalImpressions * 100).toFixed(2)}%`);
console.log(`Unique queries: ${Object.keys(byQuery).length}`);
console.log(`Unique pages: ${Object.keys(byPage).length}`);
