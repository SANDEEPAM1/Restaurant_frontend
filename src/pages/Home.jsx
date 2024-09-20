import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Hero from '../components/HeroSection/Hero'
import Border from '../components/Border/Border'
import vedioClip from '../assets/resturantTour.mp4'
import plate from '../assets/dsds.jpg'
import HomeMiddle from '../components/HomeMiddle/HomeMiddle'
import Card from '../components/Card/Card'
import CardMount from '../components/CardMount/CardMount'



const Home = () => {
  return (
    <>
    <NavBar/>
    <Hero/>
    <Border/>
    <HomeMiddle/>
    <Border/>
    <CardMount/>  
    
    </>
  )
}

export default Home