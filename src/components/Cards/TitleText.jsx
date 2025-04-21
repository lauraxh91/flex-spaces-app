// TitleText.jsx
import React from 'react';

const TitleText = ({ text }) => {
  const style = {
    color: '#030303',
    fontSize: '18px',
    fontFamily: 'Lexend Deca',
    fontWeight: 700,
    lineHeight: '28px',
  };

  return <div style={style}>{text}</div>;
};

export default TitleText;