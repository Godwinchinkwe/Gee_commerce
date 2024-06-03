import React from 'react'
import "./SlideContent.css"
// import blogg5 from "../../assets/blog57.jpg"

const SlideContent = ({img, primarytext, secondtext}) => {
  return (
    <div className='slidecontent-main'>
        <div className='slidecontent-left'>
            <h1>
                {primarytext}
            </h1>
            <p>{secondtext}</p>

            <button className='btn'> Shop Now</button>

        </div>
        <div className='slidecontent-right'>
            <img src={img} alt='' />
        </div>
      
    </div>
  )
}

export default SlideContent
