import React, { useState } from 'react'
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { Section, Image } from './SlideElement';

const ImageSlider = ({slides}) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

  return (
    <Section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
    {SliderData.map((slide, index) => {
        return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && (<Image src={slide.image} alt="Muebles y Colchones" />)}
                
            </div>            
        )
    })}
    </Section>
  )
}

export default ImageSlider