import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    image?: string;
    url?: string;
    type?: string;
    noIndex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
    title,
    description,
    image = '/og-image.jpg',
    url = 'https://usebuildify.com',
    type = 'website',
    noIndex = false
}) => {
    const siteTitle = `${title} | Buildify`;

    return (
        <Helmet>
            {/* Standard */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            {noIndex && <meta name="robots" content="noindex" />}

            {/* Open Graph */}
            <meta name="google-site-verification" content="tOnqDTjkYq7jXM7ul8CMd7fmEiwiLuuFki9rylp5ytY" />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content="Buildify" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};
