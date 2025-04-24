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

const HeroDescription = ({ text = 'Join our upcoming platform to attract more clients and streamline your bookings.' }) => (
  <div style={styles.Text}>{text}</div>
);

export default HeroDescription;
