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

import  '../components/Cards/cards.css';
import  '../components/GettingStarted/getting-started.css';
import ContactForm from '../components/ContactForm'; 
import Footer from '../components/Footer'; 
import CalloutCard from '../components/Text/CallOutCard';

const HomePage = () => {
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
            <CalloutCard/>
        </div>
        <div style={{ paddingTop: '1px' }}>
            <section id="how-it-works">
                <GettingStartedSection />
            </section>
        </div>
        <div style={{ paddingTop: '30px' }}>
        <section style={{  textAlign: 'center',lineHeight: '28px',fontWeight: 700,    fontSize: '18px',color: '#030303'}} id="contact">
            <ContactForm />
            <Footer />
        </section>
        </div>
    </div>
    );
};

export default HomePage;