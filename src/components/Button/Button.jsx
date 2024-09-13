import React from 'react'

function Button({name}) {
  return (
   
        <button className='w-40 h-12 mx-auto text-xl border-2 border-yellow-300 rounded-md hover:shadow-xl hover:bg-yellow-400 hover:border-black '>{name}</button>
    
  )
}
 
export default Button