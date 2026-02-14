import fs from 'fs';
import path from 'path';

const POSTS_PATH = path.resolve('src/data/posts.ts');
const REPORT_PATH = path.resolve('QA_REPORT.md');

function runAudit() {
    console.log("Starting QA Audit...");

    // 1. Load Data
    if (!fs.existsSync(POSTS_PATH)) {
        console.error("Posts file not found.");
        return;
    }
    const rawData = fs.readFileSync(POSTS_PATH, 'utf-8');

    // Robust Extraction
    // Search for the array start specifically after the variable declaration
    const headerPattern = /export const posts:\s*BlogPost\[\]\s*=\s*/;
    const match = rawData.match(headerPattern);

    if (!match) {
        console.error("Could not find 'export const posts' variable declaration.");
        return;
    }

    const startIdx = match.index + match[0].length;
    // Find the first '[' after the declaration
    const jsonStart = rawData.indexOf('[', startIdx);
    // Find the last ']' in the file (assuming it ends with the array or followed by simple exports)
    // Actually, we scan for the matching closing bracket to be safe, or just the last ']' before the next export?
    // The file ends with `export const getPostBySlug...`
    // So look for `];`
    const jsonEnd = rawData.lastIndexOf('];');

    if (jsonStart === -1 || jsonEnd === -1) {
        console.error(`Could not parse posts array boundaries. Start: ${jsonStart}, End: ${jsonEnd}`);
        return;
    }

    let posts;
    try {
        const jsonStr = rawData.substring(jsonStart, jsonEnd + 1); // include ']'
        posts = JSON.parse(jsonStr);
    } catch (e) {
        console.error("JSON Parse Error:", e);
        console.log("Snippet:", rawData.substring(jsonStart, jsonStart + 50) + "..." + rawData.substring(jsonEnd - 50, jsonEnd + 5));
        return;
    }

    console.log(`Auditing ${posts.length} posts...`);

    let report = `# Content Quality Assurance Report
**Date:** ${new Date().toLocaleString()}
**Total Posts:** ${posts.length}

> [!NOTE]
> This report audits every generated post against strict quality heuristics (Title Case, Artifacts, Structure, Density).

| ID | Title / Author | Status | Issues |
|----|----------------|--------|--------|
`;

    let failCount = 0;

    posts.forEach(post => {
        const issues = [];

        // CHECK 1: Title Quality
        if (post.title.match(/Week \d+ Submission/i)) issues.push("Title Artifact ('Week X Submission')");
        if (post.title.match(/Task \d+/i)) issues.push("Title Artifact ('Task X')");
        if (post.title.toLowerCase() === 'untitled post') issues.push("Title is 'Untitled Post'");
        if (post.title.length < 5) issues.push("Title too short");

        // CHECK 2: Author Name
        if (post.author.name.toLowerCase() === post.author.name && post.author.name !== "buildify contributor") {
            issues.push(`Author lowercase ('${post.author.name}')`);
        }
        if (post.author.name.includes('@')) issues.push("Author is email");

        // CHECK 3: Content Heuristics
        if (post.content.match(/Week \d+ Submission/i)) issues.push("Body Artifact ('Submission Header')");
        if (post.content.includes("<!DOCTYPE")) issues.push("Raw HTML Artifact ('DOCTYPE')");
        if (post.content.length < 100) issues.push("Content too short");

        // CHECK 4: Formatting
        const paraCount = (post.content.match(/<p>/g) || []).length;
        if (paraCount === 0) issues.push("Structure: No Paragraphs (<p>)");

        // CHECK 5: Paragraph Density (Wall of Text)
        // Check for paragraphs with > 600 chars
        const longParas = post.content.match(/<p>[^<]{600,}<\/p>/g);
        if (longParas) {
            issues.push(`Typograhy: ${longParas.length} 'Wall of Text' paragraphs (>600 chars). Needs splitting.`);
        }

        // CHECK 6: Empty Header Artifacts
        if (post.content.includes("<h3></h3>")) issues.push("Empty Header Tag");
        if (post.content.includes("<ul></ul>")) issues.push("Empty List Tag");


        // Status
        const status = issues.length === 0 ? "✅ PASS" : "⚠️ FAIL";
        if (issues.length > 0) failCount++;

        if (issues.length > 0) {
            report += `| ${post.id} | **${post.title}**<br>by ${post.author.name} | ${status} | ${issues.join('<br>')} |\n`;
        } else {
            // Optional: Don't list ALL passes to keep it readable, or list them for completeness?
            // User asked for "checkmark list ensuring EACH AND EVERY SINGLE ONE looks good".
            // So I should list them all.
            report += `| ${post.id} | ${post.title.substring(0, 40)}${post.title.length > 40 ? '...' : ''} | ${status} | - |\n`;
        }
    });

    report += `\n\n### Summary\n- **Passed:** ${posts.length - failCount}\n- **Failed:** ${failCount}\n- **Success Rate:** ${Math.round(((posts.length - failCount) / posts.length) * 100)}%`;

    fs.writeFileSync(REPORT_PATH, report);
    console.log(`Report generated at ${REPORT_PATH}`);
}

runAudit();
