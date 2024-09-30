import React from 'react'

function Button({name,onClick}) {
  return (
   
        <button className='w-40 h-12 mx-auto text-xl text-white border-2 border-yellow-300 rounded-md hover:shadow-xl hover:bg-yellow-400 hover:border-black hover:text-black hover:border-[3px] active:bg-yellow-200' onClick={onClick}>{name}</button>
    
  )
}
 
export default Button