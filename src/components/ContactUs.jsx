// ContactUs.jsx
import React from 'react';
// import './ContactUs.css';
import BasicTextField from './BasicTextField';

const ContactUs = () => {
  return (
    <section className="section contact-section">
      <div className="contact-header">
        <h2>Contact Us</h2>
      </div>
        <BasicTextField />
        <BasicTextField />
        <BasicTextField />
    </section>
  );
};

export default ContactUs;
