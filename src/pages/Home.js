import React from 'react';
import Nav from '../components/Navbar';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Nav />
            <Banner />
            <Card />
            <Footer />
        </div>
    );
};

export default Home;