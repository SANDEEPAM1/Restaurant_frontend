import React from 'react'
import './ReservasionMiddle.css'

function ReservasionMiddle() {
  return (
    <>

<div className='flex flex-col items-center bg-black'>
        <div className='flex flex-col w-[70%] items-center text-black bg-lime-700 font-bold text-[100px] mt-8 rounded-lg'>
            <h1>Choose your Place</h1>
        </div>
      <div className="flex items-center justify-center h-[60vh] gap-4 p-5 text-white  rounded-sm locations">
        <div className="flex flex-col outdor w-[30%] h-[50vh] pt-4 items-center bg-[url('/indoor_copy.jpg')] container">
          <h1 className='mt-3 font-black text-[40px] mb-7'>The Terrace</h1>
          <h1 className='max-w-[85%] mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto placeat excepturi iure eos voluptatum ut eum et erere</h1>
          <h1 className='max-w-[85%] mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto placeat excepturi iure eos voluptatum ut eum et erere</h1>
          <h1 className='max-w-[85%] mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto placeat excepturi iure eos voluptatum ut eum et erere</h1>
        </div>

        <div className="flex flex-col indoor w-[30%] h-[50vh] pt-4 items-center bg-[url('outdoor_copy.jpg')] container">
        <h1 className='mt-3 font-black text-[40px] mb-7'>The Lounge</h1>
          <h1 className='max-w-[85%] mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto placeat excepturi iure eos voluptatum ut eum et erere</h1>
          <h1 className='max-w-[85%] mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto placeat excepturi iure eos voluptatum ut eum et erere</h1>
          <h1 className='max-w-[85%] mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto placeat excepturi iure eos voluptatum ut eum et erere</h1>
        </div>

        <div className="flex flex-col viewport w-[30%] h-[50vh] pt-4 items-center bg-[url('viewpoint_copy.jpg')] container">
        <h1 className='mt-3 font-black text-[40px] mb-7'>The Panorama</h1>
          <h1 className='max-w-[85%] mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto placeat excepturi iure eos voluptatum ut eum et erere</h1>
          <h1 className='max-w-[85%] mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto placeat excepturi iure eos voluptatum ut eum et erere</h1>
          <h1 className='max-w-[85%] mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto placeat excepturi iure eos voluptatum ut eum et erere</h1>

        </div>

      </div>
      </div>

    </>
  )
}

export default ReservasionMiddle