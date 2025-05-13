import React, { useState } from 'react';
import axios from 'axios';

const styles = {
  container: {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    fontFamily: 'sans-serif'
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: '600',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    height: '80px',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    backgroundColor: '#5664f5',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  success: {
    color: 'green',
    fontWeight: 600,
  },
};

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', comment: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/submit', form);
      setSubmitted(true); // Show the success message
    } catch (err) {
      console.error('Error submitting form:', err);
      alert('There was an issue submitting the form. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      {submitted ? (
        <div style={styles.success}>Thank you! We'll be in touch soon. 🙌</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label style={styles.label}>Name</label>
          <input style={styles.input} name="name" value={form.name} onChange={handleChange} required />

          <label style={styles.label}>Email</label>
          <input style={styles.input} name="email" type="email" value={form.email} onChange={handleChange} required />

          <label style={styles.label}>Phone</label>
          <input style={styles.input} name="phone" value={form.phone} onChange={handleChange} />

          <label style={styles.label}>Comment</label>
          <textarea style={styles.textarea} name="comment" value={form.comment} onChange={handleChange} />

          <button type="submit" style={styles.button}>Submit</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
