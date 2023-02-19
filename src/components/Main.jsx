import React from 'react'
import bgimg from '../assets/main.jpg'

const Main = () => {
  return (
    <div className='w-full h-[600px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[600px] bg-gradient-to-b from-grey'></div>
            <img className='w-full h-full object-cover' src={bgimg}></img>

            <div className='absolute w-80 top-[30%] left-[5%] md:left-[20%] p-4 md:p-8 bg-white rounded'>
                <h2 className='text-1xl text-black'>Start Blending</h2>
                <h1 className='text-3xl md:text-5xl font-bold text-black'>Meet New People</h1>
                 <div className='my-4'>
                     <button className='border bg-[#009c49] text-white border-gray-300 py-2 px-5 rounded-lg w-full' onClick={() => (console.log("wowo"))}>Search</button>
                 </div>
                 <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'></p>
            </div>
            
        </div>
    </div>
  )
}



export default Main