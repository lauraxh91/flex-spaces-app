import React from 'react';

const styles = {
  Text: {
    color: '#030303',
    fontSize: '18px',
    fontWeight: 300,
    lineHeight: '28px',
    textAlign: 'center',
  },
};

const HeroDescription = ({ text = 'Tap into a growing network of remote professionals looking for short-term, flexible workspaces. List your space on your terms—set your availability, pricing, and booking rules with full control.' }) => (
  <div style={styles.Text}>{text}</div>
);

export default HeroDescription;
