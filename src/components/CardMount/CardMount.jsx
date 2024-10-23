import React from 'react'
import Card from '../Card/Card'

import './CardMount.css'

function CardMount(props) {

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
    {props.data.map((itme,index)=>{
        return(
            <div className='card'>
            <Card
              key={index}
              imageUrl={itme.imageUrl}
              title ={itme.title}
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