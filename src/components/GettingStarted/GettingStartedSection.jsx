import React from 'react';
import { CheckCircle, List, DollarSign, DollarSignIcon, ListIcon } from 'lucide-react';

const steps = [
  {
    icon: ListIcon,
    title: 'List Your Space Quickly',
    description: 'Share your space details, photos, amenities, and when you want to open bookings. We will help you get up and running.',
  },
  {
    icon: DollarSignIcon,
    title: 'Get Flexible Bookings',
    description: 'Remote workers find your space on our platform and book available spots, whether for a day, a week, or just a few hours.',
  },
  {
    icon: CheckCircle,
    title: 'Earn Effortlessly',
    description: 'We will handle payments, support, and user check-ins. You earn revenue without extra admin work.',
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
