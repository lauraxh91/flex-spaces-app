import React from 'react';
import { ChartArea, Calendar, Briefcase } from 'lucide-react';

const UspSection = () => {
  const cardData = [
    {
      icon: ChartArea,
      title: 'Increase Revenue',
      body: 'Attract new clients effortlessly. Set your own pricing and tap into a growing community of remote workers and digital nomads looking for flexible workspaces.',
    },
    {
      icon: Calendar,
      title: 'Flexible Booking',
      body: 'Only accept bookings when it suits you. Set your own hours, manage availability, and maintain full control over your space.',
    },
    {
      icon: Briefcase,
      title: 'Smart Workspace Management',
      body: 'Streamline operations with intuitive tools built for coworking spaces. Easily manage bookings, track performance, and optimize occupancy—without the hassle.',
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
