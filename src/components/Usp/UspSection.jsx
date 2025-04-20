import React from 'react';
import { ChartArea, Calendar, Briefcase } from 'lucide-react';

const UspSection = () => {
  const cardData = [
    {
      icon: ChartArea,
      title: 'Increase Revenue',
      body: 'Attract new clients effortlessly. Set your pricing and connect with a growing pool of remote professionals.',
    },
    {
      icon: Calendar,
      title: 'Flexible Booking',
      body: 'Accept bookings only when you have space. Control your availability, hours, and capacity.',
    },
    {
      icon: Briefcase,
      title: 'Smart Workspace Management',
      body: 'Easily manage your space and optimize occupancy with smart features tailored to your needs.',
    },
  ];

  return (
    <div className="feature-cards-container">
      {cardData.map(({ icon: Icon, title, body }, index) => (
        <div className="feature-card" key={index}>
          <Icon className="lucid-icon" />
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
      ))}
    </div>
  );
};

export default UspSection;
