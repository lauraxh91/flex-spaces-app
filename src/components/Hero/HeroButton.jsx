import React from 'react';

const styles = {
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
};

const HeroButton = ({ label = '👉 I\'m Interested' }) => (
  <button style={styles.Button}>{label}</button>
);

export default HeroButton;
