import React from 'react'
import {Route,Routes } from 'react-router-dom';
import Home from './Home';
import Libraly from './Libraly';


const Dashboard = () => {
  return (
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/libraly" element={<Libraly/>}/>
  </Routes>
  )
}

export default Dashboard