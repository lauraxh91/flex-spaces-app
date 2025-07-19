import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    padding: '0px 8px',
    border: '0',
    borderRadius: '8px',
    backgroundColor: '#00C291',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '24px',
    outline: 'none',
  },
};

const HeaderButton = ({ label = 'Join Us' }) => (
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSeevC311H6lS24PziUaooPr7adTQfi97DQi54hOGf1iDhN-GQ/viewform?usp=header"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none' }}
  >
    <button style={styles.Button}>{label}</button>
  </a>
);

export default HeaderButton;
