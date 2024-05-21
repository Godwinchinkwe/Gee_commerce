import React from 'react'
import Slider from "react-slick";
import "./Slides.css"
import blog2 from "../../assets/blog2.jpg"
import SlideContent from '../SlideContent/SlideContent';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slides = () => {

    const settings = {
        dots: false,
        // dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed:2000,
        autoplaySpeed: 5000,
        cssEase:"linear"
  
      };


  return (
    <div>
        <Slider {...settings}>
      <div className='slide_1'>
        <h3>Shoe</h3>
        <h3>Shoe</h3>
        <h3>Shoe</h3>
        <h3>Shoe</h3>
        <h3>Shoe</h3>
        <h3>Shoe</h3>
        <h3>Shoe</h3>
        <h3>Shoe</h3>
        <h3>Shoe</h3>
        <h3>Shoe</h3>
        <h3>Shoe</h3>
        <h3>Shoe</h3>
        <h3>Shoe</h3>
        <h3>Shoe</h3>
        <h3>Shoe</h3>
        <h3>Shoe</h3>
        <h3>Shoe</h3>
      </div>
      <div>
        <h3>Bag</h3>
        <img src={blog2} alt=''/>
      </div>
      <div className='slide-third'>
        <SlideContent />
      </div>
      <div>
        <h3>suit</h3>
      </div>
      <div>
        <h3>clothes</h3>
      </div>
      <div>
        <h3>belts</h3>
      </div>
    </Slider>
      
    </div>
  )
}

export default Slides
