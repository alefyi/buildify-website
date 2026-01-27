import React from 'react';
import { Helmet } from 'react-helmet-async';

export const OrganizationSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Buildify",
        "legalName": "Hidaku LLC",
        "alternateName": "Ozone",
        "url": "https://usebuildify.com",
        "logo": "https://usebuildify.com/favicon.png",
        "description": "Top-rated Application Development Agency specializing in Adalo and React. We provide subscription-based software teams for businesses.",
        "sameAs": [
            "https://www.linkedin.com/company/usebuildify",
            "https://www.crunchbase.com/organization/buildify-hq",
            "https://x.com/buildify_hq",
            "https://www.adalo.com/experts/buildify"
        ],
        "areaServed": [
            { "@type": "Country", "name": "United States" },
            { "@type": "Country", "name": "Canada" },
            { "@type": "Country", "name": "Mexico" },
            { "@type": "Country", "name": "Greenland" },
            "Global"
        ],
        "award": "Top 3 Adalo Experts",
        "knowsAbout": ["Adalo", "React", "App Development", "No-Code", "MVP"],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "sales",
            "url": "https://usebuildify.com/contact"
        }
    };

    return (
        <Helmet>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        </Helmet>
    );
};


export const FAQSchema = ({ items }: { items: { q: string; a: string }[] }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": items.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
            }
        }))
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export const JSONLD = ({ data }: { data: any }) => {
    return (
        <Helmet>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
        </Helmet>
    );
};

export const BioPageSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Buildify Creators",
        "headline": "Own Your Audience. Not A Link Aggregator.",
        "description": "The professional link-in-bio solution for creators who want a custom domain, AI-ready SEO, and complete brand ownership.",
        "applicationCategory": "MarketingApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "120"
        },
        "brand": {
            "@type": "Brand",
            "name": "Buildify",
            "url": "https://usebuildify.com"
        }
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};
