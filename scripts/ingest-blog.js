import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const CSV_PATH = path.resolve('ingest/comma-separated values.csv');
const OUTPUT_PATH = path.resolve('src/data/posts.ts');

const REPLACEMENT_MAP = {
    // Verbs
    "delve": "dig",
    "leveraging": "using",
    "unleash": "release",
    "demystify": "explain",
    "navigating": "managing",
    "facilitate": "help",
    "utilize": "use",
    "underscores": "shows",
    // Nouns
    "landscape": "world",
    "testament": "proof",
    "realm": "area",
    "tapestry": "mix",
    "methodology": "method",
    "functionality": "features",
    "utilization": "use",
    // Adjectives/Adverbs
    "poised": "ready",
    "ever-evolving": "changing",
    "paramount": "key",
    "pivotal": "vital",
};

// Patterns to strip completely
const ARTIFACT_PATTERNS = [
    /^Task \d+:?/i,
    /^Revenue Leak \d+:?/i,
    /^Current Situation:?/i,
    /^Common Challenges:?/i,
    /^The Solution:?/i,
    /^Summary:$/i,
    /^By Buildify Team$/i,
    /^Insight Report Title:?/i,
    /^Subject:?/i,
    /^Niche:?/i,
    /^Week \d+ Submission:?/i,
    /^Piggybacking off task \d+/i,
    /^SUBMISSION PART \d+/i,
    /.*Week \d+ Submission.*/i // Aggressive inline removal
];

function titleCase(str) {
    if (!str) return "";
    return str.toLowerCase().split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

function cleanText(text) {
    if (!text) return "";
    let cleaned = text.trim();

    // Basic formatting
    cleaned = cleaned.replace(/\r\n/g, '\n');
    cleaned = cleaned.replace(/—/g, ' - ');
    cleaned = cleaned.replace(/[\u2018\u2019]/g, "'");
    cleaned = cleaned.replace(/[\u201C\u201D]/g, '"');

    // DETOX: Remove Raw HTML Page Artifacts (Head, Style, Scripts)
    cleaned = cleaned.replace(/<!DOCTYPE html>/gi, '');
    cleaned = cleaned.replace(/<html[^>]*>([\s\S]*?)<\/html>/gi, '$1');
    cleaned = cleaned.replace(/<head>([\s\S]*?)<\/head>/gi, '');
    cleaned = cleaned.replace(/<style([\s\S]*?)<\/style>/gi, '');
    cleaned = cleaned.replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gm, "");
    cleaned = cleaned.replace(/<iframe\b[^>]*>([\s\S]*?)<\/iframe>/gm, "");
    cleaned = cleaned.replace(/<meta[^>]*>/gi, '');
    cleaned = cleaned.replace(/<link[^>]*>/gi, '');
    cleaned = cleaned.replace(/<title>.*?<\/title>/gi, '');
    cleaned = cleaned.replace(/<body[^>]*>/gi, '');
    cleaned = cleaned.replace(/<\/body>/gi, '');
    cleaned = cleaned.replace(/<\/html>/gi, '');

    return cleaned;
}

// Helper to chunk paragraphs recursively
function chunkParagraph(text) {
    if (text.length < 400) return `<p>${text}</p>`;

    // Split into sentences using a regex that handles basic punctuation
    const sentences = text.match(/[^.!?]+[.!?]+(\s+|$)/g);

    if (!sentences) {
        // Fallback: Just return it if we can't sentence split
        return `<p>${text}</p>`;
    }

    const chunks = [];
    let currentChunk = "";

    sentences.forEach(s => {
        if ((currentChunk + s).length > 400) {
            if (currentChunk.trim()) chunks.push(currentChunk.trim());
            currentChunk = s;
        } else {
            currentChunk += s;
        }
    });
    if (currentChunk.trim()) chunks.push(currentChunk.trim());

    return chunks.map(c => `<p>${c}</p>`).join('\n\n');
}

