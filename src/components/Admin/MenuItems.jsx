import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

function MenuItems() {
    const [menuItem,setMenuItems] = useState([])
    
    useEffect(()=>{
      
      const fetchData = async ()=>{
        try {
            var response = await axios.get("https://localhost:7298/getMenu")
            var data = response.data;
            console.log(data)
            if(data !== null){
              setMenuItems(data)
            }
            console.log( "from testData",menuItem)
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
        var response = await axios.delete(`https://localhost:7298/deleteMenu/${id}`)
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
            <th className="w-20 p-4">menuItemId</th>
            <th className="w-32 p-4">title</th>
            <th className="w-40 p-4">description</th>
            <th className="w-20 p-4">price</th>
            <th className="w-32 p-4">category</th>
            <th className="w-32 p-4">isAvailable</th>
            
            <th className="w-20 p-4">
              {/* <button className="px-3 py-1 text-white bg-red-600 rounded hover:bg-red-700">
                Delete All
              </button> */}
            </th>
            <th className="w-20 p-4">
              {/* <button className="px-3 py-1 text-white bg-red-600 rounded hover:bg-red-700">
                Delete All
              </button> */}
            </th>
            
          </tr>
        </thead>
        <tbody>
          {menuItem.map((item) => (
            <tr
              key={item.menuItemId}
              className="h-12 text-white align-middle bg-gray-800 rounded-lg hover:bg-gray-700"
            >
              <td className="p-4">{item.menuItemId}</td>
              <td className="p-4">{item.title}</td>
              <td className="p-4">{item.description}</td>
              <td className="p-4">{item.price}</td>
              <td className="p-4">{item.category}</td>
              <td className="p-4">{item.isAvailable ? "yes" : 'no'}</td>
              
              <td className="p-4">
                <button className="px-3 py-1 text-white bg-red-600 rounded hover:bg-red-700" onClick={()=>handleDelete(item.menuItemId)}>
                  Delete
                </button>
              </td>
              <td className="p-4">
                <button className="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-700" onClick={()=>handleEdit(item.menuItemId)}>
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

export default MenuItems