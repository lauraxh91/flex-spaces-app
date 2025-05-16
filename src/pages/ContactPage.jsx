import React from 'react';
import ContactForm from '../components/ContactForm'; // adjust path if needed

const ContactPage = () => {
  return (
    <div style={{ padding: '80px 20px', textAlign: 'center' }}>
      <h1>Interested in Our Platform?</h1>
      <p>Leave your details to show you're interested in a platform for flexible coworking bookings.</p>
      <p>This isn’t a commitment—just a quick signal that you'd like to be part of the first wave of featured spaces when we launch.</p>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
