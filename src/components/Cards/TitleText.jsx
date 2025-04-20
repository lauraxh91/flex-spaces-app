// TitleText.jsx
import React from 'react';

const TitleText = ({ text }) => {
  const style = {
    color: '#030303',
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: '28px',
    marginBottom: '8px',
  };

  return <div style={style}>{text}</div>;
};

export default TitleText;