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

const HeroDescription = ({ text = 'List your coworking space on our flexible booking platform and connect with remote professionals, digital nomads, and freelancers looking for short-term work spots. You choose when to accept bookings, how many desks to offer, and what pricing works best for you.' }) => (
  <div style={styles.Text}>{text}</div>
);

export default HeroDescription;
