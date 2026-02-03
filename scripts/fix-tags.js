import fs from 'fs';
import path from 'path';

const postsPath = path.join(process.cwd(), 'src/data/posts.ts');
let content = fs.readFileSync(postsPath, 'utf8');

// Regex to find tags arrays and clean them
// This is a naive regex approach but should work for the specific format we created
// Pattern: "tags": [ ... ]
// We will look for sequences of "Business", "Business"

// Actually, since it's a TS file exporting a constant, let's just use string replacement for the specific corruption we introduced
// We introduced: "tags": ["Business",\n            "Business",
// We want: "tags": [\n            "Business",

// Or better: "tags": ["Business", "Business" -> "tags": ["Business"

// Let's use a regex that matches the double "Business"
content = content.replace(/"tags": \[\s*"Business",\s*"Business"/g, '"tags": ["Business"');

// Also handle the case where it might be on separate lines like in the view_file output
// "tags": ["Business",\n            "Business",
content = content.replace(/"tags": \[\s*"Business",\s*"Business"/g, '"tags": ["Business"');

// Comprehensive fix: read the file, extract the posts array (risky with regex on large file), 
// or just target the specific repeated string pattern.
// transform: "tags": ["Business", "Business", "Technology"] -> "tags": ["Business", "Technology"]
// transform: "tags": ["Business",\n            "Business",\n            "Technology" -> "tags": ["Business",\n            "Technology"

// Let's try to just fix the specific double occurance string
// The sed command did: s/"tags": \[/"tags": ["Business",/g
// Original: "tags": ["Business",
// Result: "tags": ["Business", "Business",

// So we just need to replace `"tags": ["Business", "Business",` with `"tags": ["Business",`

content = content.replace(/"tags": \["Business", "Business",/g, '"tags": ["Business",');
content = content.replace(/"tags": \["Business",\s*"Business",/g, '"tags": ["Business",');

fs.writeFileSync(postsPath, content);
console.log('Fixed tags in posts.ts');
