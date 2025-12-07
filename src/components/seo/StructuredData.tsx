import React from 'react';
import { PORTFOLIO_DATA } from '../../data/content';

export const StructuredData: React.FC = () => {
    const { config, about } = PORTFOLIO_DATA;

    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": config.name,
        "jobTitle": config.title,
        "url": window.location.origin,
        "sameAs": config.socials.map(s => s.url),
        "description": about.bio,
        "knowsAbout": ["Software Quality Assurance", "Manual Testing", "Test Automation", "Performance Engineering"]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};