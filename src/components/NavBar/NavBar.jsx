import React from 'react'
import logo from '../../assets/logo.png'
import './NavBar.css'

function NavBar() {
  return (
    <>
    <div className=" flex w-[100%] justify-between items-center h-[13vh] bg-[#c1c19d]">
        <div className="ml-[10%] w-[20%] text-center logo">
            <img src={logo} alt="logo" className='h-[12vh]' />
        </div>
        <div className="links mr-[10%] w-[80%] flex justify-end">
            <a href='/' className='link'>Home</a>
            <a href='/'className=' link'>Menu</a>
            <a href='/' className='link'>Online Order</a>
            <a href='/' className='link'>Offers</a>
            <a href='/'className='link'>Catering</a>
        </div>
    </div>
    </>
  )
}

export default NavBar