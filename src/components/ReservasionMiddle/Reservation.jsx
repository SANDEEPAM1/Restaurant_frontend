import React from 'react'
import Border from '../Border/Border'
// import outdoor from '../assets/outdoor.jpg'
// import indoor from '../assets/indoor.jpg'
// import viewpoint from '../assets/viewpoint.jpg'
import './location.css'

function Reservation() {
  return (
    <>
    <div className='h-[50vh] text-center bg-[url("/reserveTable.jpg")] w-full bg-cover bg-center relative'>
    <div className='absolute inset-0 flex flex-col items-center bg-gradient-to-b from-black/60 via-black/35 to-black/50'>
      <h1 className='h-[20vh] text-[100px] font-bold text-white'>Reserve a Table</h1>
      <p className='font-bold text-gray-400 text-[25px] w-[60%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, libero nobis. Architecto, dignissimos sit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, explicabo harum provident quisquam eaque vel iure dignissimos ratione est eius tempora impedit. Odit ratione consectetur doloribus nisi necessitatibus quia atque.

      </p>
    </div>
    </div>
      <Border/>
      <div className='flex flex-col items-center bg-black'>
        <div className='flex flex-col w-[70%] items-center text-black bg-lime-950 font-bold text-[100px] mt-8'>
            <h1>Find your Spaces</h1>
        </div>
      <div className="flex items-center justify-center h-[60vh] gap-4 p-5 text-white  rounded-sm locations">
        <div className="flex flex-col outdor w-[30%] h-[50vh] pt-4 items-center bg-[url()] ">
          <img src={outdoor} alt="" className=' images' />
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto placeat excepturi iure eos voluptatum ut eum et erere</h1>
        </div>

        <div className="flex flex-col indoor w-[30%] h-[50vh] pt-4 items-center">
        <img src={indoor} alt="" className='images' />
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, exercitationem.</h1>
        </div>

        <div className="flex flex-col viewport w-[30%] h-[50vh] pt-4 items-center">
          <img src={viewpoint} alt="" className='images' />
          <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro hic odit itaque eius explicabo nulla, officia beatae aspernatur inventore ut dolore?</h1>

        </div>

      </div>
      </div>
    </>
  )
}

export default Reservation