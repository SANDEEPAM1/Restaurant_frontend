import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import Button from '../Button/Button'
import './Sign_up.css'
import { Navigate, useNavigate } from 'react-router-dom'
import * as Yep from 'yup'


const Sign_up = ({isVisible,onClose}) => {
    const buttonName = "Create"
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username:"",
        password:"",
        confirmPasword:"",
        email:""

    });

    const [errors,setErrors] =useState({})

    const validationScheama = Yep.object({
        username:Yep.string().required("username is required").min(4,"At least 4 characters"),
        password:Yep.string().required("password is required")
        .min(8,"Password must be at least 8 characters")
        .matches(/[!@#$%^&*(),.?":{}|<>]/,"Password must contain at least one symbel")
        .matches(/[0-9]/,"Password must contain at least one number")
        .matches(/[A-Z]/,"Password must contsin at least one uppercase letter")
        .matches(/[a-z]/,"Password must contain at least one lowercase letter"),
        confirmPasword:Yep.string().oneOf([Yep.ref("password")],"Passwords must match")
        .required("Confirm password is not required"),
        email:Yep.string().required("email is required").email("Invalid email")


    })

    const handleSubmit = async(e)=>{
        e.preventDefault();

        try {
            await validationScheama.validate(formData,{abortEarly:false})
            navigate('/');
        } catch (error) {
            const validationError = {}
            error.inner.forEach((err)=>{

                validationError[err.path] = err.message
    
            })
            setErrors(validationError)
            
        }



        
    }

    const handleFormData = (e)=>{
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [name]:value
        })
        
    }

    //bg-gradient-to-b from-black/90 via-black/30 to-black/60
  return (
        <>
        
        {  
        isVisible ?

            (
            <>
            <div className='overlay' onClick={onClose}></div>
            
            <div className='popup-container '>
            <div className='border-[4px]  border-red-700 bg-[#d1b891] w-[50vh] h-[75vh] z-10'>

                <div className='flex flex-col-reverse items-center gap-3 mt-2'>
                    <h1 className='text-[5vh]'>Create an Account</h1>
                    <img src={logo} alt="logo" className='w-[20%]'/>
                </div>

                <div className=' singupForm'>
                   <form action="" method='POST' className='flex flex-col items-center w-full gap-4 mt-5'>
                        <div className=' signup'>
                            <input type="text" placeholder='UserName' name='username' value={formData.username} onChange={handleFormData}/>
                            {errors.username && <p className='error-message'>{errors.username}</p>}
                        </div>
                        <div className='signup'>
                            <input type="text" placeholder='Password' name='password' value={formData.password} onChange={handleFormData}/>
                            {errors.password && <p className='error-message'>{errors.password}</p>}
                        </div>
                        <div className='signup'>
                            <input type="text" placeholder='Confirm Pasword' name='confirmPasword' value={formData.confirmPasword} onChange={handleFormData}/>
                            {errors.confirmPasword && <p className='error-message'>{errors.confirmPasword}</p>}
                        </div>
                        <div className='signup'>
                            <input type="email" placeholder='Email' name='email' value={formData.email} onChange={handleFormData}/>
                            {errors.email && <p className='error-message'>{errors.email}</p>}
                            
                        </div>
                                <div className='mt-4'>
                                <Button
                                name={buttonName}
                                onClick={handleSubmit}
                                />
                                </div>
                                
                   </form> 
                </div>     

            </div>
        
        </div>
        </>
        ):null
        
        }
        
        
        </>
  )
}

export default Sign_up