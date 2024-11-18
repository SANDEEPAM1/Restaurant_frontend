import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import Button from '../Button/Button'
import './Log_in.css'
import {useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { FaRegEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5"
import axiosInstance from '../../Utility/api'
import { jwtDecode } from 'jwt-decode'



const Log_in = () => {
    const buttonName = "Sign in "
    const navigate = useNavigate();
    const {handleCloseLogin, isLoginVisible} = useAuth();
    const [passwordIcon, setPasswordIcon] = useState('password');

    const [loginData,setLoginData] = useState({
        username:"",
        password:""

    })

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
        var response = await axiosInstance.post("/api/Auth/login",loginData);
        if(response.status !== 200){
            console.log("logging unsuccesfull");
            navigate('/')
        }
        
        alert("login successful with user:")
       // console.log(response)
        const token = response.data.token;
        localStorage.setItem('jwt',token);

        const decodedJwt = jwtDecode(token)
        const role = decodedJwt.role;
        console.log(role)
        
        switch(role){
            case 'Customer':
                navigate('/');
                break;
            case 'Admin':
                navigate('/Admin')
                break;
            case 'Chef':
                navigate('/kitchen')
                break;
            case 'Delivery':
                navigate('/delivery')
                break;
            case 'Waiter':
                navigate('waiter')
                break;
            default:
                navigate('/')
        }
        
        } catch (error) {
           console.error('Login failed', error.response?.data || error.message) 
        }
        handleCloseLogin();
    }

const handleLoginData = (e) =>{
    
    const name = e.target.name;
    const value = e.target.value;

    setLoginData(
        {
            ...loginData,
            [name]:value
        }
    )

}
const handlePasswordIcon = (e) =>{
    e.preventDefault();
        if(passwordIcon === 'password'){
            setPasswordIcon('text') 
        }else{
            setPasswordIcon('password')
        }
}
    

    //bg-gradient-to-b from-black/90 via-black/30 to-black/60
  return (
        <>
        
        {  
        isLoginVisible ?

            (
            <>
            <div className='overlay' onClick={handleCloseLogin}></div>
            
            <div className='popup-container '>
            <div className='border-[4px]  border-red-700 bg-[#d1b891] w-[50vh] h-[60vh] z-10'>

                <div className='flex flex-col-reverse items-center gap-3 mt-2'>
                    <h1 className='text-[5vh]'>Welcome Back</h1>
                    <img src={logo} alt="logo" className='w-[20%]'/>
                </div>

                <div className=' singupForm'>
                   <form action="" method='POST' className='z-10 flex flex-col items-center w-full gap-4 mt-5'>
                        <div className='login'>
                            <input type="text" placeholder='UserName' name='username' value={loginData.username} onChange={handleLoginData}/>
                        </div>
                        <div className='login'>
                            <input type={passwordIcon} placeholder='Password' name='password' value={loginData.password}  onChange={handleLoginData}/>
                            <button className='absolute right-3 top-4' onClick={handlePasswordIcon}> {passwordIcon==='password' ?<IoEyeOff className='w-7'/> :<FaRegEye className='w-7'/> }</button>
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

export default Log_in