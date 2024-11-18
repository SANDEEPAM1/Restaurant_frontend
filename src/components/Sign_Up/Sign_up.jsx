import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import Button from '../Button/Button'
import './Sign_up.css'
import { Navigate, useNavigate } from 'react-router-dom'
import * as Yep from 'yup'
import axios from 'axios'
import { useAuth } from '../../context/AuthContext'
import { FaRegEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5"


const Sign_up = () => {

    
    const buttonName = "Create"
    const navigate = useNavigate();
    const {isSignUpVisible,handleCloseSignUp} = useAuth();
    const [passwordIcon, setPasswordIcon] = useState('password');
    const [confirmPasswordIcon, setConfirmPasswordIcon] = useState('password')
    const [formData, setFormData] = useState({
        username:"",
        password:"",
        confirmPassword:"",
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
        confirmPassword:Yep.string().oneOf([Yep.ref("password")],"Passwords must match")
        .required("Confirm password is required"),
        email:Yep.string().required("email is required").email("Invalid email")


    })

    const handleSubmit = async(e)=>{
        e.preventDefault();

        try {
            await validationScheama.validate(formData,{abortEarly:false})
            const response =await axios.post('https://localhost:7298/api/Auth/register',formData)
            
            setFormData({
              username:'',
              password:'',
              confirmPassword:'',
              email:''  
            });
        
            console.log(response.status)
            setErrors({});
            alert("the account is created")
            onClose();
            navigate('/');
            
        } catch (error) {
            const validationError = {}
            
            if (error.inner && Array.isArray(error.inner)) {
                error.inner.forEach((err) => {
                    validationError[err.path] = err.message;
                });
            } else {
                console.error("Unexpected error structure:", error); // Log unexpected errors
            }
            setErrors(validationError)  
        } 
    }

    const handleFormData = (e)=>{
        
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [name]:value
        })  
    }

    const handlePasswordIcon = (e) =>{
        e.preventDefault();
            if(passwordIcon === 'password'){
                setPasswordIcon('text') 
            }else{
                setPasswordIcon('password')
            }
    }
    const handleConfirmPasswordIcon = (e) =>{
        e.preventDefault();
            if(confirmPasswordIcon === 'password'){
                setConfirmPasswordIcon('text') 
            }else{
                setConfirmPasswordIcon('password')
            }
    }


    //bg-gradient-to-b from-black/90 via-black/30 to-black/60
  return (
        <>
        
        {  
        isSignUpVisible ?

            (
            <>
            <div className='overlay' onClick={handleCloseSignUp}></div>
            
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
                        <div className='relative signup'>
                            <input type={passwordIcon} placeholder='Password' name='password' value={formData.password} className='border-none' onChange={handleFormData}/>
                            {errors.password && <p className='error-message'>{errors.password}</p>}
                           <button className='absolute right-3 top-4' onClick={handlePasswordIcon}> {passwordIcon==='password' ?<IoEyeOff className='w-7'/> :<FaRegEye className='w-7'/> }</button>
                        </div>
                        <div className='relative signup'>
                            <input type={confirmPasswordIcon} placeholder='Confirm password' name='confirmPassword' value={formData.confirmPasword} onChange={handleFormData}/>
                            {errors.confirmPassword && <p className='error-message'>{errors.confirmPassword}</p>}
                            <button className='absolute right-3 top-4' onClick={handleConfirmPasswordIcon}> {confirmPasswordIcon==='password' ?<IoEyeOff className='w-7'/> :<FaRegEye className='w-7'/> }</button>
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