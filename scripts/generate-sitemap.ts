
import fs from 'fs';
import path from 'path';
import { industries } from '../src/data/industries';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://usebuildify.com';

const staticRoutes = [
    '/',
    '/development',
    '/market-analysis',
    '/branding-identity',
    '/wireframes-blueprints',
    '/next-versions',
    '/insights',
    '/enterprise',
    '/use-cases',
    '/business',
    '/referral',
    '/bill',
    '/adalo',
    '/creators',
    '/contact',
    '/style-guide',
    '/app-calculator/for-business',
    '/app-calculator/for-startups',
    '/form/scope-estimate',
    // Legal
    '/disclosures/privacy',
    '/disclosures/terms',
    '/disclosures/acceptable-use',
    '/disclosures/nda',
];

const generateSitemap = () => {
    const urls = [
        ...staticRoutes.map(route => ({
            loc: `${BASE_URL}${route}`,
            changefreq: 'weekly',
            priority: route === '/' ? '1.0' : '0.8'
        })),
        ...industries.map(ind => ({
            loc: `${BASE_URL}/for/${ind.slug}`,
            changefreq: 'monthly',
            priority: '0.7'
        }))
    ];

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    const publicDir = path.resolve(__dirname, '../public');
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);
    console.log(`✅ Sitemap generated with ${urls.length} URLs`);
};

const generateRobots = () => {
    const content = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml`;

    const publicDir = path.resolve(__dirname, '../public');
    fs.writeFileSync(path.join(publicDir, 'robots.txt'), content);
    console.log('✅ robots.txt generated');
};

generateSitemap();
generateRobots();
