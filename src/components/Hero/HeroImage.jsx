import React from 'react';
import defaultImage from '../../assets/1.jpg'; // adjust path if needed

const styles = {
  imageWrapper: {
    position: 'relative',
    width: '100%',
    height: '520px', // slightly reduced from 600px (adjustable)
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.35)', // soft dark overlay
    zIndex: 1,
  },
};

const Image = ({ image }) => {
  const imageUrl = image || defaultImage;

  return (
    <div style={styles.imageWrapper}>
      <div
        style={{
          ...styles.imageContainer,
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div style={styles.overlay} />
    </div>
  );
};

export default Image;
