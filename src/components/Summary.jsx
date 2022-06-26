import React from 'react'

const Summary = () => {
  return (
    <div className='p-4 '>
        <hr></hr>
        <div className='flex justify-center pt-4 font-bold'>Recent Orders Summary</div>
        
        <div className='py-4'>
            <div className='p-2'>Number of order: 103</div>
            <div className='p-2'>Number of pending orders: 54</div>
            <div className='p-2'>Number of delivered orders: 46</div>
        </div>
        <hr></hr>
        <div className='font-bold'>Sales</div>
        <div className='py-4'>
        <div className='p-2'>Gross Sales: 12,000 SGD</div>
            <div className='p-2'>Sales Offline: 6000 SDG</div>
            <div className='p-2'>Total - Discounts: 10000 SGD</div>
            <div className='p-2'>After Tax (23%): 6970 SGD</div>
        </div>
        <hr></hr>
        <div>
            <img className="h-40" src='https://thumbs.dreamstime.com/b/pie-chart-diagram-vector-icon-black-white-graphic-illustration-solid-linear-analytical-eps-107762815.jpg'></img>
        <div className='p-2'>Inventory left: 400kg </div>
            <div className='p-2'>Delivery time: 20 mins</div>
            <div className='p-2'>Ratings: ⋆ ⋆ ⋆ ⋆ </div>
        </div>
        <hr></hr>
        <div className='flex p-4 justify-center'><button className='bg-black text-white w-60 rounded'>Print Report</button></div>
    </div>
  )
}

export default Summary