import React from 'react'
import './ReservasionForm.css'
import { useState } from 'react'
import Button from '../../Button/Button'



function ReservasionForm() {
 const [celebration, setCelebration] = useState(false)
  const buttonName = "Reserve a Table"
  return (
    <>  
    
    <div className='flex flex-col h-[150vh] items-center bg-slate-400 p-5 m-3' >

        <div className='p-5 my-4 rounded-md shadow-md bg-slate-600 shadow-slate-900'>
           <h1 className='font-bold text-[60px]'>Make Reservasion</h1>
        </div>

      <div className='mt-5 '>
        <form action="" method='POST' >

          <div className='flex justify-between gap-5 mb-10'>
          <input type="text" placeholder='Name' id="fullName" className='w-[60%] h-[8vh] Namefeild'/>
          <input type="tel"  id="phoneNumber" placeholder='enter your mobile number' className='w-[60%] h-[8vh] Namefeild'/>
          </div>

        <div className='flex justify-between gap-5 mb-10'>
        <input type="date" placeholder='choose a date' id="date" className='w-[60%] h-[8vh] Namefeild'/>
        <input type="time" placeholder='choose a time' className='w-[60%] h-[8vh] Namefeild'/>
        </div>

        
      <div className='flex justify-between gap-5 mb-10'>
        <input type="number" placeholder='maximum 10' id="numberOfGuests" min={1} max={10} className='w-[60%] h-[8vh] Namefeild'/>

        <select name="area" id="area" className='w-[60%] h-[8vh] Namefeild'>
          <option value="Terrace">The Terrace</option>
          <option value="Lounge">The Lounge</option>
          <option value="Panorama">The Panorama</option>
        </select>
      </div>

           <div className='flex items-center justify-between gap-1 mb-10'>
            <div className='flex flex-col justify-between gap-3 '>
            <label htmlFor='celebration' className='text-[30px] text-blue-600'>Are your reserving for celebration?</label>
            <p className='text-[20px] font-serif text-blue-600 mb-2'>Pick  one</p>
            <label className=''><input type='radio' name="celebration" value="yes" onClick={()=>setCelebration(true)} className='radio-large'/> Yes </label>
            <label><input type="radio" name="celebration" value="no" onClick={()=>setCelebration(false)} className='radio-large'/> No</label>
            </div>
              {/* hidden area */}
            <div>
              {celebration
            ?
             <select className='w-full h-[8vh] Namefeild'>
              <option>Normal Dining</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Engagement</option>
              <option>Farewell</option>
              <option value="">Date Night</option>
              <option value="">Holiday Celebration</option>
             </select>
             
            : 
             ""}
            </div>

            </div>

            
            <div>
            <label htmlFor='arrange'>Special Requests</label>
            <textarea name="arrange" id="arrange" rows={4} cols={100}/>
            </div>
            <div>
            <Button name={buttonName}/>
            </div>  
        </form> 
        </div> 
        </div>  
    </>
  )
}

export default ReservasionForm