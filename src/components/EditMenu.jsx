import React from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import MenuSummary from './MenuSummary'

const EditMenu = () => {
  const [menu, setMenu] = useState('')

  const getMenu = "https://grab-pos-server.herokuapp.com/pos/sendmenu"
  //const getMenu = "http://localhost:4000/pos/sendmenu"
  const updateMenu = ""; 

  useEffect(() =>{
    GetData()
  }, [])

  async function GetData(){
    await axios.get(getMenu).then((response) => {
      setMenu(response?.data.sections)
    })
  }

  console.log(menu)
  return (
    <div>
        <Navbar></Navbar>
        <hr></hr>
        <div className='flex justify-between p-10'>
        <div className='flex text-4xl'>Menu</div>
        </div>
        <div className='px-10 flex '>
        {menu && <div className='p-10 w-[60%]  border-2 border-gray hover:drop-shadow-xl drop-shadow-md rounded-3xl'>
          {menu.map((section) => (
          <div>
            <div className='text-2xl font-bold py-3'>{section.name}</div>
            <div className='flex'>{section.categories.map((category) => (<div >
              <div className='text-xl py-2'>{category.name}</div>
              <div className='flex'>{category.items.map((items) => (
                <div className='px-2'>
                  <div>
                    <img src={items.photos} className="w-40 h-40 rounded-lg drop-shadow-md"></img>
                  </div>
                  <div className='flex justify-center pt-2'>{items.name}</div>
                  <div className='flex justify-center pt-2'>${items.price}</div>
                </div>
              ))}

              </div>
            </div>))}</div>
          </div>
          ))}
        </div>}
        <div className='p-10 w-[40%]'>
          <div className='font-bold'>Manage Menu</div>
          {/* <div className='flex justify-center'>
          <img className="w-80 h-80" src='https://images.edrawmax.com/images/knowledge/line-graph-1-what-is.jpg'></img>
          </div> */}
          <MenuSummary></MenuSummary>

          

          </div>
        </div>
        
       
    </div>
  )
}

export default EditMenu