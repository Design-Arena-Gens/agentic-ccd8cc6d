'use client';

import { useState, useEffect } from 'react';
import './styles.css';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container">
      <div className="gradient-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="gradient-orb orb-4"></div>
      </div>

      <nav className="glass-nav">
        <div className="nav-content">
          <div className="logo">
            <span className="logo-icon">◈</span>
            <span className="logo-text">NEXUS</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#marketplace">Marketplace</a>
            <a href="#about">About</a>
            <button className="nav-btn">Connect Wallet</button>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
          <div className="glass-card hero-card">
            <h1 className="hero-title">
              The Future of
              <span className="gradient-text"> Digital Commerce</span>
            </h1>
            <p className="hero-subtitle">
              Experience the next generation marketplace where innovation meets opportunity.
              Trade, discover, and thrive in the digital economy.
            </p>
            <div className="hero-buttons">
              <button className="primary-btn">
                <span>Explore Marketplace</span>
                <span className="btn-icon">→</span>
              </button>
              <button className="secondary-btn">
                <span>Learn More</span>
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-value">2.4M+</div>
                <div className="stat-label">Active Users</div>
              </div>
              <div className="stat">
                <div className="stat-value">$180M</div>
                <div className="stat-label">Trading Volume</div>
              </div>
              <div className="stat">
                <div className="stat-value">99.9%</div>
                <div className="stat-label">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <h2 className="section-title">
          Why Choose <span className="gradient-text">NEXUS</span>
        </h2>
        <div className="features-grid">
          <div className="glass-card feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Execute transactions in milliseconds with our cutting-edge infrastructure</p>
          </div>
          <div className="glass-card feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Bank-Grade Security</h3>
            <p>Your assets are protected with military-grade encryption and multi-sig wallets</p>
          </div>
          <div className="glass-card feature-card">
            <div className="feature-icon">🌐</div>
            <h3>Global Reach</h3>
            <p>Connect with millions of buyers and sellers across 150+ countries</p>
          </div>
          <div className="glass-card feature-card">
            <div className="feature-icon">💎</div>
            <h3>Premium Assets</h3>
            <p>Curated collection of verified digital assets and exclusive drops</p>
          </div>
          <div className="glass-card feature-card">
            <div className="feature-icon">📊</div>
            <h3>Real-Time Analytics</h3>
            <p>Track trends, prices, and opportunities with advanced market insights</p>
          </div>
          <div className="glass-card feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Community Driven</h3>
            <p>Join a thriving ecosystem of creators, collectors, and innovators</p>
          </div>
        </div>
      </section>

      <section className="marketplace" id="marketplace">
        <h2 className="section-title">
          Trending <span className="gradient-text">Collections</span>
        </h2>
        <div className="marketplace-grid">
          <div className="glass-card marketplace-card">
            <div className="marketplace-image" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
              <div className="marketplace-badge">Hot</div>
            </div>
            <div className="marketplace-info">
              <h3>Cyber Artifacts</h3>
              <p className="marketplace-price">Floor: 2.5 ETH</p>
              <div className="marketplace-stats-row">
                <span>Volume: 124 ETH</span>
                <span className="price-change positive">+15%</span>
              </div>
            </div>
          </div>
          <div className="glass-card marketplace-card">
            <div className="marketplace-image" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
              <div className="marketplace-badge">New</div>
            </div>
            <div className="marketplace-info">
              <h3>Digital Dreams</h3>
              <p className="marketplace-price">Floor: 1.8 ETH</p>
              <div className="marketplace-stats-row">
                <span>Volume: 89 ETH</span>
                <span className="price-change positive">+8%</span>
              </div>
            </div>
          </div>
          <div className="glass-card marketplace-card">
            <div className="marketplace-image" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
              <div className="marketplace-badge">Verified</div>
            </div>
            <div className="marketplace-info">
              <h3>Neon Futures</h3>
              <p className="marketplace-price">Floor: 3.2 ETH</p>
              <div className="marketplace-stats-row">
                <span>Volume: 256 ETH</span>
                <span className="price-change positive">+22%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="glass-card cta-card">
          <h2 className="cta-title">Ready to Start Your Journey?</h2>
          <p className="cta-subtitle">
            Join thousands of traders and collectors in the future of digital commerce
          </p>
          <button className="primary-btn large">
            <span>Get Started Now</span>
            <span className="btn-icon">→</span>
          </button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo">
              <span className="logo-icon">◈</span>
              <span className="logo-text">NEXUS</span>
            </div>
            <p>The future of digital commerce, today.</p>
          </div>
          <div className="footer-section">
            <h4>Platform</h4>
            <a href="#">Marketplace</a>
            <a href="#">Collections</a>
            <a href="#">Rankings</a>
            <a href="#">Activity</a>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Press</a>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <a href="#">Help Center</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 NEXUS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
