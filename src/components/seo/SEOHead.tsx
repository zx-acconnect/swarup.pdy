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
    canonicalUrl = window.location.origin,
    image = '/og-image.png', // Fallback image needed in public folder
    type = 'website',
    keywords = []
}) => {
    const { config, about } = PORTFOLIO_DATA;

    const siteTitle = title ? `${title} | ${config.title}` : `${config.name} | ${config.title}`;
    const siteDescription = description || about.bio || "Senior QA Architect & Test Automation Engineer Portfolio";
    const siteUrl = window.location.origin;
    const siteImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

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
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:image" content={siteImage} />
            <meta property="og:site_name" content={config.title} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@swarup_qa" /> {/* Update if specific handle exists */}
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
