
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

/**
 * Simple CSV Parser (Copied from src/lib/csvParser.ts)
 */
function parseLine(text: string): string[] {
    const result: string[] = [];
    let cur = '';
    let inQuote = false;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (inQuote) {
            if (char === '"') {
                if (i + 1 < text.length && text[i + 1] === '"') {
                    cur += '"';
                    i++;
                } else {
                    inQuote = false;
                    // cur += '"'; // Logic slightly different in original? No, logic is fine.
                }
            } else {
                cur += char;
            }
        } else {
            if (char === '"') {
                inQuote = true;
            } else if (char === ',') {
                result.push(cur);
                cur = '';
            } else {
                cur += char;
            }
        }
    }
    result.push(cur);
    return result;
}

function parseCSV<T>(csv: string): T[] {
    const lines = csv.split(/\r?\n/).filter(line => line.trim() !== '');
    if (lines.length === 0) return [];

    const headers = parseLine(lines[0]).map(h => h.trim().replace(/^"|"$/g, '')); // Strip quotes from headers if present
    const result: T[] = [];

    for (let i = 1; i < lines.length; i++) {
        const currentLine = parseLine(lines[i]);
        // Logic to handle different lengths?
        // Simpler parse: Just mapping headers.
        const obj: any = {};
        for (let j = 0; j < headers.length; j++) {
            // Basic implementation
            // The original implementation had more logic for unescaping.
            // I'll stick to a simpler mapping for audit purposes.
            // Actually, copying the ORIGINAL logic is safer.
            // But parseLine above returns cleaned values?
            // No, parseLine above returns raw values (minus surrounding quotes logic inside loop).
            // Wait, the parseLine I copied above REMOVED the quote addition logic `cur += '"'` inside `else` block?
            // Orig: `cur += '"';` (keep quote).
            // My copy: `// cur += '"';` (commented out).
            // This effectively strips quotes.
            // Good.
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

        console.log(`Total Industries Found: ${records.length}`);

        const missing: string[] = [];
        const thin: string[] = [];
        const good: string[] = [];

        records.forEach(record => {
            const hasProblem = record['H2 Problem'] && record['H2 Problem'].length > 10;
            const hasSolution = record['H2 Solution'] && record['H2 Solution'].length > 10;
            const hasBenefits = (record['Benefit 1']?.length > 5) && (record['Benefit 2']?.length > 5) && (record['Benefit 3']?.length > 5);
            const hasTestimonial = record['Testimonial'] && record['Testimonial'].length > 10;

            if (!hasProblem || !hasSolution) {
                missing.push(record.Industry);
            } else if (!hasBenefits || !hasTestimonial) {
                thin.push(record.Industry);
            } else {
                good.push(record.Industry);
            }
        });

        console.log(`✅ Fully Populated: ${good.length}`);
        console.log(`⚠️ Thin Content (Missing Benefits/Testimonials): ${thin.length}`);
        console.log(`❌ Missing Core Content (Problem/Solution): ${missing.length}`);

        if (thin.length > 0) {
            console.log('\n--- Thin Industries ---');
            thin.forEach(ind => console.log(`- ${ind}`));
        }

        if (missing.length > 0) {
            console.log('\n--- Missing Industries ---');
            missing.forEach(ind => console.log(`- ${ind}`));
        }

    } catch (error) {
        console.error("Error reading CSV:", error);
    }
};

audit();
