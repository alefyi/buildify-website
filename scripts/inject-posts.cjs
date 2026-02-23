const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, 'new-posts');
const postsFile = path.join(process.cwd(), 'src', 'data', 'posts.ts');

// Read all new post JSON files
const jsonFiles = fs.readdirSync(postsDir).filter(f => f.endsWith('.json') && !f.startsWith('._')).sort();
console.log(`Found ${jsonFiles.length} new posts to inject:`);
jsonFiles.forEach(f => console.log(`  - ${f}`));

// Read existing posts.ts
let content = fs.readFileSync(postsFile, 'utf8');

// Find the position of the first post entry (after "export const posts: BlogPost[] = [")
const insertMarker = 'export const posts: BlogPost[] = [';
const insertPos = content.indexOf(insertMarker) + insertMarker.length;

if (insertPos === -1 + insertMarker.length) {
    console.error('Could not find insertion point in posts.ts');
    process.exit(1);
}

// Build the new posts string
let newPostsStr = '\n';
jsonFiles.forEach((file, i) => {
    const post = JSON.parse(fs.readFileSync(path.join(postsDir, file), 'utf8'));

    // Escape the content for JS string (double quotes inside JSON string value need escaping)
    // Since we're inserting as a JS object literal, we format it properly
    const postStr = `    {
        "id": "${post.id}",
        "slug": "${post.slug}",
        "title": ${JSON.stringify(post.title)},
        "excerpt": ${JSON.stringify(post.excerpt)},
        "content": ${JSON.stringify(post.content)},
        "author": {
            "name": ${JSON.stringify(post.author.name)},
            "role": ${JSON.stringify(post.author.role)}
        },
        "date": "${post.date}",
        "readingTime": "${post.readingTime}",
        "tags": ${JSON.stringify(post.tags)},
        "seo": {
            "title": ${JSON.stringify(post.seo.title)},
            "description": ${JSON.stringify(post.seo.description)},
            "keywords": ${JSON.stringify(post.seo.keywords)}
        }
    },`;

    newPostsStr += postStr + '\n';
    console.log(`Prepared post ${post.id}: "${post.slug}" (${post.content.split(/\s+/).length} words)`);
});

// Insert new posts at the beginning of the array
const before = content.substring(0, insertPos);
const after = content.substring(insertPos);
content = before + newPostsStr + after;

fs.writeFileSync(postsFile, content, 'utf8');
console.log(`\nSuccessfully injected ${jsonFiles.length} posts into posts.ts`);

// Verify
const newContent = fs.readFileSync(postsFile, 'utf8');
const idMatches = [...newContent.matchAll(/"id":\s*"(\d+)"/g)];
console.log(`Total posts in file: ${idMatches.length}`);
console.log(`New IDs present: ${jsonFiles.map(f => JSON.parse(fs.readFileSync(path.join(postsDir, f), 'utf8')).id).join(', ')}`);
