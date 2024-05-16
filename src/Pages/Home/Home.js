import React from 'react'
import "./Home.css"
import Slides from '../../Components/Slides/Slides'
// import HeadingText from '../../Components/HeaderText/HeaderText'

const Home = () => {
  return (
    <>
        {/* <HeadingText title={'Clients '} titlePrimary={'Worked With'} /> */}

      <section className='container'>
        <Slides/>

      </section>
      </>


    
  )
}

export default Home
