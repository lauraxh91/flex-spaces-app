import React from 'react';

const styles = {
  Text: {
    color: '#030303',
    fontSize: '18px',
    maxWidth: '900px',
    fontWeight: 300,
    lineHeight: '28px',
    textAlign: 'center',  // Ensures text is centered
    margin: '0 auto',  // Centers the element itself within its container (if needed)
  },
};

const defaultProps = {
  text: 'Remote workers crave flexibility. They desire the freedom to choose where and how long they work. Tap into this trend and make your space their next hub for inspiration and productivity.',
};

const DescriptionText = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default DescriptionText;
