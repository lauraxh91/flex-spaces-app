import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    padding: '0px 8px',
    border: '0',
    borderRadius: '8px',
    backgroundColor: '#5664f5',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '24px',
    outline: 'none',
  },
};

const HeaderButton = ({ label = 'Join Us' }) => (
  <button style={styles.Button}>{label}</button>
);

export default HeaderButton;
