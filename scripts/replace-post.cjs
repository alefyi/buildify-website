const fs = require('fs');
const path = require('path');

const postsFile = path.join(process.cwd(), 'src', 'data', 'posts.ts');
const newPostFile = path.join(__dirname, 'new-posts', process.argv[2]);

if (!process.argv[2]) { console.error('Usage: node replace-post.cjs <json-file>'); process.exit(1); }

const newPost = JSON.parse(fs.readFileSync(newPostFile, 'utf8'));
let content = fs.readFileSync(postsFile, 'utf8');

// Find this post by slug
const slugMarker = `"slug": "${newPost.slug}"`;
const slugIdx = content.indexOf(slugMarker);
if (slugIdx === -1) { console.error(`Could not find slug: ${newPost.slug}`); process.exit(1); }

// Find opening brace
let braceCount = 0, startIdx = slugIdx;
while (startIdx > 0) { startIdx--; if (content[startIdx] === '{') { braceCount++; if (braceCount === 1) break; } if (content[startIdx] === '}') braceCount--; }

// Find closing brace
braceCount = 0; let endIdx = startIdx;
while (endIdx < content.length) { if (content[endIdx] === '{') braceCount++; if (content[endIdx] === '}') braceCount--; if (braceCount === 0) break; endIdx++; }

const replacement = `{
        "id": "${newPost.id}",
        "slug": "${newPost.slug}",
        "title": ${JSON.stringify(newPost.title)},
        "excerpt": ${JSON.stringify(newPost.excerpt)},
        "content": ${JSON.stringify(newPost.content)},
        "author": {
            "name": ${JSON.stringify(newPost.author.name)},
            "role": ${JSON.stringify(newPost.author.role)}
        },
        "date": "${newPost.date}",
        "readingTime": "${newPost.readingTime}",
        "tags": ${JSON.stringify(newPost.tags)},
        "seo": {
            "title": ${JSON.stringify(newPost.seo.title)},
            "description": ${JSON.stringify(newPost.seo.description)},
            "keywords": ${JSON.stringify(newPost.seo.keywords)}
        }
    }`;

const oldWords = content.substring(startIdx, endIdx + 1).split(/\s+/).length;
content = content.substring(0, startIdx) + replacement + content.substring(endIdx + 1);
fs.writeFileSync(postsFile, content, 'utf8');

const newWords = newPost.content.split(/\s+/).length;
console.log(`Replaced "${newPost.slug}" : ${oldWords} → ${newWords} words`);
