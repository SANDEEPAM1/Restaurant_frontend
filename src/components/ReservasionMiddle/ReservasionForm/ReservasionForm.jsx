import React from 'react'
import './ReservasionForm.css'
import { useState } from 'react'
import Button from '../../Button/Button'
import { useNavigate } from 'react-router-dom'



function ReservasionForm() {

const navigate =useNavigate();

 const [formData,setFormData] = useState({
  fname:"",
  phoneNumber:null,
  date:null,
  time:null,
  guest:null,
  area:"",
  celebration:"no",
  occation:"",
  arrange:""
 });

 const handleChanges = (e)=>{
  const name = e.target.name;
  const value = e.target.value;

    setFormData({
      ...formData,
      [name]:value
    });

 }

 const handelSubmitt =(e) =>{
    e.preventDefault();
     alert("the table is resreved successfully");
     console.log(formData)
      navigate("/")
    
 }

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
          <input type="text" onChange={handleChanges} placeholder='Name' id="fullName" name='fname' value={formData.fname} className='w-[60%] h-[8vh] Namefeild '/>
          <input type="tel" onChange={handleChanges} id="phoneNumber" placeholder=' mobile number' name='phoneNumber' value={formData.phoneNumber} className='w-[60%] h-[8vh] Namefeild'/>
          </div>

        <div className='flex justify-between gap-5 mb-10'>
        <input type="date" onChange={handleChanges} placeholder='date' name='date' value={formData.date} id="date" className='w-[60%] h-[8vh] Namefeild'/>
        <input type="time" onChange={handleChanges} placeholder='time' name='time' value={formData.time} className='w-[60%] h-[8vh] Namefeild'/>
        </div>

        
      <div className='flex justify-between gap-5 mb-10'>
        <input type="number" placeholder='Number of Guests' onChange={handleChanges} name='guests' value={formData.guest} id="numberOfGuests" min={1} max={10} className='w-[60%] h-[8vh] Namefeild'/>

        <select name="area" id="area" onChange={handleChanges} value={formData.area} className='w-[60%] h-[8vh] Namefeild'>
          <option value="Terrace">The Terrace</option>
          <option value="Lounge">The Lounge</option>
          <option value="Panorama">The Panorama</option>
        </select>
      </div>

           <div className='flex items-center justify-between gap-1 mb-10'>
            <div className='flex flex-col justify-between gap-3 '>
            <label htmlFor='celebration' className='text-[30px] text-blue-600'>Are your reserving for celebration?</label>
            <p className='text-[20px] font-serif text-blue-600 mb-2'>Pick  one</p>
            <label className=''><input type='radio'onChange={handleChanges} name="celebration" value="yes" checked={formData.celebration==="yes"} className='radio-large'/> Yes </label>
            <label><input type="radio" onChange={handleChanges} name="celebration" value="no" checked={formData.celebration === "no"} className='radio-large'/> No</label>
            </div>
              {/* hidden area */}
            <div>
              {formData.celebration === "yes"
            ?
             <select className='w-full h-[8vh] Namefeild' onChange={handleChanges} name='occation'>
              <option value="normal">Normal Dining</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="engagement">Engagement</option>
              <option value="farewell">Farewell</option>
              <option value="Date">Date Night</option>
              <option value="Holiday">Holiday Celebration</option>
              <option value="other">Other</option>
             </select>
             
            : 
             ""}
            </div>

            </div>

            
            <div className='flex'>
            <textarea name="arrange" value={formData.arrange} onChange={handleChanges} placeholder='Special Requrirements' id="arrange" rows={4} cols={100} className='Namefeild text-start'/>
            </div>

            <div className=' Rbutton'>
                  <Button name={buttonName} onClick={handelSubmitt}/>
            </div>  
        </form> 
        </div> 
        </div>  
    </>
  )
}

export default ReservasionForm