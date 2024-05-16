import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slides = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed:2000,
        autoplaySpeed: 5000,
        cssEase:"linear"
  
      };


  return (
    <section className='home'>
        <Slider {...settings}>
      <div>
        <h3>Shoe</h3>
      </div>
      <div>
        <h3>Bag</h3>
      </div>
      <div>
        <h3>jewelries</h3>
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
      
    </section>
  )
}

export default Slides
