// src/App.jsx
import HeaderIcon from './components/Header/HeaderIcon';
import HeaderText from './components/Header/HeaderText';
import HeaderButton from './components/Header/HeaderButton';

import HeroImage from './components/Hero/HeroImage';
import HeroCard from './components/Hero/HeroCard';
import HeroTitle from './components/Hero/HeroTitle';
import HeroDescription from './components/Hero/HeroDescription';
import HeroButton from './components/Hero/HeroButton';

import TitleText from './components/Text/TitleText';
import DescriptionText from './components/Text/DescriptionText';
import UspSection from './components/Usp/UspSection';

import GettingStartedSection from "./components/GettingStarted/GettingStartedSection";
import './index.css';
import './layout.css';
import './media.css';
import  './components/Cards/cards.css';
import  './components/GettingStarted/getting-started.css';

function App() {
  return (
    <div className="page-container">
      <header>
        <div className="header-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <HeaderIcon />
            <HeaderText />
          </div>
        </div>
      </header>

      <HeroImage />
      <HeroCard>
        <HeroTitle />
        <HeroDescription />
        <HeroButton />
      </HeroCard>
      <div style={{ padding: '40px' }}>
      <TitleText />
      <DescriptionText />
      </div>
      <div>
        <UspSection />
      </div>
      <div style={{ padding: '40px' }}>
       
      <GettingStartedSection />
      </div>
    </div>
  );
}

export default App;
