import React from 'react'
import "./SlideContent.css"
import blogg5 from "../../assets/blog57.jpg"

const SlideContent = ({img}) => {
  return (
    <div className='slidecontent-main'>
        <div className='slidecontent-left'>
            <h1>
                Select your New Perfect Style
            </h1>
            <p>Some things are not to be left unattended to</p>

            <button> Shop </button>

        </div>
        <div className='slidecontent-right'>
            <img src={blogg5} alt='' />
        </div>
      
    </div>
  )
}

export default SlideContent
