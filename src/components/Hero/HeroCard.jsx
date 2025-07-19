import React, { useEffect, useState } from 'react';

const getCardStyle = (isMobile) => ({
  position: 'absolute',
  top: isMobile ? '100px' : '250px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '90%',
  maxWidth: '1376px',
  height: 'auto',
  backgroundColor: 'rgba(255,255,255,0.85)',
  borderRadius: '8px',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2, // ✅ Key: above the overlay
});

const HeroCard = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // check once on mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return <div style={getCardStyle(isMobile)}>{children}</div>;
};

export default HeroCard;
