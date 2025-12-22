import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const formSection = document.querySelector('.contact-form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const scrollToSection = (selector) => {
    const section = document.querySelector(selector);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Trust Bar */}
      <div className="trust-bar">
        <div className="container">
          <div className="trust-bar-content">
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
              <span>Secure & Confidential</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </svg>
              <span>Quick Response Time</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22,4 12,14.01 9,11.01"/>
              </svg>
              <span>Trusted by Thousands</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header 
        className={`header ${scrolled ? 'header-scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        {/* Animated Background Elements */}
        <div className="header-bg-elements">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>

        <div className="container">
          <div className="header-main">
            {/* Logo Section */}
            <motion.div 
              className="logo-section"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="logo-icon">
                <svg viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
                  <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2"/>
                  <path d="M20 8v24M8 20h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="logo-text">
                <span className="logo-main">SSDI Benefits</span>
                <span className="logo-sub">Your Path to Financial Security</span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <motion.button 
                className="nav-link"
                onClick={() => scrollToSection('.hero-section')}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                About SSDI
              </motion.button>
              <motion.button 
                className="nav-link"
                onClick={() => scrollToSection('.benefits-section')}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Benefits
              </motion.button>
              <motion.button 
                className="nav-link"
                onClick={() => scrollToSection('.eligibility-section')}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Eligibility
              </motion.button>
              <motion.button 
                className="nav-cta"
                onClick={scrollToForm}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(255, 255, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Apply Now</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          {/* Hero Content */}
          <div className="header-content">
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="badge-dot"></span>
              Federal Benefits Program
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Social Security
              <span className="highlight"> Disability Insurance</span>
            </motion.h1>
            
            <motion.p 
              className="subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Get the support you deserve. We help you understand and access your SSDI benefits with confidence.
            </motion.p>

            <motion.div 
              className="header-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="stat-item">
                <span className="stat-number">$1,500+</span>
                <span className="stat-label">Avg. Monthly Benefit</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">10M+</span>
                <span className="stat-label">Americans Helped</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Free Consultation</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="header-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.nav 
              className="mobile-nav"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <button className="mobile-nav-link" onClick={() => scrollToSection('.hero-section')}>
                About SSDI
              </button>
              <button className="mobile-nav-link" onClick={() => scrollToSection('.benefits-section')}>
                Benefits
              </button>
              <button className="mobile-nav-link" onClick={() => scrollToSection('.eligibility-section')}>
                Eligibility
              </button>
              <button className="mobile-nav-cta" onClick={scrollToForm}>
                Apply Now
              </button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
