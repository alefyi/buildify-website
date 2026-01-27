import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const csvPath = path.join(__dirname, '../use-cases/comma-separated values.csv');
const outputPath = path.join(__dirname, '../data/industries.ts');

// Ensure data directory exists
const dataDir = path.join(__dirname, '../data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

function parseCSV(csvText) {
    const lines = [];
    let currentLine = [];
    let currentField = '';
    let insideQuotes = false;

    for (let i = 0; i < csvText.length; i++) {
        const char = csvText[i];
        const nextChar = csvText[i + 1];

        if (char === '"') {
            if (insideQuotes && nextChar === '"') {
                currentField += '"';
                i++; // Skip next quote
            } else {
                insideQuotes = !insideQuotes;
            }
        } else if (char === ',' && !insideQuotes) {
            currentLine.push(currentField.trim());
            currentField = '';
        } else if ((char === '\r' || char === '\n') && !insideQuotes) {
            if (char === '\r' && nextChar === '\n') i++; // Handle CRLF
            currentLine.push(currentField.trim());
            lines.push(currentLine);
            currentLine = [];
            currentField = '';
        } else {
            currentField += char;
        }
    }
    if (currentField || currentLine.length > 0) {
        currentLine.push(currentField.trim());
        lines.push(currentLine);
    }
    return lines;
}

try {
    const csvContent = fs.readFileSync(csvPath, 'utf-8');
    const rows = parseCSV(csvContent);
    const headers = rows[0]; // Header row
    const dataRows = rows.slice(1).filter(r => r.length > 1); // Skip header and empty rows

    const industries = dataRows.map(row => {
        // Simple mapping based on known index or header search would be safer if headers change order, 
        // but for this task I'll rely on index mapping based on standard CSV read.
        // Actually, let's map by header name for robustness.

        const getValue = (headerName) => {
            const index = headers.indexOf(headerName);
            if (index === -1) return '';
            return row[index] || '';
        };

        return {
            name: getValue('Industry'),
            slug: getValue('Slug'),
            seo: {
                title: getValue('SEO Title'),
                description: getValue('Meta Description'),
            },
            hero: {
                title: getValue('H1 Title'),
                subtitle: getValue('H2 Supporting'),
            },
            problem: {
                title: getValue('H2 Problem'),
                description: getValue('Problem Description') || '', // Is there a description? No, just titles in H2 Problem.
                // Wait, checking the CSV again. "H2 Problem", then "H2 Solution".
                // In row 2: "Without a clear discount...". This looks like the description for the problem?
                // The header says "H2 Problem" but the content is long text. Let's start with matching content to layout.
                // Row 2 col "H2 Problem": "Without a clear discount for long-term retainer agreements..." => This is text.
                // So "H2 Problem" acts as the problem description text.
            },
            solution: {
                title: getValue('H2 Solution'), // "Over the weekend, add a bonus credit..."
                valueProp: getValue('H3 Unique Value Prop'), // "Secure Stable, Recurring Revenue..."
            },
            benefits: [
                getValue('Benefit 1'),
                getValue('Benefit 2'),
                getValue('Benefit 3'),
            ].filter(Boolean),
            testimonial: {
                quote: getValue('Testimonial'),
                author: getValue('Testimonial Credit Name'),
                business: getValue('Testimonial Credit Place'),
            }
        };
    });

    const fileContent = `export interface IndustryData {
    name: string;
    slug: string;
    seo: {
        title: string;
        description: string;
    };
    hero: {
        title: string;
        subtitle: string;
    };
    problem: {
        text: string;
    };
    solution: {
        text: string;
        valueProp: string;
    };
    benefits: string[];
    testimonial: {
        quote: string;
        author: string;
        business: string;
    };
}

export const industries: IndustryData[] = ${JSON.stringify(industries, null, 4)};
`;

    fs.writeFileSync(outputPath, fileContent);
    console.log(`Successfully generated ${outputPath} with ${industries.length} industries.`);

} catch (error) {
    console.error('Error processing CSV:', error);
    process.exit(1);
}
