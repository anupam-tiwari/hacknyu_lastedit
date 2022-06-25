import React, { useEffect } from 'react'
import grabLogo from '../assets/grab-logo.svg'
import { signInWithGoogle, auth, logout } from '../firebase'
import { getAuth, getRedirectResult, onAuthStateChanged } from 'firebase/auth'
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate} from "react-router-dom"

const styles = {
    container: `flex item-center justify-between p-6 w-full  px-8`,
    logoContainer: `w-28 flex items-center`, 
    buttonCart: "text-[#009c49] pr-4 border-white"
}


const Navbar = () => {

    const [user, loading, error] = useAuthState(auth);
    //const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    console.log(auth)
    
    useEffect(() => {
        if(loading) return
        if(user) {
            navigate("/dashboard")
        }
      }, [user, loading]);
  
  return (

    <div className={styles.container}>
        <div  className={styles.logoContainer}>
            <img src={grabLogo}></img>
        </div>
        <div>
            {!user && <button className="text-white bg-black w-30 px-6 py-2 rounded-xl" onClick={() => signInWithGoogle()}>Login</button>}
            {user && <button className="text-white bg-black w-30 px-6 py-2 rounded-xl" onClick={logout}>Logout</button>}
            
        </div>
    </div>
  )
}

export default Navbar