import React from 'react';
import { motion } from 'framer-motion';
import './Eligibility.css';

const Eligibility = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="eligibility-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Who Can Get Disability Benefits?
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Individuals may be eligible for Disability if they have:
        </motion.p>
        
        <motion.div 
          className="eligibility-requirements"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="requirement-box"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 8px 20px rgba(59, 130, 246, 0.2)",
              transition: { duration: 0.3 }
            }}
          >
            <div className="requirement-number">1</div>
            <h4>A Disability or Blindness</h4>
            <p>You must have a medical condition that prevents you from working and is expected to last at least one year or result in death.</p>
          </motion.div>
          
          <motion.div 
            className="and-separator"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            AND
          </motion.div>
          
          <motion.div 
            className="requirement-box"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 8px 20px rgba(59, 130, 246, 0.2)",
              transition: { duration: 0.3 }
            }}
          >
            <div className="requirement-number">2</div>
            <h4>Sufficient Work History</h4>
            <p>You must have worked and paid Social Security taxes for a certain number of years, earning enough "work credits" to qualify.</p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="check-eligibility"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="https://www.ssa.gov/disability" target="_blank" rel="noopener noreferrer">
            Check if you might be eligible for Disability →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Eligibility;
