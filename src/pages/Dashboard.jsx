import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { auth } from '../firebase'


const Dashboard = () => {

    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate()

    useEffect(() => {
        if(!user) navigate("/")
    }, [user,loading])

  return (
    
    <div><Navbar></Navbar></div>
  )
}

export default Dashboard