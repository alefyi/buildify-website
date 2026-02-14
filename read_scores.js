const fs = require('fs');
const report = JSON.parse(fs.readFileSync('./lighthouse-report.json', 'utf8'));

const scores = {
    performance: report.categories.performance.score * 100,
    accessibility: report.categories.accessibility.score * 100,
    bestPractices: report.categories['best-practices'].score * 100,
    seo: report.categories.seo.score * 100,
};

const metrics = {
    fcp: report.audits['first-contentful-paint'].displayValue,
    lcp: report.audits['largest-contentful-paint'].displayValue,
    cls: report.audits['cumulative-layout-shift'].displayValue,
    speedIndex: report.audits['speed-index'].displayValue,
};

console.log('--- LIGHTHOUSE SCORES ---');
console.log(`Performance: ${scores.performance}`);
console.log(`Accessibility: ${scores.accessibility}`);
console.log(`Best Practices: ${scores.bestPractices}`);
console.log(`SEO: ${scores.seo}`);
console.log('--- CORE VITALS ---');
console.log(`FCP: ${metrics.fcp}`);
console.log(`LCP: ${metrics.lcp}`);
console.log(`CLS: ${metrics.cls}`);
console.log(`Speed Index: ${metrics.speedIndex}`);
