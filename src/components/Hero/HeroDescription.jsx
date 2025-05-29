import React from 'react';

const styles = {
  Text: {
    color: '#030303',
    fontSize: '18px',
    fontFamily: 'Lexend Deca',
    fontWeight: 300,
    lineHeight: '28px',
    textAlign: 'center',
  },
};

const HeroDescription = ({ text = 'Connect with a stream of remote professionals seeking flexible workspaces. You control the terms, pricing, and availability.' }) => (
  <div style={styles.Text}>{text}</div>
);

export default HeroDescription;
