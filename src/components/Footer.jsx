import React from 'react';

const footerStyle = {
  textAlign: 'center',
  fontSize: '14px',
  color: '#555',
  marginTop: '20px',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      © {new Date().getFullYear()} BookSpace. All rights reserved.
    </footer>
  );
};

export default Footer;