function formatContent(text) {
    if (!text) return "";

    let lines = text.split('\n');
    // Filter artifact lines
    lines = lines.filter(line => {
        const trimmed = line.trim();
        if (!trimmed) return true;
        for (const pattern of ARTIFACT_PATTERNS) {
            if (pattern.test(trimmed)) return false;
        }
        return true;
    });

    let cleaned = lines.join('\n');

    // Lexicon Replacement
    Object.entries(REPLACEMENT_MAP).forEach(([word, replacement]) => {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        cleaned = cleaned.replace(regex, replacement);
    });

    // ---------------------------------------------------------
    // SYSTEMIZATION FIXES (Running BEFORE standard formatting)
    // ---------------------------------------------------------

    // FIX: Merge Split Titles (Specific pattern for known failure)
    // "The Security" + newline + "Gap:" -> "The Security Gap:"
    cleaned = cleaned.replace(/The Security\s*\n\s*Gap:/g, 'The Security Gap:');

    // General merge for split titles (Word... Newline Word:)
    // Capture A-Z start line, newline, A-Z start Word:
    cleaned = cleaned.replace(/([A-Z][\w\s]{3,})\n\n?([A-Z]\w+:\s)/g, '$1 $2');

    // HEURISTIC: "Feature – Benefit" Lists (e.g. "Branded Mobile App – Customer...")
    // Detects: Start/Newline -> Capital Phrase (3-60 chars) -> Space/Dash -> Space -> Rest
    // Convert directly to H3 + P to avoid later logic messing it up
    cleaned = cleaned.replace(/(^|\n)([A-Z][\w\s]{3,60})\s+[–-—]\s+(.+)/g, '\n\n<h3>$2</h3>\n<p>$3</p>');

    // HEURISTIC: "Embedded Run-on Headers" (Global Regex)
    // Separates: (Start/Newline) (Header 10-80 chars) (No Punct) (Space/Newline) (Body Start Capital)
    cleaned = cleaned.replace(/(^|\n)([A-Z][^.?!:;\n]{10,80})(?<![.?!:;])\s+([A-Z][a-z])/g, '\n\n<h3>$2</h3>\n<p>$3');

    // FIX: Isolate Embedded Tips/Steps (Aggressive)
    // Force newlines before "Tip #" to ensure they are treated as segments
    cleaned = cleaned.replace(/([.?!]|\n)\s*(Tip #\d+|Step \d+|Note:|Key Takeaway:)/g, '$1\n\n$2');

    // ---------------------------------------------------------
    // STANDARD FORMATTING
    // ---------------------------------------------------------

    // Headers (AEO Friendly)
    // Note: This detects "Tip #1..." at start of line and makes it H3
    // CHANGED: Use \n\n replacement to ensure clear segment separation
    cleaned = cleaned.replace(/(?:^|\n\n)((?:Tip #\d+|Step \d+|Conclusion|The Problem|Key Takeaway|Note|Summary|Insight):?.*?)(?=\n)/g, '\n\n<h3>$1</h3>\n\n');
    cleaned = cleaned.replace(/^(Risk|Challenge|Benefit|Status|Niche|Industry|Revenue Leak):/gm, '\n<strong>$1:</strong>');

    // Detect likely headers (Capitalized, short, no period)
    // NOTE: This runs AFTER the specific fixes, so "The Security Gap" should now be one line and match this!
    cleaned = cleaned.replace(/\n\n([A-Z][\w\s\-'’]{3,60})\n\n/g, '\n\n<h3>$1</h3>\n\n');

    // Lists
    cleaned = cleaned.replace(/(?:^|\n)\s*[-*•]\s+(.+)/g, '\n<li>$1</li>');
    cleaned = cleaned.replace(/(?:^|\n)\s*\d+\.\s+(.+)/g, '\n<li>$1</li>');

    cleaned = cleaned.replace(/(<li>[\s\S]+?<\/li>)\n(?!<li>)/g, '$1</ul>\n');
    cleaned = cleaned.replace(/(?<!<\/li>)\n(<li>)/g, '\n<ul>$1');
    if (cleaned.startsWith('<li>')) cleaned = '<ul>' + cleaned;

    // Paragraph Handling & Structure Enforcement
    const segments = cleaned.split('\n\n');
    cleaned = segments.map(seg => {
        seg = seg.trim();
        if (!seg) return '';
        if (seg.startsWith('<h') || seg.startsWith('<ul') || seg.startsWith('<li') || seg.startsWith('<p')) return seg;

        // Final catch for absolute standalone headers
        // Just in case some short headers were missed by the regex
        if (seg.length < 80 && !seg.includes('.') && !seg.includes(',') && seg.length > 3) {
            const cleanHeader = seg.replace(/[–-—:]\s*$/, '').trim();
            return `<h3>${cleanHeader}</h3>`;
        }

        // Check for "Tip #X" or "Step X" specifically to ensure it's H3 if not already
        if (/^(Tip #\d+|Step \d+|Note:|Key Takeaway:)/.test(seg)) {
            // Don't wrap if it's already wrapped in H3 or contains block tags
            if (!seg.includes('<h')) {
                return `<h3>${seg}</h3>`;
            }
        }

        // AGGRESSIVE HEURISTIC: Recursive splitting
        return chunkParagraph(seg);
    }).join('\n\n');

    // Clean empty tags
    cleaned = cleaned.replace(/<p>\s*<\/p>/g, '');
    cleaned = cleaned.replace(/<h3>\s*<\/h3>/g, '');
    cleaned = cleaned.replace(/<\/ul>\s*<ul>/g, '');
    cleaned = cleaned.replace(/<p>&nbsp;<\/p>/g, '');

    // Cleanup: Remove any trailing dashes inside H3 tags that might have slipped through via regex
    cleaned = cleaned.replace(/<h3>(.*?)[\s–-—]+<\/h3>/g, '<h3>$1</h3>');

    return cleaned;
}

function slugify(text) {
    if (!text) return 'untitled-post';
    return text.toString().toLowerCase().trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

function parseCSV(text) {
    const rows = [];
    let currentRow = [];
    let currentField = '';
    let inQuotes = false;
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const nextChar = text[i + 1];
        if (char === '"') {
            if (inQuotes && nextChar === '"') { currentField += '"'; i++; }
            else { inQuotes = !inQuotes; }
        } else if (char === ',' && !inQuotes) {
            currentRow.push(currentField); currentField = '';
        } else if ((char === '\r' || char === '\n') && !inQuotes) {
            if (char === '\r' && nextChar === '\n') i++;
            currentRow.push(currentField); rows.push(currentRow); currentRow = []; currentField = '';
        } else { currentField += char; }
    }
    if (currentField || currentRow.length > 0) { currentRow.push(currentField); rows.push(currentRow); }
    const headers = rows[0].map(h => h.trim());
    return rows.slice(1).map(row => {
        if (row.length < headers.length) return null;
        const obj = {};
        headers.forEach((h, idx) => obj[h] = row[idx] || '');
        return obj;
    }).filter(r => r);
}

try {
    if (!fs.existsSync(CSV_PATH)) { throw new Error(`CSV not found at ${CSV_PATH}`); }
    const rows = parseCSV(fs.readFileSync(CSV_PATH, 'utf-8'));
    console.log(`Parsed ${rows.length} rows.`);

    const posts = [];
    const usedSlugs = new Set();
    const usedTitles = new Set();

    rows.forEach((row, index) => {
        // FILTER: Garbage Titles (File paths, URLs)
        let titleCandidate = (row['Name'] || "").trim();
        if (titleCandidate.startsWith('file://') ||
            titleCandidate.includes('C:/') ||
            titleCandidate.toLowerCase().includes('.html') ||
            titleCandidate.startsWith('http')) {
            return;
        }

        let rawContent = row['Content'] || "";
        const extraContent = row['Paste: Code or Link (if needed)'] || "";

        // Append extra content if safe
        if (extraContent.length > 50 && !extraContent.startsWith('http') && !rawContent.includes(extraContent.substring(0, 50))) {
            if (!extraContent.includes('<!DOCTYPE') && !extraContent.includes('<html')) {
                rawContent += `\n\n${extraContent}`;
            }
        }

        // FILTER: Content floor (min 150 chars)
        if (rawContent.length < 150) return;

        // 1. Author Name (Title Case)
        let authorName = (row['Name'] || "Buildify Contributor").trim();
        if (authorName.includes('@') || authorName.length < 2) authorName = "Buildify Contributor";
        authorName = titleCase(authorName);

        // 2. Cleaning & Title Extraction
        let content = cleanText(rawContent);

        let lines = content.replace(/<\/?[^>]+(>|$)/g, "\n").split('\n').map(l => l.trim()).filter(l => l.length > 0);

        let title = "Untitled Post";
        let titleFoundInBody = false;

        if (lines.length > 0) {
            let candidate = lines[0];
            // Clean specific artifacts from candidate
            candidate = candidate.replace(/^Task \d+:?/i, '')
                .replace(/['"]?s Week \d+ Submission:?/i, '')
                .replace(/"/g, '')
                .replace(/.*Submission.*/i, '')
                .trim();

            if (candidate.length > 10 && candidate.length < 150 && !candidate.startsWith('http')) {
                title = candidate;
                titleFoundInBody = true;
            } else if (candidate.length > 150) {
                // HEURISTIC: Title line is too long, likely the first sentence of content.
                const firstSentence = candidate.split(/[.!?]/)[0];
                if (firstSentence.length > 10 && firstSentence.length < 100) {
                    title = firstSentence;
                }
            }
        }

        // 3. Format Body
        let formattedContent = formatContent(content);

        // Remove Title Header if present
        if (titleFoundInBody && title.length > 15) {
            const escaped = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const removalRegex = new RegExp(`^\\s*(<h3>|<strong>|<p>)\\s*${escaped}\\s*(<\\/h3>|<\\/strong>|<\\/p>)`, 'i');
            formattedContent = formattedContent.replace(removalRegex, '');
        }

        // 4. Dedupe Titles
        const normTitle = title.toLowerCase().trim();
        if (usedTitles.has(normTitle)) return;
        usedTitles.add(normTitle);

        // 5. Slug
        let slug = slugify(title);
        let counter = 1;
        let originalSlug = slug;
        while (usedSlugs.has(slug)) { slug = `${originalSlug}-${counter}`; counter++; }
        usedSlugs.add(slug);

        // 6. Excerpt
        const plainText = formattedContent.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
        const excerpt = plainText.substring(0, 160) + "...";

        posts.push({
            id: row['ID'] || `gen-${index}`,
            slug,
            title,
            excerpt,
            content: formattedContent,
            author: { name: authorName, role: "Contributor" },
            date: (row['Created'] || "").split('T')[0] || new Date().toISOString().split('T')[0],
            readingTime: `${Math.ceil(formattedContent.length / 1000)} min read`,
            tags: ["Business", "Technology"],
            seo: { title: `${title} | Buildify`, description: excerpt, keywords: ["business", "tech"] }
        });
    });

    const tsContent = `export interface BlogPost {
    id: string; slug: string; title: string; excerpt: string; content: string;
    author: { name: string; role?: string; avatar?: string; };
    date: string; readingTime: string; tags: string[];
    seo: { title: string; description: string; keywords: string[]; };
}
export const posts: BlogPost[] = ${JSON.stringify(posts, null, 4)};
export const getPostBySlug = (slug: string) => posts.find(p => p.slug === slug);
export const getAllPosts = () => posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());`;

    fs.writeFileSync(OUTPUT_PATH, tsContent);
    console.log(`Generated ${posts.length} posts to ${OUTPUT_PATH}`);

} catch (e) {
    console.error(e);
    process.exit(1);
}
