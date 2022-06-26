import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SubmitMenu = () => {
  const [menu, setMenu] = useState('');
  const editMenuURL = "https://grab-pos-server.herokuapp.com/pos/setmenu";
  const navigate = useNavigate()

   
  async function submitMenu(){
     await axios.post(editMenuURL, {
      menu: menu
    }).then(function (response) {
      console.log(response);
    })

    navigate("/menu")

  }
 

  return (
    <div className='h-screen'>
      <div className='flex justify-center pt-10 text-4xl font-bold'>Paste JSON Menu</div>
      <div className='flex justify-center h-[50%] items-end pb-10'><textarea className='w-[60%] h-[80%] rounded-lg bg-gray-100 drop-shadow-md' placeholder='paste menu here' onChange={(e) => (setMenu(e.target.value))}></textarea></div>
        
        <div className='flex  justify-center'><button className='bg-[#009c49] rounded-lg w-60 h-10' onClick={submitMenu}>Submit</button></div>

    </div>
  )
}

export default SubmitMenu