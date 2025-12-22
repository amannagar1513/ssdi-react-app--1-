import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const scrollToForm = () => {
    const formSection = document.querySelector('.contact-form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/>
        </svg>
      ),
      title: "Work Incentives",
      description: "Special programs help you test your ability to work while keeping your benefits safe."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 21h18M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4M5 21V10.85M19 21V10.85M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"/>
        </svg>
      ),
      title: "Medicare Coverage",
      description: "After 24 months, you become eligible for Medicare health insurance coverage."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
        </svg>
      ),
      title: "Family Benefits",
      description: "Your eligible family members may also receive benefits based on your work record."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="hero-section">
      {/* Background Decorations */}
      <div className="hero-bg-pattern"></div>
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      <div className="container">
        <motion.div 
          className="hero-main"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Main Content */}
          <motion.div className="hero-content" variants={itemVariants}>
            <div className="section-label">
              <span className="label-line"></span>
              <span>Understanding Your Benefits</span>
            </div>
            
            <h2>What is SSDI?</h2>
            
            <p className="hero-description">
              Social Security Disability Insurance (SSDI) provides monthly payments to people who have a disability that stops or limits their ability to work. These benefits are designed to help you maintain financial stability when you're unable to earn an income due to a qualifying disability.
            </p>

            <div className="hero-highlights">
              <div className="highlight-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20,6 9,17 4,12"/>
                </svg>
                <span>Based on your work history</span>
              </div>
              <div className="highlight-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20,6 9,17 4,12"/>
                </svg>
                <span>Monthly cash benefits</span>
              </div>
              <div className="highlight-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20,6 9,17 4,12"/>
                </svg>
                <span>Healthcare coverage included</span>
              </div>
            </div>

            <div className="hero-cta-group">
              <motion.button
                onClick={scrollToForm}
                className="cta-button primary"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Check Your Eligibility</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.button>
              
              <motion.a
                href="tel:+1-800-BENEFITS"
                className="cta-button secondary"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>Call Us Now</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div 
            className="hero-features"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 40px rgba(30, 58, 138, 0.15)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="hero-trust"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="trust-text">Trusted information resource</p>
          <div className="trust-badges">
            <div className="trust-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span>SSL Secured</span>
            </div>
            <div className="trust-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              <span>24/7 Support</span>
            </div>
            <div className="trust-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22,4 12,14.01 9,11.01"/>
              </svg>
              <span>Verified Info</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
