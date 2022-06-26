import { Route, Routes } from "react-router-dom";
import React from 'react'
import Home from "./pages/Home";
import Navbar from './components/Navbar'
import Dashboard from "./pages/Dashboard";
import Loading from "./pages/Loading";
import SubmitMenu from "./components/SubmitMenu";
import Orders from "./components/Orders";
import Promos from "./components/Promos";
import EditMenu from "./components/EditMenu";

const menu = require('./data/menu.json')

const App = () => {

  console.log(menu)
  return (
   <>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/loading' element={<Loading></Loading>}></Route>
        <Route path='/menu' element={<EditMenu></EditMenu>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/promos' element={<Promos></Promos>}></Route>
        <Route path='/editmenu' element={<SubmitMenu></SubmitMenu>}></Route>
      </Routes>
   </>
  )
}

export default App