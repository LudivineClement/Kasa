import React from 'react';
import Nav from '../components/Navbar';
import Banner from '../components/Banner';
import imgBanner2 from '../assets/mountains.png';
import Apropos from '../components/About';
import Footer from '../components/Footer';


const About = () => {
    return (
        <div>
            <Nav />
            <Banner imageUrl={imgBanner2} />
            <Apropos />
            <Footer />
        </div>
    );
};

export default About;