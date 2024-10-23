import React from 'react'
import './Hero.css'
import Button from '../Button/Button'


const Hero = () => {
  const buttonName = "Login"
  return (
    <>
    <div className=" bg-[url('/bgpicture.jpg')] h-[90vh] bg-cover relative " >
    {/* overlay */}
        <div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-black/90 via-black/30 to-black/60'>
           <div className='relative flex flex-col items-center justify-center h-full'>
              <h1 className='text-white header'>  Where Fresh Meets Flavor, and Every Bite is Delicious</h1>
              <div className='z-10  absolute bottom-[33vh] '>
              <Button name={buttonName}/>
              </div>
             

              <p className='text-white paragraph bottom-[5vh] text'>WELCOME TO <span className='text-[6vh] text-pink-600 block font-bold'>FOODHAVEN</span> </p>
              
           </div>
        </div>
    </div>
    </>
  )
}

export default Hero