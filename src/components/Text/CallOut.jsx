import React from 'react';
import defaultImage from '../../assets/6.jpg';

const styles = {
  wrapper: {
    width: '100%',
    margin: '0 auto',
    padding: '60px 20px',
    backgroundColor: '#202223',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '40px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageWrapper: {
    flex: '1 1 48%',
    maxWidth: '600px',
    minHeight: '300px',
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${defaultImage})`,
  },
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.2)', // subtle dark overlay for balance
    borderRadius: '16px',
  },
  card: {
    flex: '1 1 48%',
    maxWidth: '600px',
    backgroundColor: '#2C2E2F',
    borderRadius: '16px',
    padding: '32px',
    boxShadow: '0 0 20px rgba(0,0,0,0.3)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  title: {
    fontSize: '26px',
    fontWeight: 700,
    lineHeight: '38px',
    color: '#ffffff',
  },
  description: {
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '28px',
    color: '#DDDDDD',
  },
  checklist: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    color: '#CCCCCC',
  },
  checkIcon: {
    width: '10px',
    height: '10px',
    backgroundColor: '#00C291',
    borderRadius: '50%',
    marginRight: '12px',
    flexShrink: 0,
  },
  button: {
    marginTop: '24px',
    backgroundColor: '#00C291',
    color: 'white',
    padding: '14px 28px',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 600,
    fontSize: '16px',
    cursor: 'pointer',
    alignSelf: 'flex-start',
    transition: 'background-color 0.3s ease',
  },
};

const CallOut = () => {
  const checklistItems = [
    'Day & week passes — no long-term commitment',
    'Monetize unused desks effortlessly',
    'No disruption to current members',
    'All-in-one platform tools included',
  ];

  return (
    <div style={styles.wrapper}>
      <div style={styles.imageWrapper}>
        <div style={styles.overlay}></div>
      </div>
      <div style={styles.card}>
        <div style={styles.title}>Attract the Growing Remote Workforce</div>
        <div style={styles.description}>
          More people work remotely than ever — and they’re not looking for long-term leases. They want flexibility, convenience, and drop-in options.
        </div>
        <div style={styles.checklist}>
          {checklistItems.map((item, idx) => (
            <div key={idx} style={styles.listItem}>
              <span style={styles.checkIcon}></span>
              {item}
            </div>
          ))}
        </div>
        <a href="#contact" style={{ ...styles.button, textAlign: 'center', display: 'inline-block', textDecoration: 'none' }}>
        I’m Interested
</a>
      </div>
    </div>
  );
};

export default CallOut;
