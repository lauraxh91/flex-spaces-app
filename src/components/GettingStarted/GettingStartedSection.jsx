import React from 'react';
import { CheckCircle, ListIcon, DollarSignIcon } from 'lucide-react';

const steps = [
  {
    icon: ListIcon,
    title: 'List Your Space Quickly',
    description:
      'Add your space, photos, and details. We guide you step-by-step, so you’re live in minutes.',
  },
  {
    icon: DollarSignIcon,
    title: 'Get Flexible Bookings',
    description:
      'Remote workers book your space for hours, days, or weeks. You control when and how it’s available.',
  },
  {
    icon: CheckCircle,
    title: 'Earn Effortlessly',
    description:
      'We handle payments and check-ins—so you focus on your space, while we do the admin.',
  },
];

const styles = {
  wrapper: {
    backgroundColor: '#fff',
    padding: '80px 20px',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
  },
  title: {
    fontSize: '32px',
    textAlign: 'center',
    color: '#202223',
    fontWeight: '700',
    marginBottom: '48px',
  },
  stepsLayout: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '32px',
  },
  card: {
    flex: '1 1 300px',
    backgroundColor: '#f9f9f9',
    borderRadius: '16px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '16px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
  },
  icon: {
    color: '#00C291',
    width: '28px',
    height: '28px',
    marginTop: '4px',
    flexShrink: 0,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '700',
    margin: 0,
    color: '#202223',
  },
  cardDesc: {
    fontSize: '15px',
    margin: 0,
    color: '#444',
    lineHeight: '1.6',
  },
};

const GettingStartedSection = () => {
  return (
    <section style={styles.wrapper}>
      <div style={styles.container}>
        <h2 style={styles.title}>How it Works</h2>
        <div style={styles.stepsLayout}>
          {steps.map(({ icon: Icon, title, description }, index) => (
            <div key={index} style={styles.card}>
              <Icon style={styles.icon} />
              <div style={styles.content}>
                <h3 style={styles.cardTitle}>{title}</h3>
                <p style={styles.cardDesc}>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GettingStartedSection;
