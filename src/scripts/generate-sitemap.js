import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const csvPath = path.join(__dirname, '../use-cases/comma-separated values.csv');
const publicDir = path.join(__dirname, '../../public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

const BASE_URL = 'https://usebuildify.com';

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
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
                i++;
            } else {
                insideQuotes = !insideQuotes;
            }
        } else if (char === ',' && !insideQuotes) {
            currentLine.push(currentField.trim());
            currentField = '';
        } else if ((char === '\r' || char === '\n') && !insideQuotes) {
            if (char === '\r' && nextChar === '\n') i++;
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
    console.log('Reading CSV from:', csvPath);
    const csvContent = fs.readFileSync(csvPath, 'utf-8');
    const rows = parseCSV(csvContent);
    const headers = rows[0];
    const dataRows = rows.slice(1).filter(r => r.length > 1);

    const slugIndex = headers.indexOf('Slug');
    const updatedIndex = headers.indexOf('Updated On');

    if (slugIndex === -1) {
        throw new Error('Slug column not found in CSV');
    }

    // Static routes
    const staticRoutes = [
        '',
        '/contact',
        '/development',
        '/app-calculator',
        // Add other static routes here
    ];

    let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

    // Add static routes
    staticRoutes.forEach(route => {
        sitemapContent += `  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>
`;
    });

    // Add industry routes
    dataRows.forEach(row => {
        const slug = row[slugIndex];
        // Clean up date or use default
        // CSV date format: Fri Oct 03 2025 01:04:29 GMT+0000 ...
        // We want YYYY-MM-DD
        let lastMod = new Date().toISOString().split('T')[0];
        if (updatedIndex !== -1 && row[updatedIndex]) {
            try {
                const date = new Date(row[updatedIndex]);
                if (!isNaN(date.getTime())) {
                    lastMod = date.toISOString().split('T')[0];
                }
            } catch (e) {
                // Keep default
            }
        }

        if (slug) {
            sitemapContent += `  <url>
    <loc>${BASE_URL}/for/${slug}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
        }
    });

    sitemapContent += `</urlset>`;

    fs.writeFileSync(sitemapPath, sitemapContent);
    console.log(`Successfully generated sitemap at ${sitemapPath} with ${staticRoutes.length + dataRows.length} URLs.`);

} catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
}
