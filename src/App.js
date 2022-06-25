import { Route, Routes } from "react-router-dom";
import React from 'react'
import Home from "./pages/Home";
import Navbar from './components/Navbar'
import Dashboard from "./pages/Dashboard";
import Loading from "./pages/Loading";

const menu = require('./data/menu.json')

const App = () => {

  console.log(menu)
  return (
   <>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/loading' element={<Loading></Loading>}></Route>
      </Routes>
   </>
  )
}

export default App