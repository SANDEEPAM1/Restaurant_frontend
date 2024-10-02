import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import Button from '../Button/Button'
import './Log_in.css'
import { Navigate, useNavigate } from 'react-router-dom'


const Log_in = ({isVisible,onClose}) => {
    const buttonName = "Sign in "
    const navigate = useNavigate();

    const [loginData,setLoginData] = useState({
        username:"",
        password:""

    })

    const handleSubmit = (e) =>{
        e.preventDefault()
        navigate('/')
        console.log(loginData)
        setLoginData
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
    

    //bg-gradient-to-b from-black/90 via-black/30 to-black/60
  return (
        <>
        
        {  
        isVisible ?

            (
            <>
            <div className='overlay' onClick={onClose}></div>
            
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
                            <input type="password" placeholder='Password' name='password' value={loginData.password}  onChange={handleLoginData}/>
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