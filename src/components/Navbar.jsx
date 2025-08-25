import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearch, setCategory } from '../redux/filterSlice'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const dispatch=useDispatch()

  return (
    <>
 <div className="navbar bg-base-100 bg-green-200 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link to={"/newPlant"}>Add New Plant</Link></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
      
    </div>

  </div>
  <div className="navbar-center">
    <Link className="btn btn-ghost text-xl mx-5" to={"/"}>PlantFarm</Link>
   
  </div>
  <div className="navbar-end ">
    <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
          onChange={(e)=>dispatch(setSearch(e.target.value))}
        />
  </div>
</div>
    <div className="navbar-start px-5 my-5">
    <select
      className="select select-bordered w-40"
      onChange={(e) => dispatch(setCategory(e.target.value))}
    >
      <option disabled selected>Select Category</option>
      <option value="indoor">indoor</option>
      <option value="outdoor">outdoor</option>
      <option value="home decor">Home decor</option>
      <option value="">All</option>
    </select>
  </div>
    </>

  )
}

export default Navbar