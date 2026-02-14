
import { industries } from '../src/data/industries';

const analyze = () => {
    console.log(`Total Industries: ${industries.length}`);

    const skeletons = industries.filter(ind => {
        const hasTestimonial = ind.testimonial.quote && ind.testimonial.quote.length > 10;
        const hasBenefits = ind.benefits.length >= 3;
        const hasContent = ind.solution.text.length > 50;
        return !hasTestimonial || !hasBenefits || !hasContent;
    });

    const valid = industries.length - skeletons.length;

    console.log(`✅ Valid (Indexable): ${valid}`);
    console.log(`⚠️ Skeleton (Should be NoIndex?): ${skeletons.length}`);

    if (skeletons.length > 0) {
        console.log('\nSample Skeletons:');
        skeletons.slice(0, 5).forEach(ind => {
            console.log(`- ${ind.name} (Quote Len: ${ind.testimonial.quote.length}, Benefits: ${ind.benefits.length}, Solution Len: ${ind.solution.text.length})`);
        });
    }
};

analyze();
