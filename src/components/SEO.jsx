// src/components/SEO.jsx
import React from 'react';

export default function SEO({ title, description, url }) {
    const siteName = "CRUSH AI";
    const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - Agentic IDE for Developers`;
    const metaDescription = description || "CRUSH AI combines the power of visual node-based architecture with advanced AI models to accelerate your workflow. Build, generate, and deploy instantly.";

    return (
        <>
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />

            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={siteName} />
            {url && <meta property="og:url" content={`https://crushai.site${url}`} />}
        </>
    );
}