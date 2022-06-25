import { Route, Routes } from "react-router-dom";
import React from 'react'
import Home from "./pages/Home";
import Navbar from './components/Navbar'

const menu = require('./data/menu.json')

const App = () => {

  console.log(menu)
  return (
   <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/'  element={<Home></Home>}></Route>
      </Routes>
   </>
  )
}

export default App