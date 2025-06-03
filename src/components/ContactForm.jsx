import React, { useState, useEffect } from 'react';
import axios from 'axios';
import defaultImage from '../assets/3.webp';

const styles = {
  wrapper: {
    width: '100%',
    margin: '0 auto',
    padding: '30px 20px',
    backgroundColor: '#202223',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '40px',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  card: {
    flex: '1 1 48%',
    minWidth: '320px',
    maxWidth: '600px',
    backgroundColor: '#2C2E2F',
    borderRadius: '16px',
    padding: '32px',
    boxShadow: '0 0 20px rgba(0,0,0,0.3)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  imageWrapper: {
    flex: '1 1 48%',
    minWidth: '320px',
    maxWidth: '600px',
    height: '100%',
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '16px',
  },
  input: {
    width: '100%',
    height: '44px',
    padding: '10px 14px',
    borderRadius: '10px',
    border: '1px solid #cccccc',
    backgroundColor: '#ffffff',
    color: '#030303',
    fontSize: '16px',
    marginBottom: '16px',
  },
  textarea: {
    width: '100%',
    height: '80px',
    padding: '10px 14px',
    borderRadius: '10px',
    border: '1px solid #cccccc',
    backgroundColor: '#ffffff',
    color: '#030303',
    fontSize: '16px',
    fontFamily: 'inherit',
    marginBottom: '16px',
  },
  button: {
    backgroundColor: '#00C291',
    color: 'white',
    border: 'none',
    padding: '16px 20px',
    fontSize: '18px',
    borderRadius: '10px',
    cursor: 'pointer',
    width: '100%',
    fontWeight: 600,
    transition: 'background 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#00A77E',
  },
  success: {
    color: '#00C291',
    fontWeight: 600,
    textAlign: 'center',
    fontSize: '20px',
    padding: '40px 0',
  },
  headline: {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '12px',
  },
  subheadline: {
    fontSize: '16px',
    marginBottom: '24px',
    lineHeight: '1.6',
  },
  smallText: {
    fontSize: '14px',
    color: '#bbbbbb',
    textAlign: 'center',
    marginTop: '12px',
  },
};

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', comment: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!submitted) {
      document.getElementById('email-input')?.focus();
    }
  }, [submitted]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://flex-spaces-app.onrender.com/submit', form);
      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      alert('There was an issue submitting the form. Please try again.');
    }
  };

  return (
    <div style={{ ...styles.wrapper, flexDirection: 'column', alignItems: 'center' }}>
    {submitted ? (
      <div style={{
        width: '100%',
        textAlign: 'center',
        padding: '80px 20px',
        backgroundColor: '#2C2E2F',
        borderRadius: '16px',
        color: '#00C291',
        fontSize: '20px',
        fontWeight: '600',
      }}>
        Thank you for joining the waitlist!<br />
        We’ll be in touch soon with early access. 🙌
      </div>
    ) : (
        <div style={styles.wrapper}>
          <div style={styles.card}>
            <form onSubmit={handleSubmit}>
              <div style={styles.headline}>
                Curious about listing your coworking space?
              </div>
              <p style={styles.subheadline}>
                Join our early interest list — we’ll share more soon. 
              </p>
              <input
                id="email-input"
                style={styles.input}
                name="email"
                type="email"
                placeholder="Email*"
                value={form.email}
                onChange={handleChange}
                required
                aria-label="Email address"
              />

              <input
                style={styles.input}
                name="name"
                placeholder="Full name"
                value={form.name}
                onChange={handleChange}
                aria-label="Full name"
              />

              <input
                style={styles.input}
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                aria-label="Phone number"
                type="tel"
              />

              <textarea
                style={styles.textarea}
                name="comment"
                placeholder="Message"
                value={form.comment}
                onChange={handleChange}
                aria-label="Your message"
              />

              <button type="submit" style={styles.button}>
                Submit
              </button>

              <p style={styles.smallText}>🔒 Your info is safe.</p>
            </form>
          </div>

          <div style={styles.imageWrapper}>
            <img
              src={defaultImage}
              alt="Coworking office with people"
              style={styles.image}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default ContactForm;
