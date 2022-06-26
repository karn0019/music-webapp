import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from './Login';


export const UnauthenticatedApp = () => {
  return (
    <div>
         <Routes>
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<LoginPage />} /> */}
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}
