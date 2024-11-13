import React from 'react'
import { Outlet } from 'react-router-dom';
import { IoIosNotificationsOutline,IoMdMenu  } from "react-icons/io";
import { IoPerson } from "react-icons/io5"  
import { adminUrls } from '../Routes/UrlRoutes';
import { NavLink } from 'react-router-dom';
import '../components/NavBar/NavBar.css'

const Admin = () => {
  return (
    <>
    <div className="admin-pannel h-[100vh]">
        <header className='flex flex-row-reverse bg-gray-300 h-[7vh]'>
      <button> <IoMdMenu className='mx-3 my-2 text-4xl'/></button>
      <IoPerson className='mx-3 my-2 text-4xl'/>
        <IoIosNotificationsOutline className='mx-3 my-2 text-4xl'/> 
        <h1 className='mr-[600px] mt-2 font-bold text-4xl'>Admin Dashboard</h1>
        </header>

        <div className="flex main-contain ">
            <div className="sidebar w-[15%] h-[93vh] flex flex-col bg-gray-300 overflow-hidden justify-center items-center  ">
            {adminUrls.map((route, index)=>{
                return <NavLink to={route.path} key={index} className={({isActive})=>(isActive?'active-link':'link')}>{route.title}</NavLink>
            })}
            </div>

            <div className="mx-8 my-4 h-[88vh] content w-[80%] ">
                <Outlet/>
            </div>
          
        </div>
    </div>
    </>
  )
}

export default Admin