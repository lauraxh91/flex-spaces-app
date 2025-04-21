import React from 'react';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',  // Horizontally center the button
    alignItems: 'center',      // Vertically center the button
    height: '100vh',           // Full viewport height
  },
  Button: {
    cursor: 'pointer',
    width: '183px',
    height: '48px',
    padding: '0px 8px',
    border: '0',
    borderRadius: '8px',
    backgroundColor: '#5664f5',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '24px',
    outline: 'none',
  },
  link: {
    display: 'flex',
    justifyContent: 'center',  // Make sure the link itself is centered
    alignItems: 'center',      // Align any content inside the link (e.g., button)
    textDecoration: 'none',    // Remove the underline from the link
  },
};

const HeroButton = ({ label = '👉 I\'m Interested' }) => (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSeevC311H6lS24PziUaooPr7adTQfi97DQi54hOGf1iDhN-GQ/viewform?usp=header"
      target="_blank"
      rel="noopener noreferrer"
      style={styles.link}
    >
      <button style={styles.Button}>{label}</button>
    </a>

);

export default HeroButton;
