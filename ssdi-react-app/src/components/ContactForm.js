import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ContactForm.css';
import emailjs from '@emailjs/browser';

// 🔥 HARDCODED EMAILJS (AS YOU REQUESTED)
const EMAILJS_SERVICE_ID = 'service_w9t1ffd';
const EMAILJS_TEMPLATE_ID = 'template_1p0t3ju';
const EMAILJS_PUBLIC_KEY = 'DDww6fjgz0X1sUXtz';

// ❌ REMOVE emailjs.init() — DO NOT USE IT WITH sendForm


const ContactForm = () => {
  const formRef = useRef(null); // ✅ NEW

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    disabilityType: '',
    employmentStatus: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState(null);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
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
  setIsSubmitting(true);

  // DEBUG: show payload being sent and IDs (remove in production or when resolved)
  console.debug('EmailJS sending', { service: EMAILJS_SERVICE_ID, template: EMAILJS_TEMPLATE_ID, payload: formData });

  emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      age: formData.age,
      disabilityType: formData.disabilityType,
      employmentStatus: formData.employmentStatus,
      message: formData.message,
    },
    EMAILJS_PUBLIC_KEY
  )
    .then(() => {
      setMessage({
        text: 'Thank you! Your inquiry was submitted successfully.',
        type: 'success',
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        age: '',
        disabilityType: '',
        employmentStatus: '',
        message: '',
      });
    })
    .catch((error) => {
      console.error('EmailJS error:', error);

      // Show helpful error detail in development; keep generic message in production
      const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
      const errText = (error && (error.text || error.message)) ? (error.text || error.message) : null;

      setMessage({
        text: isDev && errText ? `Error sending form: ${errText}` : 'Something went wrong. Please try again later.',
        type: 'error',
      });
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setMessage({ text: '', type: '' }), 8000);
    });
};


  const benefits = [
    { icon: "clock", text: "Response within 24 hours" },
    { icon: "shield", text: "100% confidential" },
    { icon: "check", text: "No obligation consultation" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="contact-form-section" id="contact-form">
      {/* Background Elements */}
      <div className="form-bg-gradient"></div>
      <div className="form-bg-pattern"></div>
      
      <div className="container">
        <motion.div 
          className="form-wrapper"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Left Side - Info Panel */}
          <motion.div className="form-info-panel" variants={itemVariants}>
            <div className="info-badge">
              <span className="badge-icon">✓</span>
              Free Consultation
            </div>
            
            <h2>Get Your Benefits Assessment</h2>
            <p className="info-description">
              Our team of SSDI specialists will review your case and help you understand your eligibility for disability benefits.
            </p>

            <div className="info-benefits">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <div className="benefit-icon">
                    {benefit.icon === "clock" && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 6v6l4 2"/>
                      </svg>
                    )}
                    {benefit.icon === "shield" && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                    )}
                    {benefit.icon === "check" && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22,4 12,14.01 9,11.01"/>
                      </svg>
                    )}
                  </div>
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="info-contact">
              <p className="contact-label">Prefer to talk?</p>
              <a href="tel:+18001234567" className="contact-phone">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                1-800-123-4567
              </a>
            </div>

            {/* Trust Seal */}
            <div className="trust-seal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <div className="seal-text">
                <span className="seal-title">Secure & Protected</span>
                <span className="seal-sub">256-bit SSL Encryption</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div className="form-container" variants={itemVariants}>
            <div className="form-header">
              <h3>Request Your Free Consultation</h3>
              <p>Fill out the form below and we'll get back to you shortly</p>
            </div>

            <form ref={formRef} className="ssdi-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className={`form-group ${focusedField === 'name' ? 'focused' : ''} ${formData.name ? 'filled' : ''}`}>
                  <label htmlFor="name">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                <div className={`form-group ${focusedField === 'email' ? 'focused' : ''} ${formData.email ? 'filled' : ''}`}>
                  <label htmlFor="email">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className={`form-group ${focusedField === 'phone' ? 'focused' : ''} ${formData.phone ? 'filled' : ''}`}>
                  <label htmlFor="phone">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                <div className={`form-group ${focusedField === 'age' ? 'focused' : ''} ${formData.age ? 'filled' : ''}`}>
                  <label htmlFor="age">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    required
                    min="18"
                    max="120"
                    placeholder="35"
                    value={formData.age}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('age')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className={`form-group ${focusedField === 'disabilityType' ? 'focused' : ''} ${formData.disabilityType ? 'filled' : ''}`}>
                  <label htmlFor="disabilityType">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14,2 14,8 20,8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                    </svg>
                    Type of Disability
                  </label>
                  <select
                    id="disabilityType"
                    name="disabilityType"
                    value={formData.disabilityType}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('disabilityType')}
                    onBlur={() => setFocusedField(null)}
                  >
                    <option value="">Select an option</option>
                    <option value="physical">Physical Disability</option>
                    <option value="mental">Mental Health Condition</option>
                    <option value="chronic">Chronic Illness</option>
                    <option value="neurological">Neurological Condition</option>
                    <option value="other">Other / Multiple</option>
                  </select>
                </div>

                <div className={`form-group ${focusedField === 'employmentStatus' ? 'focused' : ''} ${formData.employmentStatus ? 'filled' : ''}`}>
                  <label htmlFor="employmentStatus">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                    </svg>
                    Employment Status
                  </label>
                  <select
                    id="employmentStatus"
                    name="employmentStatus"
                    value={formData.employmentStatus}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('employmentStatus')}
                    onBlur={() => setFocusedField(null)}
                  >
                    <option value="">Select an option</option>
                    <option value="unemployed">Currently Unemployed</option>
                    <option value="partTime">Working Part-Time</option>
                    <option value="fullTime">Working Full-Time</option>
                    <option value="selfEmployed">Self-Employed</option>
                    <option value="retired">Retired</option>
                  </select>
                </div>
              </div>

              <div className={`form-group full-width ${focusedField === 'message' ? 'focused' : ''} ${formData.message ? 'filled' : ''}`}>
                <label htmlFor="message">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  Additional Information (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us about your situation, medical conditions, or any questions you have..."
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              <div className="form-footer">
                <motion.button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Processing...
                    </>
                  ) : (
                    <>
                      Get Free Consultation
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </>
                  )}
                </motion.button>

                <p className="privacy-note">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  Your information is secure and will never be shared
                </p>
              </div>
            </form>

            {/* Success/Error Message */}
            <AnimatePresence>
              {message.text && (
                <motion.div 
                  className={`form-message ${message.type}`}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="message-icon">
                    {message.type === 'success' ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22,4 12,14.01 9,11.01"/>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="15" y1="9" x2="9" y2="15"/>
                        <line x1="9" y1="9" x2="15" y2="15"/>
                      </svg>
                    )}
                  </div>
                  <p>{message.text}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;