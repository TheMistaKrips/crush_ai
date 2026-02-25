// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Showcase from '../components/Showcase';

export default function Home({ onOpenModal }) {
    return (
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Hero onOpenModal={onOpenModal} />
            <Features />
            <Showcase />
        </main>
    );
}