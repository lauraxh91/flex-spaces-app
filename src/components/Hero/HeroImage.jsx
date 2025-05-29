import React from 'react';
import defaultImage from '../../assets/1.jpg'; // adjust path based on your folder structure

const styles = {
  imageContainer: {
    top: 0,
    left: 0,
    width: '100%',
    height: '600px',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const Image = ({ image }) => {
  const imageUrl = image || defaultImage;

  return (
    <div
      style={{
        ...styles.imageContainer,
        backgroundImage: `url(${imageUrl})`,
      }}
    />
  );
};

export default Image;
