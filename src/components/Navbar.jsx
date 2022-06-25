import React from 'react'
import grabLogo from '../assets/grab-logo.svg'
import BsFillBagFill, { BsBagFill } from 'react-icons/bs'

const styles = {
    container: `flex item-center justify-between p-6 w-full  px-8`,
    logoContainer: `w-28 flex items-center`, 
    buttonCart: "text-[#009c49] pr-4 border-white"
    
}

function text(){
    console.log("lol")
}

const Navbar = () => {
  return (

    <div className={styles.container}>
        <div  className={styles.logoContainer}>
            <img src={grabLogo}></img>
        </div>
        <div>
            {/* <button className={styles.buttonCart}><BsBagFill></BsBagFill></button> */}
            <button className="text-white bg-black w-30 px-6 py-2 rounded-xl" onClick={() => text()}>Login</button>
        </div>
    </div>
  )
}

export default Navbar