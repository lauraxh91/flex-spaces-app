import React from 'react';
import { CheckCircle, List, DollarSign, DollarSignIcon, ListIcon } from 'lucide-react';

const steps = [
  {
    icon: ListIcon,
    title: 'List Your Space Quickly',
    description: 'Tell us about your space—add photos, availability, and key amenities. We’ll help you get set up.',
  },
  {
    icon: DollarSignIcon,
    title: 'Receive Flexible Bookings',
    description: 'Remote workers discover your space through our platform and book based on your real-time availability.',
  },
  {
    icon: CheckCircle,
    title: 'Earn Effortlessly',
    description: 'We take care of payments, check-ins, and customer support. You focus on creating an amazing workspace experience.',
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
