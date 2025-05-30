import { useEffect } from 'react';

import HeroImage from '../components/Hero/HeroImage';
import HeaderButton from '../components/Header/HeaderButton';
import HeaderIcon from '../components/Header/HeaderIcon';
import HeaderText from '../components/Header/HeaderText';
import HeroCard from '../components/Hero/HeroCard';
import HeroTitle from '../components/Hero/HeroTitle';
import HeroDescription from '../components/Hero/HeroDescription';
import HeroButton from '../components/Hero/HeroButton';

import TitleDescription from '../components/TitleDescription';
import UspSection from '../components/Usp/UspSection';

import GettingStartedSection from "../components/GettingStarted/GettingStartedSection";

import '../components/Cards/cards.css';
import '../components/GettingStarted/getting-started.css';

import ContactForm from '../components/ContactForm'; 
import Footer from '../components/Footer'; 
import CallOut from '../components/Text/CallOut';

const HomePage = () => {
  useEffect(() => {
    // Prevent scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Remove hash if present (e.g., #contact)
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }

    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      <HeaderText />
      <HeroImage />
      <HeroCard>
        <HeroTitle />
        <HeroDescription />
        <HeroButton />
      </HeroCard>

      <div style={{ paddingTop: '1px' }}>
        <section id="benefits">
          <UspSection />
        </section>
      </div>

      <div style={{ paddingTop: '1px' }}>
        <CallOut />
      </div>

      <div style={{ paddingTop: '1px' }}>
        <section id="how-it-works">
          <GettingStartedSection />
        </section>
      </div>

      <div style={{ paddingTop: '20px' }}>
        <section
          id="contact"
          style={{
            textAlign: 'center',
            lineHeight: '28px',
            fontWeight: 700,
            fontSize: '18px',
            color: '#030303'
          }}
        >
          <ContactForm />
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
