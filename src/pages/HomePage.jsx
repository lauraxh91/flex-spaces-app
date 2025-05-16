import HeroImage from '../components/Hero/HeroImage';
import HeroCard from '../components/Hero/HeroCard';
import HeroTitle from '../components/Hero/HeroTitle';
import HeroDescription from '../components/Hero/HeroDescription';
import HeroButton from '../components/Hero/HeroButton';

import TitleDescription from '../components/TitleDescription';
import UspSection from '../components/Usp/UspSection';

import GettingStartedSection from "../components/GettingStarted/GettingStartedSection";

import  '../components/Cards/cards.css';
import  '../components/GettingStarted/getting-started.css';
import TitleText from '../components/Text/TitleText';
import DescriptionText from '../components/Text/DescriptionText';

const HomePage = () => {
    return (
        <div className="page-container">
            <HeroImage />
            <HeroCard>
            <HeroTitle />
            <HeroDescription />
            <HeroButton />
            </HeroCard>
        <div style={{ padding: '40px' }}>
            <UspSection />
        </div>
        <div style={{ padding: '40px' }}>
            <GettingStartedSection />
        </div>
        <div style={{ padding: '40px' }}>
            <TitleText/>
            <DescriptionText/>
            <HeroButton />   
        </div>

       
    </div>
    );
};

export default HomePage;