import React from 'react'
import Card from '../Card/Card'
import './CardMount.css'

function CardMount() {
     var cardInfor = [{imageUrl:'/buns.jpg',titel:"Chicken Roles",description:"made of dry chiken with excelent flaverd tomato source",price:15},
        {imageUrl:'/chicken2.jpg',titel:"Fride Rise",description:"made of dry chiken with excelent flaverd tomato source with execelent vegitables",price:20},
        {imageUrl:'/chicken2.jpg',titel:"Fride Rise",description:"made of dry chiken with excelent flaverd tomato source with execelent vegitables",price:20},
        {imageUrl:'/chicken2.jpg',titel:"Fride Rise",description:"made of dry chiken with excelent flaverd tomato source with execelent vegitables",price:20},
        {imageUrl:'/chicken2.jpg',titel:"Fride Rise",description:"made of dry chiken with excelent flaverd tomato source with execelent vegitables jklkl sfkjfk ksfjjklfj lkfsfk kfjsfjs kfsjfk kfjksfj jkfjsfj lkfjkfj",price:20},
        {imageUrl:'/buns.jpg',titel:"Chicken Roles",description:"made of dry chiken with excelent flaverd tomato source",price:15}
     ]
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
    <div className='mx-10 my-4 cardContainer'>
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