import React from 'react'

const PhyaicalTables = () => {
  const [DeliveryPerson,setDeliveryPerson] = useState([])
    
    

      
        
    
  useEffect(()=>{
    
    const fetchData = async ()=>{
      try {
          var response = await axios.get("https://localhost:7298/getDeliveryPersons")
          var data = response.data;
          console.log(data)
          if(data !== null){
            setDeliveryPerson(data)
          }
          console.log( "from testData",DeliveryPerson)
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
      var response = await axios.delete(`https://localhost:7298/deleteDeliveryPerson/${id}`)
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
          <th className="w-20 p-4">DeliveryPerson ID</th>
          <th className="w-32 p-4">Full Name</th>
          <th className="w-40 p-4">Phone Number</th>
          <th className="w-32 p-4">IsAvailabel</th>
          <th className="w-20 p-4">
            <button className="px-3 py-1 text-white bg-red-600 rounded hover:bg-red-700">
              Delete All
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {DeliveryPerson.map((item) => (
          <tr
            key={item.deliveryPersonId}
            className="h-12 text-white align-middle bg-gray-800 rounded-lg hover:bg-gray-700"
          >
            <td className="p-4">{item.deliveryPersonId}</td>
            <td className="p-4">{item.fullName}</td>
            <td className="p-4">{item.phoneNumber}</td>
            <td className="p-4">{item.isAvailable? "yes":"no"}</td>
            <td className="p-4">
              <button className="px-3 py-1 text-white bg-red-600 rounded hover:bg-red-700" onClick={()=>handleDelete(item.deliveryPersonId)}>
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

export default PhyaicalTables