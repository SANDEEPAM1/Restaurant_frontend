import React from 'react'
import Card from '../Card/Card'
import cardInfor from '../../components/TestData/TestData.jsx'
import './CardMount.css'

function CardMount() {

    //  const itemList = cardInfor.map((itme)=>{
    //     return(
    //         <Card
    //           imageUrl={itme.imageUrl}
    //           titel ={itme.titel}
    //           description ={itme.description}
    //           price = {itme.price}
    //         />
    //     )
    //  })
    
  return (
    <>
    <div className='mx-3 overflow-auto cardContainer'>
    {cardInfor.map((itme)=>{
        return(
            <div className='card'>
            <Card
              imageUrl={itme.imageUrl}
              titel ={itme.titel}
              description ={itme.description}
              price = {itme.price}
            />
            </div>
        )
     })}
    </div>
        
    </>
  )
}

export default CardMount