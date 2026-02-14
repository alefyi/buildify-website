
import { industries } from '../src/data/industries.ts';

console.log(`Total Industries: ${industries.length}`);

const skeletons = industries.filter(data => {
    const hasTestimonial = data.testimonial.quote && data.testimonial.quote.length > 10;
    const hasBenefits = data.benefits.length >= 3;
    const hasContent = data.solution.text.length > 50;
    return !hasTestimonial || !hasBenefits || !hasContent;
});

console.log(`Skeleton Industries (NoIndex): ${skeletons.length}`);
if (skeletons.length > 0) {
    console.log('--- Skeletons ---');
    skeletons.forEach(s => console.log(`- ${s.name} (/for/${s.slug})`));
}

// Check for missing data fields that might cause issues
const broken = industries.filter(i => !i.slug || !i.name);
console.log(`Broken Industries (Missing Slug/Name): ${broken.length}`);

// Check for "business" slug specifically
const business = industries.find(i => i.slug === 'business');
console.log(`Has 'business' slug: ${!!business}`);
