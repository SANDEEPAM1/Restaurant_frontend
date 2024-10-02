import React from 'react'
import './ReservasionForm.css'
import { useState } from 'react'
import Button from '../../Button/Button'
import { useNavigate } from 'react-router-dom'
import * as Yep from 'yup'



function ReservasionForm() {

//   <div className="radio-container">
//   <label className='radio-label'>
//    <input type='radio' onChange={handleChanges} name="celebration" value="yes" checked={formData.celebration === "yes"} className='radio-large' /> Yes
//    </label>
//   <label className='radio-label'>
//   <input type="radio" onChange={handleChanges} name="celebration" value="no" checked={formData.celebration === "no"} className='radio-large' /> No
//   </label>
// </div>

const navigate =useNavigate();

 const [formData,setFormData] = useState({
  fname:"",
  phoneNumber:"",
  date:"",
  time:"",
  guest:"",
  area:"Terrace",
  celebration:"no",
  occation:"",
  arrange:""
 });

 const [errors,setErrors] = useState({})

 const validationScheama = Yep.object({
    fname: Yep.string().required("Name is required"),
    phoneNumber: Yep.string().matches(/^\d{10}$/,"Phone nuber must 10 digits").required("Phone number is required"),
    date:Yep.date().required("Date is required"),
    time:Yep.string().required("Time is required"),
    guest:Yep.number().required("Number of guests is required").min(1,"At leats there should be a one guest").max(10,"Maximum number for one table is 10"),
    area:Yep.string().required("area is required"),
    arrange:Yep.string("Enter Valid details")

 })

 const handleChanges = (e)=>{
  const name = e.target.name;
  const value = e.target.value;

    setFormData({
      ...formData,
      [name]:value
    });

 }

 const handelSubmitt = async(e) =>{
    e.preventDefault();
     try {
      await validationScheama.validate(formData,{abortEarly:false})
      // console.log("formsubmited",formData)
      navigate("/")
     } catch (error) {
        // console.log(error)
        const validationError = {}
        error.inner.forEach((err)=>{
            validationError[err.path] = err.message;
        })
        setErrors(validationError);
     }
     
      
    
 }

  const buttonName = "Reserve a Table"
  return (
    <>  
    
    <div className='flex flex-col h-[150vh] items-center bg-slate-400 p-5 m-3' >

        <div className='p-5 my-4 rounded-md shadow-md bg-slate-600 shadow-slate-900'>
           <h1 className='font-bold text-[60px]'>Make Reservasion</h1>
        </div>

      <div className='mt-5 '>
        <form action="" method='POST' className='z-50' >

          <div className='flex justify-center gap-5 mb-10'>

          <div className='w-full'>
          <input type="text" onChange={handleChanges} placeholder='Name' id="fullName" name='fname' value={formData.fname} className='w-full h-[8vh] Namefeild '/>
          {errors.fname && <p className='error-message'>{errors.fname}</p>}
          </div>

          <div className='w-full'>
          <input type="tel" onChange={handleChanges} id="phoneNumber" placeholder=' mobile number' name='phoneNumber' value={formData.phoneNumber} className='w-full h-[8vh] Namefeild'/>
          {errors.phoneNumber && <p className='error-message'>{errors.phoneNumber}</p>}
          </div>

          </div>

        <div className='flex justify-between gap-5 mb-10'>
          <div className='w-full'>
        <input type="date" onChange={handleChanges} placeholder='date' name='date' value={formData.date} id="date" className='w-full h-[8vh] Namefeild'/>
        {errors.date && <p className='error-message'>{errors.date}</p>}
          </div>
          <div className='w-full'>
        <input type="time" onChange={handleChanges} placeholder='time' name='time' value={formData.time} className='w-full h-[8vh] Namefeild'/>
        {errors.time && <p className='error-message'>{errors.time}</p>}
        </div>
        </div>

        
      <div className='flex justify-between gap-5 mb-10'>
      <div className='w-full'>
        <input type="number" placeholder='Number of Guests' onChange={handleChanges} name='guest' value={formData.guest} id="numberOfGuests" min={1} max={10} className='w-full h-[8vh] Namefeild'/>
        {errors.guest && <p className='error-message'>{errors.guest}</p>}
      </div>
      <div className='w-full'>
        <select name="area" id="area" onChange={handleChanges} value={formData.area} className='w-full h-[8vh] Namefeild'>
          <option value="Terrace">The Terrace</option>
          <option value="Lounge">The Lounge</option>
          <option value="Panorama">The Panorama</option>
        </select>
        {errors.area && <p className='error-message'>{errors.area}</p>}
        </div>
      </div>

           <div className='flex items-center justify-between gap-1 mb-10'>
            <div className='flex flex-col justify-between gap-3 '>
            <label htmlFor='celebration' className='text-[30px] text-blue-600'>Are your reserving for celebration?</label>
            <p className='text-[20px] font-serif text-blue-600 mb-2'>Pick  one</p>


            <div className="radio-container">

              <div className='flex items-center'>
              <label className='radio-label'> Yes </label>
              <input type='radio' onChange={handleChanges} name="celebration" value="yes" checked={formData.celebration === "yes"} className='radio-large' />
              </div>
                
                 <div className='flex items-center'>
                 <label className='radio-label'>No </label>
                 <input type="radio" onChange={handleChanges} name="celebration" value="no" checked={formData.celebration === "no"} className='radio-large' />
                 </div>
             
            </div>
            
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
            {errors.arrange && <p className='error-message'>{errors.arrange}</p>}
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