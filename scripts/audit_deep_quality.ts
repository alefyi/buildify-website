
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const csvPath = path.join(__dirname, '../src/use-cases/comma-separated values.csv');

interface IndustryRow {
    Industry: string;
    Slug: string;
    'H2 Problem': string;
    'H2 Solution': string;
    'Benefit 1': string;
    'Benefit 2': string;
    'Benefit 3': string;
    'Testimonial': string;
}

// AI "Tell-tale" words
const AI_WORDS = [
    'delve', 'harness', 'leverage', 'transformative', 'democratize',
    'landscape', 'realm', 'revolutionize', 'paramount', 'pivotal',
    'unlock', 'unleash', 'power of', 'game-changer'
];

function parseLine(text: string): string[] {
    const result: string[] = [];
    let cur = '';
    let inQuote = false;
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (inQuote) {
            if (char === '"') {
                if (i + 1 < text.length && text[i + 1] === '"') {
                    cur += '"'; i++;
                } else { inQuote = false; }
            } else { cur += char; }
        } else {
            if (char === '"') { inQuote = true; }
            else if (char === ',') { result.push(cur); cur = ''; }
            else { cur += char; }
        }
    }
    result.push(cur);
    return result;
}

function parseCSV<T>(csv: string): T[] {
    const lines = csv.split(/\r?\n/).filter(line => line.trim() !== '');
    if (lines.length === 0) return [];
    const headers = parseLine(lines[0]).map(h => h.trim().replace(/^"|"$/g, ''));
    const result: T[] = [];
    for (let i = 1; i < lines.length; i++) {
        const currentLine = parseLine(lines[i]);
        if (currentLine.length < headers.length) continue;
        const obj: any = {};
        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentLine[j] || '';
        }
        result.push(obj as T);
    }
    return result;
}

const audit = () => {
    try {
        const fileContent = fs.readFileSync(csvPath, 'utf-8');
        const records = parseCSV<IndustryRow>(fileContent);

        console.log(`Analyzed ${records.length} Industries.\n`);

        let skeletonCount = 0;
        let aiCount = 0;
        let duplicateCount = 0;

        // Maps for duplicate detection
        const problemMap = new Map<string, string[]>();

        records.forEach(record => {
            const problem = record['H2 Problem'] || '';
            const solution = record['H2 Solution'] || '';
            const benefits = [record['Benefit 1'], record['Benefit 2'], record['Benefit 3']].join(' ');
            const allText = (problem + ' ' + solution + ' ' + benefits).toLowerCase();

            // 1. Skeleton Check (Length)
            const isShort = problem.length < 50 || solution.length < 50;

            // 2. AI Word Check
            let aiScore = 0;
            AI_WORDS.forEach(word => {
                if (allText.includes(word)) aiScore++;
            });
            const isAI = aiScore > 2; // Threshold

            // 3. Repetition Check
            if (problem.length > 10) {
                const existing = problemMap.get(problem) || [];
                existing.push(record.Industry);
                problemMap.set(problem, existing);
            }

            // Scoring
            let risk = 0;
            if (isShort) risk += 50;
            if (isAI) risk += 30;

            // Output critical issues
            if (risk >= 50) {
                console.log(`[RISK ${risk}%] ${record.Industry}`);
                if (isShort) console.log(`  - Too Short (Problem: ${problem.length} chars)`);
                if (isAI) console.log(`  - AI Pattern Detected (${aiScore} matches)`);
                skeletonCount++;
            } else if (isAI) {
                // Just log AI pages if wanted, but maybe not critical
                // aiCount++;
            }
        });

        // Repetition Report
        console.log('\n--- Repetition Audit ---');
        problemMap.forEach((industries, text) => {
            if (industries.length > 3) {
                console.log(`[DUPLICATE] "${text.substring(0, 40)}..." used by ${industries.length} industries.`);
                duplicateCount++;
            }
        });

        console.log(`\nResults:`);
        console.log(`- High Risk (Skeleton) Pages: ${skeletonCount}`);
        console.log(`- Excessive Repetition Groups: ${duplicateCount}`);

    } catch (error) {
        console.error("Error:", error);
    }
};

audit();
