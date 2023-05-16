import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'
import Logo from "../images/logo.jpg"

function Nav() {
  return (
    <div className='navbar'>
      <div className='logo'><img src={Logo} alt='' className='ibolg'/></div>
      <div className='nav-menu'>
      <Link className='link' to="/">Home</Link>
      <Link className='link' to="/Crop">Crop</Link>
      <Link className='link' to="/Animal">Animal</Link>
      <Link className='link' to="/Apiary">Apiary</Link>
      <Link className='link' to="/About">About</Link>
      </div>
    </div>
  )
}

export default Nav
