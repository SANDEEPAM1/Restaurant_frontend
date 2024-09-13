import React from 'react'


const Hero = () => {
  return (
    <>
    <div className="left-[] bg-[url('/bgpicture.jpg')] h-[90vh] bg-cover relative " >
    {/* overlay */}
        <div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-black/90 via-black/30 to-black/70'>
           <div className='flex flex-col items-center justify-center h-full'>
              <h1 className='text-white header'>  Where Fresh Meets Flavor, and Every Bite is Delicious</h1>
              <p className='text-white '>At [Restaurant Name], we believe that good food is the foundation of a good life. Our menu is crafted from fresh, wholesome ingredients to nourish your body and soul. Eat well, feel amazing.</p>
           </div>
        </div>
    </div>
    </>
  )
}

export default Hero