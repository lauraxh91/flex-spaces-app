import React from 'react';
import ContactForm from '../components/ContactForm'; // adjust path if needed

const ContactPage = () => {
  return (
    <div style={{ padding: '80px 20px', textAlign: 'center' }}>
      <h1>Let's Get in Touch</h1>
      <p>Please leave your details and we’ll get back to you soon.</p>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
