import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  ButtonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '32px',
  },
  Button: {
    cursor: 'pointer',
    width: '183px',
    height: '48px',
    padding: '0px 8px',
    border: '0',
    borderRadius: '8px',
    backgroundColor: '#00C291',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '24px',
    outline: 'none',
  },
};

const HeroButton = ({ label = 'Join The Waitlist' }) => {
  return (
    <div style={styles.ButtonWrapper}>
      <a href="#contact" style={{ ...styles.Button, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
        {label}
      </a>
    </div>
  );
};

export default HeroButton;
