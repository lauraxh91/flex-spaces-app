import React from 'react';

const styles = {
  title: {
    color: '#030303',
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: '32px',
    textAlign: 'center',
    margin: '0 auto',
  },
  description: {
    color: '#030303',
    fontSize: '18px',
    maxWidth: '900px',
    fontWeight: 300,
    lineHeight: '28px',
    textAlign: 'center',
    margin: '0 auto',
  },
};

const Section = ({ title, description }) => (
  <div>
    <div style={styles.title}>{title}</div>
    <div style={styles.description}>{description}</div>
  </div>
);

export default Section;
