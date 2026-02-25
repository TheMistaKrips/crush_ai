// src/pages/BlogPost.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Loader2 } from 'lucide-react';

export default function BlogPost() {
    const { id } = useParams(); // Получаем название файла из URL
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0); // Прокрутка наверх при открытии

        // Скачиваем md-файл из папки public/posts/
        fetch(`/posts/${id}.md`)
            .then((res) => {
                if (!res.ok) throw new Error('Post not found');
                return res.text();
            })
            .then((text) => {
                setContent(text);
                setLoading(false);
            })
            .catch(() => {
                setContent('# Ошибка\nСтатья не найдена.');
                setLoading(false);
            });
    }, [id]);

    return (
        <main style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
            paddingTop: '120px',
            paddingBottom: '80px',
            position: 'relative',
            zIndex: 10
        }}>
            <div className="section-container" style={{ padding: '0 20px', maxWidth: '800px' }}>

                <Link to="/blog" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#60a5fa',
                    textDecoration: 'none',
                    marginBottom: '40px',
                    fontSize: '14px',
                    fontWeight: 500
                }}>
                    <ArrowLeft size={16} /> Назад к блогу
                </Link>

                {loading ? (
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '100px 0', color: '#64748b' }}>
                        <Loader2 size={32} className="spin" />
                    </div>
                ) : (
                    <div className="markdown-body">
                        <ReactMarkdown>{content}</ReactMarkdown>
                    </div>
                )}

            </div>

            <style>{`
        /* Стили для того, чтобы Markdown выглядел красиво в темной теме */
        .markdown-body {
          color: #cbd5e1;
          font-size: 18px;
          line-height: 1.7;
          width: 100%;
        }

        .markdown-body h1 {
          color: #ffffff;
          font-size: 48px;
          font-weight: 800;
          margin-bottom: 32px;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .markdown-body h2 {
          color: #ffffff;
          font-size: 28px;
          font-weight: 700;
          margin-top: 48px;
          margin-bottom: 16px;
        }

        .markdown-body p {
          margin-bottom: 24px;
        }

        .markdown-body pre {
          background: #11141d;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 20px;
          overflow-x: auto;
          margin-bottom: 24px;
        }

        .markdown-body code {
          font-family: 'Courier New', Courier, monospace;
          background: rgba(255,255,255,0.1);
          padding: 2px 6px;
          border-radius: 6px;
          font-size: 14px;
          color: #60a5fa;
        }

        .markdown-body pre code {
          background: transparent;
          padding: 0;
          color: #e2e8f0;
        }

        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
        </main>
    );
}