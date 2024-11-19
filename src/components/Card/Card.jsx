import{ useContext } from 'react'
import colorstar from '../../assets/star.png'
import nonColorstar from '../../assets/starnoncolor.png'
import { FaCartArrowDown } from "react-icons/fa";
import {cartContext} from '../../context/CartContext'
import './Card.css' 

function Card(props) {
 const {dispatch} = useContext(cartContext)
  return (
    <>
    <div className='  mt-5 ml-5 w-[80%] bg-gray-300 rounded-[10px] h-[350px] hover:shadow-lg hover:shadow-gray-700  transition transform hover:scale-105 duration-300 flex flex-col justify-between shadow-lg shadow-gray-500'>

        <div className="image rounded-[10px]">
            <img src={props.imageUrl} alt="food photo" className='rounded-t-[10px]  image-class' />
        </div>

        <div className="flex justify-between p-1 title">
                <h1 className='font-serif text-2xl font-bold line-clamp-1'> 
                  {props.title}
                </h1>
                <div className='flex'>
                
                <img src={colorstar} alt="Description of image" className='h-4 '/>
                <img src={colorstar} alt="Description of image" className='h-4 '/>
                <img src={colorstar} alt="Description of image" className='h-4 '/>
                <img src={nonColorstar} alt="Description of image" className='h-4 '/>
                <img src={nonColorstar} alt="Description of image" className='h-4 '/>
            
                </div>
        </div>

        <div className='w-full p-1 overflow-auto description'>
            <p className=''>{props.description}</p>
        </div>

        <div className='flex items-center justify-between p-1 text-orange-500 price'>
          ${props.price}
         <button className='flex items-center p-2 rounded-md shadow-md bg-sky-600 hover:shadow-xl active:bg-sky-800' onClick={()=> dispatch({type:"Add",product: {
            menuItemId: props.id, // Pass a unique ID
            title: props.title,
            price: props.price,
            imageUrl: props.imageUrl
        }})}> <FaCartArrowDown className='w-6 '/> Add to Cart </button>
        </div>
        
    </div>
    
  
    </>
    
  )
}

export default Card