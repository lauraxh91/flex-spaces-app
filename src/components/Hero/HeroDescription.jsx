import React from 'react';

const styles = {
  Text: {
    color: '#030303',
    fontSize: '18px',
    lineHeight: '28px',
    textAlign: 'center',
    marginBottom: '12px',
  },
};

const HeroDescription = ({ text = 'List your coworking space on our flexible booking platform. Connect with digital nomads, freelancers, and remote workers seeking dynamic schedules.' }) => (
  <div style={styles.Text}>{text}</div>
);

export default HeroDescription;
