import React, { useContext } from 'react'
import logo from '../../assets/logo.png'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { cartContext } from '../../context/CartContext';



function Footer() {
  const {cart} = useContext(cartContext)
  console.log("cart from footer",cart)
  return (
    <>
    <div className='bg-black footerContainer'>
      
         <div className="text ">
          <img src={logo} alt="" className='h-[20vh]'/>
          <div className='text-[6vh] text-pink-600 block font-bold'> FOOD HEAVEN</div>
          <h1 className='font-bold text-white'> Experience the perfect blend of exquisite flavors and captivating ambiance at our restaurant. Savor every moment with exceptional dishes crafted to perfection and live music that soothes your soul. Enjoy an unforgettable dining experience today!
            
          </h1>
         </div>
         <div className="flex flex-col items-center justify-center menu">
            <ul className='flex flex-col justify-between font-bold text-white'>
              <a href='/'>Home</a>
              <a href='/menu'>Online Order</a>
              <a href='/reservation'>Reservasion</a>
              <a href='/offers'>Offers</a>
              <a href='/gallary'>Galary</a>
            </ul>
         </div>
         <div className='flex flex-col justify-center gap-5'>
         <div className=" max-h-[150px] flex items-start gap-3 pt-8 socialmedia">
        <div className='h-[70px]'> <a href=''><FaFacebook className='text-white h-[50px] w-[50px] transition transform hover:scale-110 duration-200 ficon' /></a></div>
        <div className='h-[70px]'> <a href=''><FaInstagramSquare className='text-white h-[50px] w-[50px] transition transform hover:scale-110 duration-200 iicon' /></a></div>
        <div className='h-[70px]'> <a href=''>< FaTwitter className='text-white h-[50px] w-[50px] transition transform hover:scale-110 duration-200 ticon' /></a></div>
        <div className='h-[70px]'> <a href=''>< FaYoutube className='text-white h-[50px] w-[50px] transition transform hover:scale-110 duration-200 yicon' /></a></div>
        <div className='h-[70px]'> <a href=''>< FaLinkedin className='text-white h-[50px] w-[50px] transition transform hover:scale-110 duration-200 licon' /></a></div>
        </div>
        <div className="text-white contact">
          <h1 className='text-2xl'>Contact Us:</h1>
          <ul className='mt-5 ml-5'>
          <li><h2>+94 716164084</h2></li>
          <li><h2><a href="" className='text-base'>foodheaven@gmail.com</a></h2></li>
          </ul>
         </div>
         </div>
    </div>



    </>
  )
}

export default Footer