import React from 'react';

const styles = {
  Text: {
    color: '#030303',
    fontSize: '32px',
    fontWeight: 600,
    lineHeight: '38px',
    textAlign: 'center',
    marginBottom: '8px',
  },
};

const HeroTitle = ({ text = 'Reach More Remote Workers. Boost Your Daily Revenue.' }) => (
  <div style={styles.Text}>{text}</div>
);

export default HeroTitle;
