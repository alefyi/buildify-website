
const fs = require('fs');
const path = require('path');

const dataPath = path.join(process.cwd(), 'data', 'gsc_data.json');
const rawData = fs.readFileSync(dataPath, 'utf8');
const rows = JSON.parse(rawData);

let totalClicks = 0;
let totalImpressions = 0;
const pages = {};
const queries = [];

rows.forEach(row => {
    totalClicks += row.clicks;
    totalImpressions += row.impressions;

    // keys[0] is query, keys[1] is page
    const query = row.keys[0];
    const page = row.keys[1];

    queries.push({ query, clicks: row.clicks, impressions: row.impressions, position: row.position });

    if (!pages[page]) {
        pages[page] = { clicks: 0, impressions: 0 };
    }
    pages[page].clicks += row.clicks;
    pages[page].impressions += row.impressions;
});

// Sort queries by clicks then impressions
queries.sort((a, b) => b.clicks - a.clicks || b.impressions - a.impressions);

// Sort pages
const sortedPages = Object.entries(pages).sort(([, a], [, b]) => b.clicks - a.clicks || b.impressions - a.impressions);

console.log('--- GSC Summary (Last 30 Days) ---');
console.log(`Total Clicks: ${totalClicks}`);
console.log(`Total Impressions: ${totalImpressions}`);
console.log(`CTR: ${((totalClicks / totalImpressions) * 100).toFixed(2)}%`);
console.log('\n--- Top 10 Queries ---');
queries.slice(0, 10).forEach(q => {
    console.log(`${q.clicks} clicks / ${q.impressions} imps - "${q.query}" (Pos: ${q.position.toFixed(1)})`);
});

console.log('\n--- Top 10 Pages ---');
sortedPages.slice(0, 10).forEach(([url, stats]) => {
    console.log(`${stats.clicks} clicks / ${stats.impressions} imps - ${url}`);
});
