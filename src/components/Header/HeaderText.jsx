import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const HeaderText = ({ text = 'BookSpace' }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false); // Close menu on resize to desktop
    };

    const handleClickOutside = (e) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

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
    padding: '20px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    transition: 'opacity 0.3s ease-in-out',
    zIndex: 999,
  };

  return (
    <div style={containerStyle}>
  <button
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  style={{
    ...logoStyle,
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    fontFamily: 'inherit',
  }}
>
  {text}
</button>

      {!isMobile ? (
        <nav style={navStyle}>
          <a href="#how-it-works" style={linkStyle}>How It Works</a>
          <a href="#carousel" style={linkStyle}>App Preview</a>
          <a href="#contact" style={linkStyle}>Early Access</a>
        </nav>
      ) : (
        <>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              padding: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {menuOpen && (
            <div ref={menuRef} style={mobileMenuStyle}>
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
