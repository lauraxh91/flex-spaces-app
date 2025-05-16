import React from 'react';
import { ChartArea, Calendar, Briefcase } from 'lucide-react';

const UspSection = () => {
  const cardData = [
    {
      icon: ChartArea,
      title: 'Increase Revenue',
      body: 'Welcome a new stream of users who want short-term, flexible options. Whether it is a single desk for a day or a quiet spot for a week, our platform helps you monetize your empty seats—on your terms.',
    },
    {
      icon: Calendar,
      title: 'Booking Flexibility',
      body: 'Stay in full control. You set your availability, hours, and limits—so you can prioritize your long-term members and walk-ins. Decide how many spots can be booked daily, and only accept bookings when it works for you.',
    },
    {
      icon: Briefcase,
      title: 'Smart Workspace Management',
      body: 'Our platform will give you simple tools to manage bookings, track occupancy, and receive payouts—so you can stay focused on running your space.',
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
