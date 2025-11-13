import React from 'react';
import { motion } from 'framer-motion';
import './InfoCards.css';

const InfoCards = () => {
  const cards = [
    {
      icon: '💼',
      title: 'Try Returning to Work',
      description: 'You may be able to return to work or continue working without losing your Disability benefits through special work incentive programs.',
      items: [
        'Trial Work Period',
        'Extended Period of Eligibility',
        'Ticket to Work Program',
        'Continuing Disability Reviews'
      ],
      link: 'https://www.ssa.gov/disability'
    },
    {
      icon: '📋',
      title: 'What You Need to Report',
      description: 'Once you\'re approved for Disability, you must report certain changes to maintain your benefits:',
      items: [
        'Changes in your work activity',
        'Changes in your income',
        'Changes in marital status',
        'Changes in living arrangements',
        'Improvement in your medical condition'
      ],
      link: 'https://www.ssa.gov/disability'
    },
    {
      icon: '🔄',
      title: 'Restart Your Benefits',
      description: 'If your Disability benefit ended, you might be able to restart it later through expedited reinstatement.',
      items: [
        'Benefits ended within the last 5 years',
        'You stopped working due to your disability',
        'You still have the same disabling condition'
      ],
      link: 'https://www.ssa.gov/disability'
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="info-cards-section">
      <div className="container">
        <motion.div 
          className="info-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              className="info-card"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="icon"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {card.icon}
              </motion.div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              {card.items && (
                <ul>
                  {card.items.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              )}
              <motion.a 
                href={card.link} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Learn more →
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="important-notice"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4>⚠️ Important Information</h4>
          <p>The application process can take several months, and you may need to provide extensive medical documentation. It's important to apply as soon as you become disabled, as benefits typically do not start until the sixth full month after your disability begins.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default InfoCards;
