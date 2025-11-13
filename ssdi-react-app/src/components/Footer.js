import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <p><strong>Disclaimer:</strong> This website provides general information about Social Security Disability Insurance (SSDI) benefits.</p>
        <p>For official information, eligibility requirements, and to apply for benefits, please visit the official Social Security Administration website at{' '}
          <a href="https://www.ssa.gov/disability" target="_blank" rel="noopener noreferrer">
            www.ssa.gov/disability
          </a>
        </p>
        <p className="footer-note">This is an informational resource and is not affiliated with the Social Security Administration.</p>
        <motion.p 
          className="footer-copyright"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          © 2024 SSDI Benefits Portal. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
