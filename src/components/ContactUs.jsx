// ContactUs.jsx
import React from 'react';
// import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="section contact-section">
      <div className="contact-header">
        <h2>Contact Us</h2>
      </div>
      <form
        className="contact-form"
        aria-label="Contact form"
        style={{ width: '100%', maxWidth: '500px', display: 'flex', flexDirection: 'column' }}
      >
        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              marginTop: '5px',
            }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              marginTop: '5px',
            }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              marginTop: '5px',
            }}
          ></textarea>
        </div>

        <button
          type="submit"
          className="submit-button"
          style={{
            alignSelf: 'center',
            padding: '10px 20px',
            borderRadius: '5px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
