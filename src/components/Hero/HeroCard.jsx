import React from 'react';

const styles = {
  Card: {
    position: 'absolute',
    top: '281px',
    left: '50%',
    transform: 'translateX(-50%)', // This centers the card horizontally
    width: '90%',
    maxWidth: '1376px', // Maximum width
    height: 'auto',
    backgroundColor: 'rgba(255,255,255,0.75)',
    borderRadius: '8px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const HeroCard = ({ children }) => <div style={styles.Card}>{children}</div>;

export default HeroCard;
