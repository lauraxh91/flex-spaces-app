import React from 'react';
import { CheckCircle, List, DollarSign, DollarSignIcon, ListIcon } from 'lucide-react';

const steps = [
  {
    icon: ListIcon,
    title: 'List Your Space Quickly',
    description: 'Share details about your space, availability, and amenities.',
  },
  {
    icon: DollarSignIcon,
    title: 'Receive Flexible Bookings',
    description: 'Remote workers browse and book your space based on real-time availability.',
  },
  {
    icon: CheckCircle,
    title: 'Earn Effortlessly',
    description: 'We handle payments, check-ins, and support while you focus on delivering a great experience.',
  },
];

const GettingStartedSection = () => {
  return (
    <section className="getting-started-section">
      <h2 className="getting-started-title">How It Works</h2>
      <div className="getting-started-steps">
        {steps.map(({ icon: Icon, title, description }, index) => (
          <div className="getting-started-step" key={index}>
            <Icon className="lucid-icon" />
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GettingStartedSection;
