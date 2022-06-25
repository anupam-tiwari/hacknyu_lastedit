import React from 'react'
import loadingGif from '../assets/Loading.gif'
import Navbar from '../components/Navbar'

const Loading = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className='flex justify-center items-center h-screen'>
        
        <div className='w-20'>
             <img src={loadingGif}></img>
        </div>
        
    </div>
    </div>
    
    
  )
}

export default Loading