import axios from 'axios'
import React, { useEffect, useState } from 'react'
import axiosInstance from '../../Utility/api'


const ViewOrders = () => {
    const [orders,setOrders] = useState([])
    
    useEffect(()=>{
      
      const fetchData = async ()=>{
        try {
            var response = await axiosInstance.get("/getOnlineOrders")
            var data = response.data;
            console.log(data)
            if(data !== null){
              setOrders(data)
            }
            console.log( "from testData",orders)
        } catch (error) {
            console.log("something went wrong",error)
        }
    }
         fetchData();
         
         const intervalId = setInterval(fetchData, 5000);
         return () => clearInterval(intervalId);

        //setOrders(testData)
    },[])
    
    const deletRow = async (id) =>{
      try {
        var response = await axios.delete(`https://localhost:7298/deleteOrder/${id}`)
        console.log(response.data)
      } catch (error) {
        console.log("something went wrong",error)
      }
    }

    const handleDelete = (id) =>{
      console.log("from handle button ",id)
      deletRow(id); 
      
    }

  return (
    <>
         <div className="flex flex-col w-full p-4 overflow-y-auto rounded-lg h-[90%]">
      <table className="w-full text-left border-spacing-y-2">
        <thead>
          <tr className="h-12 text-lg font-semibold text-white bg-orange-600">
            <th className="w-20 p-4">Order ID</th>
            <th className="w-32 p-4">Customer ID</th>
            <th className="w-40 p-4">Order Time</th>
            <th className="w-20 p-4">Status</th>
            <th className="w-32 p-4">Delivery Type</th>
            <th className="w-32 p-4">Delivery Person ID</th>
            <th className="w-32 p-4">Phone Number</th>
            <th className="w-20 p-4">
              <button className="px-3 py-1 text-white bg-red-600 rounded hover:bg-red-700">
                Delete All
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item) => (
            <tr
              key={item.orderId}
              className="h-12 text-white align-middle bg-gray-800 rounded-lg hover:bg-gray-700"
            >
              <td className="p-4">{item.orderId}</td>
              <td className="p-4">{item.customerId}</td>
              <td className="p-4">{item.orderTime}</td>
              <td className="p-4">{item.status}</td>
              <td className="p-4">{item.deliveryType}</td>
              <td className="p-4">{item.deliveryPerosnId ? item.deliveryPerosnId : 'not a delivery'}</td>
              <td className="p-4">{item.phoneNumber}</td>
              <td className="p-4">
                <button className="px-3 py-1 text-white bg-red-600 rounded hover:bg-red-700" onClick={()=>handleDelete(item.orderId)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default ViewOrders