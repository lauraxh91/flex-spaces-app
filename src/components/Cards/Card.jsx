import React from 'react';

const Card = ({ children }) => {
  const style = {
    width: '400px',  // Increase width here
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '24px',
    textAlign: 'center',
    marginBottom: '20px',
    transition: 'transform 0.2s ease',
  };

  return <div style={style}>{children}</div>;
};

export default Card;
