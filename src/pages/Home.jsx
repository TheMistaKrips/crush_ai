// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Showcase from '../components/Showcase';
import SEO from '../components/SEO'; // Добавили

export default function Home({ onOpenModal }) {
    return (
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', width: '100%' }}>
            <SEO
                title="Visual Agentic IDE"
                description="CRUSH AI is the next-generation visual development platform. Build fullstack apps visually, generate code instantly, and deploy in seconds."
                url="/"
            />
            <Hero onOpenModal={onOpenModal} />
            <Features />
            <Showcase />
        </main>
    );
}