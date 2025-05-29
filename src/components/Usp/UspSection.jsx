import React from 'react';
import { ChartArea, Calendar, Briefcase } from 'lucide-react';

const styles = {
  sectionWrapper: {
    backgroundColor: '#ffffff',
    padding: '60px 20px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '32px',
    justifyContent: 'center',
  },
  card: {
    flex: '1 1 300px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#f9f9f9',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 0 16px rgba(0, 0, 0, 0.05)',
    gap: '16px',
    maxWidth: '600px',
  },
  icon: {
    flexShrink: 0,
    color: '#00C291',
    width: '28px',
    height: '28px',
    marginTop: '6px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  title: {
    margin: 0,
    fontSize: '18px',
    fontWeight: 700,
    color: '#202223',
  },
  list: {
    margin: 0,
    paddingLeft: '20px',
    color: '#333333',
    fontSize: '15px',
    lineHeight: '1.6',
  },
};

const UspSection = () => {
  const cardData = [
    {
      icon: ChartArea,
      title: 'Increase Revenue',
      items: [
        'Welcome a new stream of users looking for short-term, flexible options.',
        'Monetize your empty seats—on your terms.',
        'Offer daily or weekly bookings effortlessly.',
      ],
    },
    {
      icon: Calendar,
      title: 'Booking Flexibility',
      items: [
        'Stay in full control of your availability.',
        'Set daily booking limits to prioritize your regulars.',
        'Only accept bookings when it fits your schedule.',
      ],
    },
    {
      icon: Briefcase,
      title: 'Smart Workspace Management',
      items: [
        'Easily manage bookings and occupancy.',
        'Track workspace usage and automate payouts.',
        'Spend less time on admin, more on your community.',
      ],
    },
  ];

  return (
    <div style={styles.sectionWrapper}>
      {cardData.map(({ icon: Icon, title, items }, index) => (
        <div key={index} style={styles.card}>
          <Icon style={styles.icon} />
          <div style={styles.content}>
            <h3 style={styles.title}>{title}</h3>
            <ul style={styles.list}>
              {items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UspSection;
