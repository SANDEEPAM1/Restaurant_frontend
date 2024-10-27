import axios from 'axios'
import React, { useState } from 'react'


const ViewOrders = () => {
    const [orders,setOrders] = useState([])

    const fetchData = async ()=>{
        try {
            var response = await axios.get("https://localhost:7298/getOnlineOrders")
            var data = response.data;
        } catch (error) {
            console.log("something went wrong",error)
        }
    }



  return (
    <>
        

    </>
  )
}

export default ViewOrders