import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import myImage from "../assets/newplant.png"

const Body = () => {
  return (
    <div className=" bg-green-50">
    
    <Navbar/>
    <div className="w-full flex justify-center">
        <img src={myImage} alt="Banner" className="max-w-full h-auto" />
      </div>
    <Outlet/>
    </div>
  )
}

export default Body