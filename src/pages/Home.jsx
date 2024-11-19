import React, { useEffect,useState } from 'react'
import Hero from '../components/HeroSection/Hero'
import Border from '../components/Border/Border'
import HomeMiddle from '../components/HomeMiddle/HomeMiddle'
import CardMount from '../components/CardMount/CardMount'
import TestData from '../components/TestData/TestData'
import axios from 'axios'



const Home = (onLoginClick) => {
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
    
    <Hero onLoginClick={onLoginClick}/>
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