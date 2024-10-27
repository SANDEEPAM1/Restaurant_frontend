import React, { useEffect, useState } from 'react'
import axios from 'axios';

function KitchenCard(props) {
  const [newState,setNewState] = useState("pending");

  const changeStatus = () =>{
    if(newState === "pending"){
      setNewState("cooking")
  }else if(newState ==="cooking"){
      setNewState("complete")
  }
  }

  const connetBackend = async () =>{
    try {
      var response = await axios.patch(`https://localhost:7298/updateStatus/${props.OrderId}`,{
          Status:newState        
      })
      if(!response){
        console.log("something went wrong")
      }
      console.log(response)
    } catch (error) {
      console.error(error)
    }
    }

  const handleState = ()=>{
    changeStatus(); 
    console.log(newState)
  }
  console.log(newState)
  
 useEffect(()=>{
  if(newState !== "pending"){
    connetBackend();
    console.log("from useEffect inside the if statement",newState)
  }
  
  console.log("from useEffect outside the if statmennt",newState)
 },[newState])
  
  const generateLabel = (newState) =>{
    switch (newState) {
        case 'pending':
          return 'Start Cooking';
        case 'cooking':
          return 'Mark as Completed';
        case 'complete':
          return 'Completed'
          default:
            return "";
      }
  }
    
  return (
    <>
        <div className='containter w-[10%] h-full flex flex-col items-center border-[1px] border-black m-4'>
            <div className="w-full text-center name">
                <h1>{props.OrderId}</h1>
            </div>
            <div className='time'>
                <h2>33.34</h2>
            </div>
            <div className="foods">
              <table>
                <tbody>
              {props.items.map((item)=>(
                    <tr>
                      <td>{item.title}</td>
                      <td>{item.quantity}</td>
                    </tr>
                ))}
                </tbody>
              </table>

            </div>
            <div className="button">
                <button type="button" onClick={()=>handleState()}>{generateLabel(newState)}</button>
            </div>
        </div>
    </>
  )
}

export default KitchenCard