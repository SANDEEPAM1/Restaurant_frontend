import React from 'react'
import logo from '../../assets/logo.png'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import routes from '../../Routes/UrlRoutes'

function NavBar() {
  return (
    <>
    <div className="  flex w-[100%] justify-between items-center h-[10vh] bg-[#c1c19d] ">
        <div className="ml-[5%] w-[10%] text-center logo">
            <img src={logo} alt="logo" className='h-[8vh]' />
        </div>
        <div className="links mr-[3%] w-[90%] flex justify-center">
            {routes.map((route, index)=>{
                return <NavLink to={route.path} key={index} className='link'>{route.page}</NavLink>
            })}
            
            
        </div>
    </div>
    </>
  )
}

export default NavBar