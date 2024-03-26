import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu.png'
import './Navbar.scss'
function Navbar () {

  const [open, setOpen] = useState(false)

  return (
    <nav>
        <div className='left'>
            <a href='/' className='logo'>
                <img src={logo} alt='' />
                <span>SeniorEstate</span>
            </a>
            <a href='/' >Home</a>
            <a href='/' >About</a>
            <a href='/' >Contact</a>
            <a href='/' >Agents</a>
        </div>
        <div className='right'>
            <a href='/' className='login' >Sign In</a>
            <a href='/' className='register' >Sign Up</a>
            <div className="menuicon">
              <img src={menu} alt='' onClick={() => setOpen((prev) => !prev)}/>
            </div>
            <div className={open ? "menu active" : "menu"}>
              <a href='/' >Home</a>
              <a href='/' >About</a>
              <a href='/' >Contact</a>
              <a href='/' >Agents</a>
              <a href='/'  >Sign In</a>
            <a href='/' >Sign Up</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar