import React from 'react';

const styles = {
  Text: {
    color: '#030303',
    fontSize: '20px',
    letterSpacing: '-0.5px',
    lineHeight: '28px',
  },
};

const HeaderText = ({ text = 'FlexSpaces' }) => (
  <div style={styles.Text}>{text}</div>
);

export default HeaderText;
