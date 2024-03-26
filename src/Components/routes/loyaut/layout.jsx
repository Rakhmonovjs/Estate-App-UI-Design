import React from 'react'
import Navbar from '../../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="loyaut">
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='content'>
        <Outlet />
      </div>
      
    </div>
  )
}
