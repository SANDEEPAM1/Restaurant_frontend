import React from 'react'
import buns from '../../assets/chicken.jpg'
import bun2 from '../../assets/buns.jpg'
import bun3 from '../../assets/dsds.jpg'

import './Card.css'

function Card(props) {
  return (
    <>
    
    

    <div className='  mt-5 ml-5 w-[80%] bg-gray-300 rounded-[10px] h-[350px] hover:shadow-lg hover:shadow-gray-700  transition transform hover:scale-105 duration-300 flex flex-col justify-between shadow-lg shadow-gray-500'>

        <div className="image rounded-[10px]">
            <img src={props.imageUrl} alt="food photo" className='rounded-t-[10px]  image-class' />
        </div>

        <div className="flex justify-between p-1 title">
                <h1 className='font-serif text-2xl font-bold line-clamp-1'> 
                  {props.titel}
                </h1>
                <h2>Rating Feild</h2>
                
        </div>

        <div className='w-full p-1 overflow-auto description'>
            <p className=''>{props.description}</p>
        </div>

        <div className='p-1 text-orange-500 price'>
          ${props.price}
        </div>
        
    </div>
    
  
    </>
    
  )
}

export default Card