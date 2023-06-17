import React from 'react';
import Nav from '../components/Navbar';
import Banner from '../components/Banner';
import imgBanner1 from '../assets/plage.png';
import Card from '../components/Card';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Nav />
            <Banner imageUrl={imgBanner1} text="Chez vous, partout et ailleurs"/>
            <Card />
            <Footer />
        </div>
    );
};

export default Home;