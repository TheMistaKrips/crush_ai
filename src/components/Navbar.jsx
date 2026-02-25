// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import crushLogo from '../assets/crush_logo.png';

export default function Navbar({ onOpenModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Если мы не на главной, якоря нам не нужны, подсвечиваем нужный раздел
  const isHome = location.pathname === '/';
  const isBlog = location.pathname === '/blog';

  return (
    <>
      <style>{`
        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s ease;
          background: transparent;
        }

        .navbar-wrapper.scrolled {
          background: rgba(11, 14, 20, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(59, 130, 246, 0.2);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          transition: height 0.3s ease;
        }

        .navbar-wrapper.scrolled .nav-container {
          height: 64px;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          text-decoration: none;
        }

        .logo-image {
          width: 32px;
          height: 32px;
          object-fit: contain;
        }

        .logo-text {
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.5px;
        }

        .nav-links {
          display: flex;
          gap: 40px;
        }

        .nav-link {
          color: #94a3b8;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s ease;
          cursor: pointer;
          position: relative;
        }

        .nav-link:hover {
          color: #ffffff;
        }

        .nav-link.active {
          color: #ffffff;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #3b82f6;
          border-radius: 2px;
        }

        .nav-button {
          background: #ffffff;
          color: #0f172a;
          border: none;
          padding: 10px 24px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .nav-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .nav-container {
            padding: 0 16px;
          }
        }
      `}</style>

      <div className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">

          <Link to="/" className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src={crushLogo}
              alt="CRUSH AI"
              className="logo-image"
              onError={(e) => {
                e.target.style.display = 'none';
                const fallback = document.createElement('div');
                fallback.style.width = '32px';
                fallback.style.height = '32px';
                fallback.style.background = '#3b82f6';
                fallback.style.borderRadius = '8px';
                e.target.parentNode.appendChild(fallback);
              }}
            />
            <span className="logo-text">CRUSH AI</span>
          </Link>

          <div className="nav-links">
            <Link
              to="/"
              className={`nav-link ${isHome ? 'active' : ''}`}
              onClick={() => isHome && window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Platform
            </Link>
            <Link
              to="/blog"
              className={`nav-link ${isBlog ? 'active' : ''}`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Blog
            </Link>
          </div>

          <button className="nav-button" onClick={onOpenModal}>
            Join Waitlist
          </button>
        </div>
      </div>
    </>
  );
}