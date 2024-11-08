import React from 'react'
import logo from '../../assets/logo.png'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import {routes} from '../../Routes/UrlRoutes'

function NavBar({onSignUpClick,onLoginClick}) {
  return (
    <>
    <div className="  flex w-[100%] justify-between items-center h-[10vh] bg-[#c1c19d] ">
        <div className="ml-[2%] w-[10%] text-center logo">
            <img src={logo} alt="logo" className='h-[8vh]' />
        </div>
        <div className="links  w-[70%] flex justify-center">
            {routes.map((route, index)=>{
                return <NavLink to={route.path} key={index} className={({isActive})=>(isActive? 'active-mainNav-link':'link')}>{route.page}</NavLink>
            })}
        </div>

        <div className='flex w-[20%]'>

        <div className='w-[40%]  link'>
              <button className='w-full text-xl rounded-full' onClick={onSignUpClick}>Sign Up</button>
            </div>
            
            <div className='w-[40%]  link'>
              <button className='w-full text-xl rounded-full' onClick={onLoginClick}>Sign In</button>
            </div>
        </div>

    </div>
    </>
  )
}

export default NavBar