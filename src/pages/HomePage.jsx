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
        <TitleDescription 
        title="Coworking Spaces are Booming — Are You Missing Out?" 
        description="Remote workers crave flexibility. They desire the freedom to choose where and how long they work. Tap into this trend and make your space their next hub for inspiration and productivity." 
        />
        </div>
        <div>
        <UspSection />
        </div>
        <div style={{ padding: '40px' }}>

        <GettingStartedSection />
        </div>

        <TitleDescription 
        title="Ready to Attract the Remote Workforce of Tomorrow?" 
        />   
        <br />   
        <HeroButton />   
        <br />   
        <TitleDescription 
        description="Be among the first coworking spaces featured on Flex Spaces.
We’ll personally guide you through listing your space and help you tap into a new stream of flexible, remote-first bookings—once we launch." 
        />
        <br />   
        <br />
    </div>
    );
};

export default HomePage;