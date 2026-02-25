// src/pages/Blog.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
    const dummyPosts = [
        {
            id: "first-post", // Указываем имя файла без .md
            tag: "Engineering",
            date: "Oct 24, 2023",
            title: "How I forced AI to write Vanilla CSS instead of Tailwind",
            description: "A deep dive into prompt engineering and architecture for strict UI generation in our Node Editor.",
            readTime: "5 min read"
        },
        {
            id: "visual-nodes",
            tag: "Product",
            date: "Oct 18, 2023",
            title: "Visual Node Architecture: The Future of IDEs",
            description: "Why connecting visual nodes is fundamentally faster than writing thousands of lines of boilerplate code.",
            readTime: "4 min read"
        },
        {
            id: "fastapi-react",
            tag: "Tutorial",
            date: "Oct 12, 2023",
            title: "Connecting FastAPI and React with Zero Code",
            description: "Step-by-step guide on generating a full-stack SaaS platform using CRUSH AI Master Orchestrator.",
            readTime: "7 min read"
        }
    ];

    return (
        <main style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
            paddingTop: '140px',
            paddingBottom: '80px',
            position: 'relative',
            zIndex: 10
        }}>
            <div className="section-container" style={{ padding: '0 20px' }}>

                {/* Шапка блога */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '6px 16px',
                        background: 'rgba(59, 130, 246, 0.1)',
                        color: '#60a5fa',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        borderRadius: '100px',
                        fontSize: '13px',
                        fontWeight: '600',
                        marginBottom: '24px'
                    }}>
                        Developer Diary
                    </div>
                    <h1 style={{
                        fontSize: '56px',
                        fontWeight: 800,
                        color: 'white',
                        marginBottom: '24px',
                        letterSpacing: '-0.03em',
                        lineHeight: 1.1
                    }}>
                        CRUSH AI <span className="gradient-text">Blog</span>
                    </h1>
                    <p style={{ color: '#94a3b8', fontSize: '20px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
                        News, tutorials, and engineering insights from the creators of the agentic IDE.
                    </p>
                </div>

                {/* Сетка статей */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                    gap: '24px',
                    width: '100%'
                }}>
                    {dummyPosts.map(post => (
                        <Link
                            to={`/blog/${post.id}`}
                            key={post.id}
                            className="bento-card"
                            style={{
                                textDecoration: 'none',
                                padding: '32px',
                                display: 'flex',
                                flexDirection: 'column',
                                minHeight: '320px'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                <span style={{
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    color: '#3b82f6',
                                    background: 'rgba(59, 130, 246, 0.1)',
                                    padding: '4px 12px',
                                    borderRadius: '100px'
                                }}>
                                    {post.tag}
                                </span>
                                <span style={{ fontSize: '13px', color: '#64748b' }}>{post.date}</span>
                            </div>

                            <h2 style={{
                                fontSize: '24px',
                                fontWeight: 700,
                                color: 'white',
                                marginBottom: '16px',
                                letterSpacing: '-0.02em',
                                lineHeight: 1.3
                            }}>
                                {post.title}
                            </h2>

                            <p style={{
                                fontSize: '15px',
                                color: '#94a3b8',
                                lineHeight: 1.6,
                                marginBottom: '32px',
                                flex: 1
                            }}>
                                {post.description}
                            </p>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginTop: 'auto',
                                paddingTop: '20px',
                                borderTop: '1px solid rgba(255,255,255,0.05)'
                            }}>
                                <span style={{ fontSize: '13px', color: '#60a5fa', fontWeight: 500 }}>
                                    Read Article →
                                </span>
                                <span style={{ fontSize: '12px', color: '#475569' }}>
                                    {post.readTime}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </main>
    );
}