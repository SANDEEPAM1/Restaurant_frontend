import React from 'react'
import buns from '../../assets/plateFrame.jpg'

function Card() {
  return (
    <div className='mx-auto my-auto mt-10 border-black ml-7'>
    <div className='  w-[20%] bg-gray-300 rounded-[10px] h-[350px] hover:shadow-lg hover:shadow-gray-700  transition transform hover:scale-105 hover:mt-2 flex flex-col justify-between shadow-lg shadow-gray-500'>
        <div className="max-w-[60%]image rounded-[10px]">
            <img src={buns} alt="food photo" className='rounded-t-[10px] ' />
        </div>
        <div className="flex justify-between max-h-[10%] ">
                <h1 className='font-serif text-2xl font-bold '> 
                  Chicken Roles
                </h1>
                <h2>Rating Feild</h2>
                
        </div>
        <div className=' description max-h-[20%]  w-full overflow-auto'>
            <p className='max-h-[]'>this is a nutritional food that can use in breakfast as a result people helo this sa</p>
        </div>
        <div className='price max-h-[10%]'>
          $10
        </div>
    </div>
    <br/>
    <br />
    </div>
  )
}

export default Card