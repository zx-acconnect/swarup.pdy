import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PORTFOLIO_DATA } from '../../data/content';

interface SEOHeadProps {
    title?: string;
    description?: string;
    canonicalUrl?: string;
    image?: string;
    type?: 'website' | 'article' | 'profile';
    keywords?: string[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
    title,
    description,
    canonicalUrl,
    image,
    type,
    keywords = []
}) => {
    const { config, seo } = PORTFOLIO_DATA;

    const siteTitle = title || seo.title;
    const siteDescription = description || seo.description;
    const siteUrl = canonicalUrl || seo.url;
    const siteImage = image || seo.image;
    const siteType = type || seo.type;

    // Default keywords combined with props
    const allKeywords = [
        "QA Architect",
        "Test Automation",
        "Software Testing",
        "Portfolio",
        config.name,
        ...keywords
    ].join(', ');

    return (
        <Helmet>
            {/* Basic Media Types */}
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
            <meta name="keywords" content={allKeywords} />
            <link rel="canonical" href={siteUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={siteType} />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:image" content={siteImage} />
            <meta property="og:site_name" content={config.title} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@swarup_pdy" />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={siteDescription} />
            <meta name="twitter:image" content={siteImage} />

            {/* Additional Tags */}
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <html lang="en" />
        </Helmet>
    );
};
