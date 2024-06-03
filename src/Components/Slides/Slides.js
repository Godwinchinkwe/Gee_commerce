import React from 'react'
import Slider from "react-slick";
import "./Slides.css"
// import blog2 from "../../assets/blog2.jpg"
import SlideContent from '../SlideContent/SlideContent';
import blog56 from '../../assets/blog56.jpg'
import blog54 from '../../assets/blog54.jpg'
import blog53 from '../../assets/blog53.jpg'
import blog52 from '../../assets/blog52.jpg'
import blog51 from '../../assets/blog51.jpg'

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
          <SlideContent primarytext={"Unleash Your Unique Style"} 
           secondtext={'Chase your dreams in style'} img={blog56}/>
        </div>
      <div>
      <SlideContent primarytext={"Unleash Your Unique Style"} 
        secondtext={'Chase your dreams in style'} img={blog54}/>
      </div>
      <div className='slide-third'>
        <SlideContent primarytext={"Select your New Perfect Style"} 
        secondtext={'Some things are not to be left unattended to'} img={blog53}/>
      </div>
      <div>
      <SlideContent primarytext={"LUXURY Or NOTHING"} 
        secondtext={'I bet you dont have this one in you collections'} img={blog52}/>
      </div>
      <div>
      <SlideContent primarytext={"Dare to be Different"} 
        secondtext={'Dress to Express, Not to Impress'} img={blog51}/>
      </div>
      <div>
      <SlideContent primarytext={"Embrace Your Individuality"} 
        secondtext={'Fashion that Inspires Confidence'} img={blog56}/>
      </div>
    </Slider>
      
    </div>
  )
}

export default Slides
