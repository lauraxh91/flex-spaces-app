import React, { useState } from 'react';
import axios from 'axios';

const styles = {
  outerWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'left',

    backgroundColor: '#202223', // Optional: light background
  },
  container: {
    maxWidth: '600px',
    width: '100%',
    padding: '20px',
    fontFamily: 'sans-serif',
  },
  label: {
    color: '#030303',
    fontSize: '16px',
    fontWeight: 700,
    marginTop: '12px',
    display: 'block',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    height: '42px',
    padding: '0 12px',
    marginBottom: '15px',
    border: '1px solid #cccccc',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    color: '#030303',
    fontSize: '16px',
    fontWeight: 400,
    boxSizing: 'border-box',
    outline: 'none',
  },
  textarea: {
    width: '100%',
    height: '80px',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    fontFamily: 'inherit',
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    padding: '12px 20px',
    fontSize: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
    width: '100%',
  },
  success: {
    color: 'black',
    fontWeight: 600,
    textAlign: 'center',
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
      const response = await axios.post('https://flex-spaces-app.onrender.com/submit', form);
      setSubmitted(true); // Show the success message
    } catch (err) {
      console.error('Error submitting form:', err);
      alert('There was an issue submitting the form. Please try again.');
    }
  };

  return (
    <div style={styles.outerWrapper}>
      <div style={styles.container}>
        {submitted ? (
          <div style={styles.success}>Thank you! We'll be in touch soon. 🙌</div>
        ) : (
          <form onSubmit={handleSubmit}>
             <p style={{ color: 'white' }}>Want to be a part of our coworking platform? Share your details with us to express your interest. There is no commitment—just a chance to be among the first to know when we launch!'</p>
            <input style={styles.input} name="email" placeholder="Email*" type="email" value={form.email} onChange={handleChange} required />
            <input style={styles.input} name="name" placeholder="Name" value={form.name} onChange={handleChange}/>
            <input style={styles.input} name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
            <textarea style={styles.textarea} name="comment" placeholder="Comment" value={form.comment} onChange={handleChange} />
            <button type="submit" style={styles.button}>Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
