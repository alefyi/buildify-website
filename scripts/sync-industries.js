import fs from 'fs';
import path from 'path';

const CSV_PATH = path.resolve('src/use-cases/comma-separated values.csv');
const OUTPUT_PATH = path.resolve('src/data/industries.ts');

function parseCSV(content) {
    const lines = content.split(/\r?\n/);
    const headers = parseLine(lines[0]);
    const results = [];

    for (let i = 1; i < lines.length; i++) {
        if (!lines[i].trim()) continue;
        const values = parseLine(lines[i]);
        if (values.length < headers.length) continue;

        const row = {};
        headers.forEach((header, index) => {
            row[header] = values[index];
        });
        results.push(row);
    }
    return results;
}

function parseLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
            if (inQuotes && line[i + 1] === '"') {
                current += '"';
                i++;
            } else {
                inQuotes = !inQuotes;
            }
        } else if (char === ',' && !inQuotes) {
            result.push(current.trim());
            current = '';
        } else {
            current += char;
        }
    }
    result.push(current.trim());
    return result;
}

try {
    const csvContent = fs.readFileSync(CSV_PATH, 'utf-8');
    const rows = parseCSV(csvContent);

    const industries = rows.map(row => ({
        name: row['Industry'],
        slug: row['Slug'],
        seo: {
            title: row['SEO Title'],
            description: row['Meta Description']
        },
        hero: {
            title: row['H1 Title'],
            subtitle: row['H2 Supporting']
        },
        problem: {
            text: row['H2 Problem']
        },
        solution: {
            text: row['H2 Solution'],
            valueProp: row['H3 Unique Value Prop']
        },
        benefits: [
            row['Benefit 1'],
            row['Benefit 2'],
            row['Benefit 3']
        ].filter(Boolean),
        testimonial: {
            quote: row['Testimonial'],
            author: row['Testimonial Credit Name'],
            business: row['Testimonial Credit Place']
        }
    }));

    const tsContent = `export interface IndustryData {
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

    fs.writeFileSync(OUTPUT_PATH, tsContent);
    console.log(`Successfully synced ${industries.length} industries to ${OUTPUT_PATH}`);
} catch (error) {
    console.error('Error syncing industries:', error);
    process.exit(1);
}
