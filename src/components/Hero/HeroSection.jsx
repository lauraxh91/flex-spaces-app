import React from 'react';
import HeroImage from './HeroImage';
import HeroCard from './HeroCard';
import HeroTitle from './HeroTitle';
import HeroDescription from './HeroDescription';
import HeroButton from './HeroButton';

const HeroSection = () => {
  return (
    <div style={{ position: 'relative' }}>
      <HeroImage />
      <HeroCard>
        <HeroTitle />
        <HeroDescription />
        <HeroButton />
      </HeroCard>
    </div>
  );
};

export default HeroSection;
