const fs = require('fs');
const path = require('path');

// Load GSC data
const gscRows = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data', 'gsc_data.json'), 'utf8'));

// Build GSC page map
const gscPages = {};
gscRows.forEach(r => {
    const slug = r.keys[1].replace('https://usebuildify.com', '');
    if (!gscPages[slug]) gscPages[slug] = { impressions: 0, clicks: 0, queries: [] };
    gscPages[slug].impressions += r.impressions;
    gscPages[slug].clicks += r.clicks;
    gscPages[slug].queries.push({
        query: r.keys[0],
        impressions: r.impressions,
        clicks: r.clicks,
        position: r.position
    });
});

// Sort queries within each page
Object.values(gscPages).forEach(p => {
    p.queries.sort((a, b) => b.impressions - a.impressions);
});

// Print all GSC pages (including orphans)
console.log('=== ALL GSC PAGES (including orphans) ===\n');
const sortedGscPages = Object.entries(gscPages).sort(([, a], [, b]) => b.impressions - a.impressions);
sortedGscPages.forEach(([slug, data]) => {
    console.log(`${slug} | ${data.clicks} clicks | ${data.impressions} imps`);
    data.queries.slice(0, 5).forEach(q => {
        console.log(`  "${q.query}" (${q.impressions} imps, Pos ${q.position.toFixed(1)})`);
    });
});
