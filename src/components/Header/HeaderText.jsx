import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // Or use emojis: ☰ and ✖

const HeaderText = ({ text = 'FlexSpaces' }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpen(false); // Close menu on resize to desktop
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 24px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  const logoStyle = {
    color: '#030303',
    fontSize: '24px',
    fontWeight: 'bold',
    letterSpacing: '-0.5px',
  };

  const navStyle = {
    display: 'flex',
    gap: '24px',
  };

  const linkStyle = {
    color: '#030303',
    fontSize: '16px',
    textDecoration: 'none',
    fontWeight: 500,
    cursor: 'pointer',
  };

  const mobileMenuStyle = {
    position: 'absolute',
    top: '64px',
    left: 0,
    width: '100%',
    backgroundColor: '#ffffff',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    zIndex: 999,
  };

  return (
    <div style={containerStyle}>
      <div style={logoStyle}>{text}</div>

      {!isMobile ? (
        <nav style={navStyle}>
          <a href="#benefits" style={linkStyle}>Benefits</a>
          <a href="#how-it-works" style={linkStyle}>How It Works</a>
          <a href="#contact" style={linkStyle}>Contact</a>
        </nav>
      ) : (
        <>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {menuOpen && (
            <div style={mobileMenuStyle}>
              <a href="#benefits" style={linkStyle} onClick={() => setMenuOpen(false)}>Benefits</a>
              <a href="#how-it-works" style={linkStyle} onClick={() => setMenuOpen(false)}>How It Works</a>
              <a href="#contact" style={linkStyle} onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default HeaderText;
