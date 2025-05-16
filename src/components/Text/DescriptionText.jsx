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

const defaultProps = {
  text: 'Remote professionals are working differently. They seek freedom, not long-term contracts, but day passes, week passes, and drop-ins. By listing your space on our platform, you can fill unused desks and bring in additional revenue from ad-hoc users, without disrupting your existing members. Be among the first featured spaces when we launch.',
};

const DescriptionText = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default DescriptionText;
