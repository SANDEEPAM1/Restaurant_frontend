import React from 'react'
import testData from '../TestData/TestMenuFilterData'
import MenuFilterCard from './MenuFilterCard'
import { useState, useContext } from 'react'
import { CatagoryContext } from '../../context/CatagoryContext'

const MenuFilterContainer = () => {

    const {selectCatagory,setSelectCatagory} = useContext(CatagoryContext)

const handleCatagory = (catagory) =>{
        setSelectCatagory(catagory);
}

  return (
    <>
    <div className='w-full h-[10vh] text-black text-center bg-green-600'>
        <h1 className='text-[8vh] font-extrabold'>Find Your Meal</h1>
    </div>
    <div className='flex w-full p-3 bg-green-600 justify-evenly h-[30vh] pt-[5vh]'>
        {
           testData.map((element,index)=>{
            return (
                <MenuFilterCard
                key={index}
                image={element.image}
                title={element.name}
                onClick={()=>handleCatagory(element.catagory)}
                />
            )
           }) 
        }
    </div>
    </>
  )
}

export default MenuFilterContainer