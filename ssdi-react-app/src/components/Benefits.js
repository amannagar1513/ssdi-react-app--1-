import React from 'react';
import { motion } from 'framer-motion';
import './Benefits.css';

const Benefits = () => {
  const benefits = [
    {
      icon: '💰',
      title: 'Monthly Payment',
      description: 'Regular income based on your lifetime average earnings covered by Social Security'
    },
    {
      icon: '🏥',
      title: 'Medicare Coverage',
      description: 'Health insurance after receiving benefits for 24 months'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family Benefits',
      description: 'Certain family members may also receive benefits based on your work record'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="benefits-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What You Could Get
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Your benefits may include monthly payments and Medicare coverage. The amount you receive is based on your work history and earnings before your disability began.
        </motion.p>
        
        <motion.div 
          className="benefits-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="benefit-item"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="icon"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                {benefit.icon}
              </motion.div>
              <h4>{benefit.title}</h4>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="learn-more"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="https://www.ssa.gov/disability" target="_blank" rel="noopener noreferrer">
            See what you could get from Disability →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
