import React, { useEffect,useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import Hero from '../components/HeroSection/Hero'
import Border from '../components/Border/Border'
import vedioClip from '../assets/resturantTour.mp4'
import plate from '../assets/dsds.jpg'
import HomeMiddle from '../components/HomeMiddle/HomeMiddle'
import Card from '../components/Card/Card'
import CardMount from '../components/CardMount/CardMount'
import Footer from '../components/Footer/Footer'
import TestData from '../components/TestData/TestData'
import axios from 'axios'



const Home = () => {
const [cardData, setCardData] = useState([])
  
  const  fetchData = async()=>{
    try {
      var data = await  axios.get("https://localhost:7298/getCardDetails");
     var data1 = data.data
      setCardData(data1)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <>
    
    <Hero/>
    <Border/>
    <HomeMiddle/>
    <Border/>
    <CardMount
      data={cardData}
    />  
    <Border/>
    

    </>
  )
}

export default Home