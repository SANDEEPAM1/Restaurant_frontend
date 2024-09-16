import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Hero from '../components/HeroSection/Hero'
import Border from '../components/Border/Border'
import vedioClip from '../assets/resturantTour.mp4'


const Home = () => {
  return (
    <>
    <NavBar/>
    <Hero/>
    <Border/>
   <div className='bg-black vedio'>
      <video src={vedioClip} className=' play'/>
   </div>
    
    </>
  )
}

export default Home