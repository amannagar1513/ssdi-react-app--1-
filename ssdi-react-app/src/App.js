import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Eligibility from './components/Eligibility';
import Benefits from './components/Benefits';
import InfoCards from './components/InfoCards';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ContactForm />
      <Eligibility />
      <Benefits />
      <InfoCards />
      <div className="cta-section">
        <motion.div 
          className="container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Want to Learn More?</h2>
          <p>Visit the official Social Security Administration website to learn more about SSDI benefits and eligibility requirements.</p>
          <motion.a 
            href="https://www.ssa.gov/disability" 
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit Official SSA Website
          </motion.a>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
