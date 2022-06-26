import React from 'react'
import { useNavigate } from 'react-router-dom'

const MenuSummary = () => {
    const navigate = useNavigate()
  return (
    <div className='p-4 '>
        <hr></hr>
        <div className='flex justify-center pt-4 font-bold'>Inventory Menu</div>
        
        <div className='py-4'>
            <div className='p-2'>Quantity of Bread left: 10 kg</div>
            <div className='p-2'>Quantity of cake left: 1 kg</div>
        </div>
        <hr></hr>
        <div className='font-bold'>Possible Sales</div>
        <div className='py-4'>
        <div className='p-2'>Bread Sales: 120 SGD</div>
            <div className='p-2'>Cake Sales: 600 SDG</div>
            <div className='p-2 font-bold'>Possible Promotion: GrabSave</div>
        </div>
        <hr></hr>
        <div>
            <img className="h-40" src='https://images.edrawmax.com/images/knowledge/line-graph-1-what-is.jpg'></img>
        <div className='p-2'>Other Inventory: 400kg </div>
            <div className='p-2'>Savings: 4000 SGD</div>
        </div>
        <hr></hr>
        <div className='flex p-4 justify-center'><button className='bg-[#009c49] text-white w-60 font-bold text-2xl rounded' onClick={()=> navigate('/editmenu')}>Edit menu</button></div>
    </div>
  )
}

export default MenuSummary