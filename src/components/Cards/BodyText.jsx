import React from 'react';

const BodyText = ({ text }) => {
  const style = {
    color: '#030303',
    fontSize: '16px',
    fontFamily: 'Lexend Deca',
    fontWeight: 300,
    lineHeight: '24px',
  };

  return <div style={style}>{text}</div>;
};

export default BodyText;