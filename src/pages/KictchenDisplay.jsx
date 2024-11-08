import React from 'react'
import { useState,useEffect } from 'react'
import KitchenCard from '../components/KitchenCard/KitchenCard'
import axios from 'axios'

const KictchenDisplay = () => {
  const [orderData,setOrderData] = useState([])

  const fetchData = async () =>{
    try {
      
      var response = await axios.get("https://localhost:7298/kitchen")
      if(!response || !response.data){
        console.log("no data from backend")
      }else{
        setOrderData(response.data)
      }
      
      
    } catch (error) {
      console.error(error)
    }
  }
  
  useEffect(()=>{
    fetchData();

    const intervalId = setInterval(fetchData, 5000);
    return ()=> clearInterval(intervalId)
  },[])

  
//   useEffect(()=>{
//     console.log("from the useEffect",orderData)
// },[orderData])

  return (
  <>
  <div className='flex'>
  {
    orderData.map((item)=>(
      <KitchenCard
      OrderId={item.orderID}
      items ={item.items}
      />
    ))
  }
  </div>

  </>
  )
}

export default KictchenDisplay