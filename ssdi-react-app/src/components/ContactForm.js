import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ContactForm.css';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    message: ''
  });

  const [message, setMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Format phone number
    if (name === 'phone') {
      const cleaned = value.replace(/\D/g, '');
      let formatted = cleaned;
      
      if (cleaned.length > 0) {
        if (cleaned.length <= 3) {
          formatted = `(${cleaned}`;
        } else if (cleaned.length <= 6) {
          formatted = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
        } else {
          formatted = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
        }
      }
      
      setFormData({ ...formData, [name]: formatted });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  {
    fullName: formData.name,
    email: formData.email,
    phone: formData.phone,
    address: formData.message || 'N/A',
    postcode: formData.age || 'N/A',
    service: 'SSDI Benefits Inquiry'
  },
  'YOUR_PUBLIC_KEY'
)
.then(() => {
  setStatus({
    text: '✅ Form submitted successfully. We will contact you shortly.',
    type: 'success'
  });

  setFormData({
    name: '',
    email: '',
    phone: '',
    age: '',
    message: ''
  });
})
.catch((err) => {
  console.error(err);
  setStatus({
    text: '❌ Failed to send form. Please try again.',
    type: 'error'
  });
});
  };

  return (
    <section className="contact-form-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          🎯 Start Your SSDI Application Today
        </motion.h2>
        <motion.p 
          className="form-intro"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <strong>Get Expert Help Now!</strong> Our experienced team can guide you through the entire SSDI application process. Fill out the form below and we'll contact you within 24 hours to discuss how we can help you get the benefits you deserve.
        </motion.p>
        
        <motion.form 
          className="ssdi-form" 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="form-grid">
            <motion.div 
              className="form-group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />
            </motion.div>

            <motion.div 
              className="form-group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </motion.div>

            <motion.div 
              className="form-group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="(123) 456-7890"
                value={formData.phone}
                onChange={handleChange}
              />
            </motion.div>

            <motion.div 
              className="form-group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <label htmlFor="age">Age *</label>
              <input
                type="number"
                id="age"
                name="age"
                required
                min="18"
                max="120"
                placeholder="Enter your age"
                value={formData.age}
                onChange={handleChange}
              />
            </motion.div>
          </div>

          <motion.div 
            className="form-group full-width"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <label htmlFor="message">Additional Information (Optional)</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Tell us briefly about your situation or any questions you have..."
              value={formData.message}
              onChange={handleChange}
            />
          </motion.div>

          <div className="form-submit">
            <motion.button 
              type="submit" 
              className="submit-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Free Consultation
            </motion.button>
            <p className="form-note">We'll respond within 24 hours</p>
          </div>
        </motion.form>

        {message.text && (
          <motion.div 
            className={`form-message ${message.type}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {message.text}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
