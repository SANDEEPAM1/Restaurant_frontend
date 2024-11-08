import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const PhyaicalTables = () => {
  const [PhysicalTable,setPhysicalTable] = useState([])
    
    const navigate = useNavigate();

      
        
    
  useEffect(()=>{
    
    const fetchData = async ()=>{
      try {
          var response = await axios.get("https://localhost:7298/getAllTables")
          var data = response.data;
          console.log(data)
          if(data !== null){
            setPhysicalTable(data)
          }
          console.log( "from testData",PhysicalTable)
      } catch (error) {
          console.log("something went wrong",error)
      }
  }
       fetchData();
       
       const intervalId = setInterval(fetchData, 5000);
       return () => clearInterval(intervalId);

      //setDeliveryPerson(testData)
  },[])
  
  const deletRow = async (id) =>{
    try {
      var response = await axios.delete(`https://localhost:7298/deletePhyTable/${id}`)
      console.log(response.data)
    } catch (error) {
      console.log("something went wrong",error)
    }
  }

  const handleDelete = (id) =>{
    console.log("from handle button ",id)
    deletRow(id); 
    
  }
  const handleEdit = (id) =>{
    navigate(`/Admin/UpdateTable/${id}`)
  }

return (
  <>
       <div className="flex flex-col w-full p-4 overflow-y-auto rounded-lg h-[90%]">
    <table className="w-full text-left border-spacing-y-2">
      <thead>
        <tr className="h-12 text-lg font-semibold text-white bg-orange-600">
          <th className="w-20 p-4">PhysicalTable ID</th>
          <th className="w-32 p-4">Table Number</th>
          <th className="w-40 p-4">Seats</th>
          <th className="w-40 p-4">Location</th>
          <th className="w-40 p-4">Speacial Features</th>
          <th className="w-32 p-4">IsAvailabel</th>
          <th className="w-20 p-4"></th>
          <th className="w-20 p-4"></th>
        </tr>
      </thead>
      <tbody>
        {PhysicalTable.map((item) => (
          <tr
            key={item.tableId}
            className="h-12 text-white align-middle bg-gray-800 rounded-lg hover:bg-gray-700"
          >
            <td className="p-4">{item.tableId}</td>
            <td className="p-4">{item.tableNumber}</td>
            <td className="p-4">{item.seats}</td>
            <td className="p-4">{item.location}</td>
            <td className="p-4">{item.specialFeature}</td>
            <td className="p-4">{item.isAvailable? "yes":"no"}</td>
            <td className="p-4">
              <button className="px-3 py-1 text-white bg-red-600 rounded hover:bg-red-700" onClick={()=>handleDelete(item.tableId)}>
                Delete
              </button>
            </td>
            <td className="p-4">
                <button className="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-700" onClick={()=>handleEdit(item.tableId)}>
                  Edit
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

export default PhyaicalTables