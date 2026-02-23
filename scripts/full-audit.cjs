const fs = require('fs');
const path = require('path');

// Use a hacky approach since posts.ts uses ESM
// We'll parse the file directly
const postsFile = fs.readFileSync(path.join(process.cwd(), 'src', 'data', 'posts.ts'), 'utf8');

// Extract slug and title pairs with basic regex
const slugMatches = [...postsFile.matchAll(/"slug":\s*"([^"]+)"/g)];
const titleMatches = [...postsFile.matchAll(/"title":\s*"([^"]+)"/g)];

// Extract content blocks - find content fields
const contentMatches = [...postsFile.matchAll(/"content":\s*"([^]*?)(?:(?<!\\)"),\s*\n\s*"author"/g)];

// Simpler: just extract everything between "content": " and the next "author"
const posts = [];
for (let i = 0; i < slugMatches.length; i++) {
    const slug = slugMatches[i][1];
    const title = titleMatches[i] ? titleMatches[i][1] : 'UNKNOWN';

    // Find content for this post by searching after the slug position
    const slugPos = slugMatches[i].index;
    const contentStart = postsFile.indexOf('"content":', slugPos);
    const authorStart = postsFile.indexOf('"author":', contentStart);
    const contentBlock = postsFile.substring(contentStart, authorStart);

    // Count words (rough)
    const textOnly = contentBlock.replace(/<[^>]+>/g, ' ').replace(/\\n/g, ' ').replace(/\s+/g, ' ');
    const words = textOnly.split(' ').filter(w => w.length > 0).length;

    // Count headings
    const h2s = (contentBlock.match(/<h2>/gi) || []).length;
    const h3s = (contentBlock.match(/<h3>/gi) || []).length;

    // Count links
    const links = (contentBlock.match(/<a /gi) || []).length;

    // Get tags
    const tagsStart = postsFile.indexOf('"tags":', slugPos);
    const tagsEnd = postsFile.indexOf(']', tagsStart);
    const tagsBlock = postsFile.substring(tagsStart, tagsEnd + 1);
    const tagMatches = [...tagsBlock.matchAll(/"([^"]+)"/g)].map(m => m[1]).filter(t => t !== 'tags');

    // Get SEO title
    const seoStart = postsFile.indexOf('"seo":', slugPos);
    const seoTitleMatch = postsFile.substring(seoStart, seoStart + 500).match(/"title":\s*"([^"]+)"/);
    const seoTitle = seoTitleMatch ? seoTitleMatch[1] : 'NONE';

    // Get SEO keywords
    const keywordsMatch = postsFile.substring(seoStart, seoStart + 800).match(/"keywords":\s*\[([\s\S]*?)\]/);
    const seoKeywords = keywordsMatch ? [...keywordsMatch[1].matchAll(/"([^"]+)"/g)].map(m => m[1]) : [];

    posts.push({ slug, title, words, h2s, h3s, links, tags: tagMatches, seoTitle, seoKeywords });
}

// Load GSC data
const gscRows = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data', 'gsc_data.json'), 'utf8'));
const gscPages = {};
gscRows.forEach(r => {
    const slug = r.keys[1].replace('https://usebuildify.com/post/', '');
    if (!gscPages[slug]) gscPages[slug] = { impressions: 0, clicks: 0, queries: [] };
    gscPages[slug].impressions += r.impressions;
    gscPages[slug].clicks += r.clicks;
    gscPages[slug].queries.push({ query: r.keys[0], impressions: r.impressions, position: r.position });
});
Object.values(gscPages).forEach(p => p.queries.sort((a, b) => b.impressions - a.impressions));

// Print comprehensive audit
console.log(JSON.stringify({ posts, gscPages }, null, 2));
