import React from 'react'
import './MenuFilter.css'


function MenuFilterCard(props) {
  return (
      <>
    
      
        <div onClick={props.onClick} className={`flex flex-col gap-2 w-[10%] h-[150px] menuFilterContainer items-center  rounded-lg  border-[1px]  ml-[2vh] shadow-lg shadow-gray-600 bg-white transition transform hover:scale-105 duration-300 ${props.isSelected ? ' border-red-700 scale-110 border-4' : 'border-gray-300'}`}>
            <img src={props.image} alt="" className='w-full h-[70%] rounded-tl-lg rounded-tr-lg border object-cover' />
            <h1 className='title text-black font-bold text-[15px]'>{props.title}</h1>
      </div>
     
      </>
  )
}

export default MenuFilterCard