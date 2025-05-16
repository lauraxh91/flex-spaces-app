import React from 'react';

const styles = {
  Text: {
    color: '#030303',
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: '32px',
    textAlign: 'center',  // Ensures text is centered
    margin: '0 auto',  // Centers the element itself within its container (if needed)
  },
};

const defaultProps = {
  text: 'More People Work Remotely Than Ever — Attract Them to Your Space',
};

const TitleText = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default TitleText;
