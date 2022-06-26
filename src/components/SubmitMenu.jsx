import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SubmitMenu = () => {
  const [menu, setMenu] = useState('');
  const editMenuURL = "https://grab-pos-server.herokuapp.com/pos/setmenu";
  const menuNotification = "https://partner-api.stg-myteksi.com/grabfood-sandbox/partner/v1/merchant/menu/notification";
  const navigate = useNavigate()

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Il9kZWZhdWx0IiwidHlwIjoiSldUIn0.eyJhdWQiOiIyOTcyNzhjM2I3MWE0OTljOWY5ZmRhN2FmMWY2ZjEyYiIsImV4cCI6MTY1Njg4NzM3OSwiaWF0IjoxNjU2MjgyNTc5LCJpc3MiOiJodHRwczovL2lkcC5ncmFiLmNvbSIsImp0aSI6InJ5WEVRZ0tOUS1hcGwwbTZxcGR2aFEiLCJuYmYiOjE2NTYyODIzOTksInBpZCI6IjIwMTUyMzdjLTM2MDQtNGE3MC1hNzk5LTAxYjA2NTA2ZDdlNCIsInBzdCI6MSwic2NwIjoiW1wiZmExZWIyNDg5MjMwNDNjODlhNmQ5MTcwZGNlMzljNjFcIl0iLCJzdWIiOiJUV09fTEVHR0VEX09BVVRIIiwic3ZjIjoiIiwidGtfdHlwZSI6ImFjY2VzcyJ9.iJkUOYAqqCGbRz8UTdDHw1HbSlI7_zRanEQ053Yc3ycBqVnaKs9QW1hc9dhGZdatJlTGpk66rJDuFRZjvd3hRb6JNzs8XCicdnTSOkp3bU-zPu2926wgSWIbVovP254Fng4lCUdhnUfEcKdN7bYwDpxBRh8AuLpE4zSubwJp4Y7oKhZpq2Mzy4iDAq2AZ32GG484TGFUiXHQw5LQZWx1diJWq0TLGzAMYJuYEfCb0-VBX8BmHUKN-lHFo7C5lhfVT5dIrU08JNSa5e5280SZbHRcFjl40f8NfURXdVUPuMTC3H6R8l1sMf0O105ORIby8LPJSFk0qZnGiZct8YWd0w'
  }


  async function sendNotification(){
    await axios.post(menuNotification, { merchantID: "GFSBPOS-326-053" }, { headers: headers}).then(function (response) {
      console.log(response);
    })
  }

   
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
        
        <div className='flex  justify-center'><button className='bg-[#009c49] rounded-lg w-60 h-10' onClick={sendNotification}>Send Notification</button></div>
        <div className='flex  justify-center'><button className='bg-[#009c49] rounded-lg w-60 h-10' onClick={submitMenu}>Submit</button></div>

    </div>
  )
}

export default SubmitMenu