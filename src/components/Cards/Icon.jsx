// Icon.jsx
import React from 'react';

const Icon = ({ icon: IconComponent, size = 24, color = "#5664f5" }) => {
  const style = {
    color,
    fill: color,
    width: `${size}px`,
    height: `${size}px`,
    marginBottom: '16px',
  };

  return <IconComponent style={style} />;
};

export default Icon;