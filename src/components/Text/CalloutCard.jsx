import React from 'react';

const styles = {
  cardWrapper: {
    width: '100%',
    maxWidth: '1672px',
    margin: '0 auto',
    padding: '40px 20px',
    backgroundColor: '#6c78ed',
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'Lexend Deca',
  },
  title: {
    fontSize: '20px',
    fontWeight: 600,
    lineHeight: '32px',
    marginBottom: '16px',
  },
  description: {
    fontSize: '18px',
    fontWeight: 300,
    lineHeight: '28px',
    maxWidth: '900px',
    margin: '0 auto',
  },
};

const CalloutCard = ({
  title = 'More People Work Remotely Than Ever — Attract Them to Your Space',
  description = `Remote professionals are working differently. They seek freedom, not long-term contracts, but day passes, week passes, and drop-ins. By listing your space on our platform, you can fill unused desks and bring in additional revenue from ad-hoc users, without disrupting your existing members. Be among the first featured spaces when we launch.`,
}) => {
  return (
    <div style={styles.cardWrapper}>
      <div style={styles.title}>{title}</div>
      <div style={styles.description}>{description}</div>
    </div>
  );
};

export default CalloutCard;
