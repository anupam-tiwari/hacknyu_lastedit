import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import app from "../assets/app.svg";
import play from "../assets/play.svg";

const Footer = () => {
  return (
    <div>
        <div className='bg-[#363a45] text-white'>
            <div className='flex justify-center p-4'><h1>Countries with GrabFood</h1></div>
            <div className='flex justify-center '><h2>Indonesia | Philippines | Thailand | Vietnam | Singapore | Malaysia | Myanmar</h2></div>
            <div className='flex justify-center  py-4'>
                <div className='px-4'><BsFacebook className='w-6 h-6'></BsFacebook></div>
                <div className='px-4'><BsInstagram className='w-6 h-6'></BsInstagram></div>
                <div className='px-4'><BsTwitter className='w-6 h-6'></BsTwitter></div>
            </div>
            <div className='flex justify-center p-10'>
                <div className='px-4'><img src={app}></img></div>
                <div className='px-4'><img src={play}></img></div>
            </div>
        </div>
    </div>
  )
}

export default Footer