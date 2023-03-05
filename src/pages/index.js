import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne,homeObjTwo, homeObjThree } from '../components/InfoSection/data';
import Services from '../components/Services';
import Footer from '../components/Footer';
import ImageSlider from '../components/Slider/ImageSlider';
import { SliderData } from '../components/Slider/SliderData';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toogle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
        <Sidebar isOpen={isOpen} toogle={toogle} />
        <Navbar toogle={toogle} />
        <HeroSection />
        <InfoSection {... homeObjOne} />
        <InfoSection {... homeObjTwo} />
        <Services />
        <InfoSection {... homeObjThree} />
        <ImageSlider slides={SliderData} />
        <Footer />
    </>
  )
}

export default Home