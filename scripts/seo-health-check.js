
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COLORS = {
    reset: "\x1b[0m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    bold: "\x1b[1m"
};

console.log(`${COLORS.blue}${COLORS.bold}Buildify SEO Health Check (ESM)${COLORS.reset}\n`);

const ROOT = path.resolve(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');
const SRC = path.join(ROOT, 'src');

let errors = 0;
let warnings = 0;

function checkFileExists(filePath, description) {
    if (fs.existsSync(filePath)) {
        console.log(`${COLORS.green}✔ ${description} found.${COLORS.reset}`);
        return true;
    } else {
        console.log(`${COLORS.red}✘ ${description} MISSING! (${filePath})${COLORS.reset}`);
        errors++;
        return false;
    }
}

function checkContent(filePath, regex, description, isError = true) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        if (regex.test(content)) {
            console.log(`${COLORS.green}✔ ${description} detected.${COLORS.reset}`);
            return true;
        } else {
            const color = isError ? COLORS.red : COLORS.yellow;
            const mark = isError ? '✘' : '⚠';
            console.log(`${color}${mark} ${description} NOT FOUND.${COLORS.reset}`);
            if (isError) errors++; else warnings++;
            return false;
        }
    } catch (e) {
        console.log(`${COLORS.red}✘ Error reading ${filePath}: ${e.message}${COLORS.reset}`);
        errors++;
        return false;
    }
}

// 1. Robots.txt
const robotsPath = path.join(PUBLIC, 'robots.txt');
if (checkFileExists(robotsPath, 'robots.txt')) {
    checkContent(robotsPath, /Sitemap:\s*https?:\/\/.*sitemap\.xml/i, 'Sitemap directive in robots.txt');
    checkContent(robotsPath, /User-agent:\s*\*/i, 'User-agent wildcard');
}

// 2. Sitemap.xml
const sitemapPath = path.join(PUBLIC, 'sitemap.xml');
if (checkFileExists(sitemapPath, 'sitemap.xml')) {
    checkContent(sitemapPath, /<urlset/i, 'Valid XML structure');
    checkContent(sitemapPath, /usebuildify\.com\/for\//, 'Industry routes (/for/)');
}

// 3. Index.html Meta
const indexPath = path.join(ROOT, 'index.html');
if (checkFileExists(indexPath, 'index.html')) {
    checkContent(indexPath, /<meta\s+name=["']description["']\s+content=/i, 'Meta Description');
    checkContent(indexPath, /<meta\s+property=["']og:image["']\s+content=/i, 'Open Graph Image');
    checkContent(indexPath, /<html.*lang=["']en["']/, 'HTML Lang attribute');
}

// 4. Critical Components
const schemaPath = path.join(SRC, 'components', 'Schema.tsx');
checkFileExists(schemaPath, 'Schema.tsx Component');

const seoPath = path.join(SRC, 'components', 'SEO.tsx');
checkFileExists(seoPath, 'SEO.tsx Component');

// 5. Check for "Ozone" (Legacy Brand)
const grepOzone = (dir) => {
    try {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const fullPath = path.join(dir, file);
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {
                grepOzone(fullPath);
            } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                // Ignore Bill.tsx where we strictly allow it
                if (file === 'Bill.tsx') continue;

                const content = fs.readFileSync(fullPath, 'utf8');
                if (content.includes('Ozone') && !content.includes('formerly Ozone')) {
                    // Simple loose check
                    const lines = content.split('\n');
                    lines.forEach((line, i) => {
                        if (line.includes('Ozone') && !line.includes('formerly Ozone') && !line.includes('legacy')) {
                            console.log(`${COLORS.red}✘ Suspicious "Ozone" found in ${file}:${i + 1}${COLORS.reset}`);
                            console.log(`   ${line.trim().substring(0, 100)}...`);
                            errors++;
                        }
                    });
                }
            }
        }
    } catch (e) {
        console.error(`Error scanning dir value: ${dir}`, e);
    }
};

console.log(`\nScanning for Legacy Branding (Ozone)...`);
grepOzone(SRC);
console.log(`${COLORS.green}✔ Legacy brand scan complete (Bill.tsx excluded).${COLORS.reset}`);

console.log(`\n${COLORS.bold}--- Audit Complete ---${COLORS.reset}`);
if (errors === 0) {
    console.log(`${COLORS.green}${COLORS.bold}PASS: System appears healthy.${COLORS.reset}`);
    process.exit(0);
} else {
    console.log(`${COLORS.red}${COLORS.bold}FAIL: ${errors} errors found.${COLORS.reset}`);
    process.exit(1);
}
