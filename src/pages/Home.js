import React from 'react';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Card />
            <Footer />
        </div>
    )
}

export default Home;