import React, { useContext,useState,useEffect } from 'react'
import MenuFilterCard from '../components/menuComponents/MenuFilterCard'
import MenuFilterContainer from '../components/menuComponents/MenuFilterContainer'
import Border from '../components/Border/Border'
import CardMount from '../components/CardMount/CardMount'
import testData from '../components/TestData/TestData'
import {CatagoryContext} from '../context/CatagoryContext'
import axios from 'axios'


function Menu() {

const {selectCatagory} = useContext(CatagoryContext)

//fetching data from database
const [cardData, setCardData] = useState([])
  
  const  fetchData = async()=>{
    try {
      var data = await  axios.get("https://localhost:7298/getCardDetails");
     var data1 = data.data
     var avilableData = data1.filter((item)=>item.isAvailable===true)
      setCardData(avilableData)
      console.log("data from filered data")
    console.log(data1)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchData();
  },[]);

  const filterData = selectCatagory === 'all'? cardData : cardData.filter(item=>item.category===selectCatagory);

  return (
    <>
    <MenuFilterContainer/>
    <Border/>
    <CardMount
      data={filterData}
    />
    <Border/>
    </>
  )
}

export default Menu