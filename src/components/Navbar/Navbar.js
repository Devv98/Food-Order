import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import './Navbar.css'

const Navbar = ({setShowlogin}) => {
    
    const[menu, setMenu] = useState('menu')

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt='' className='logo' /></Link>
      <ul className='navbar-menu'>
          <li onClick={() => setMenu("home")} className={menu === "home" ? 'active' : ''}>Home</li>
          <li onClick={() => setMenu("menu")} className={menu === "menu" ? 'active' : ''}>Menu</li>
          <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? 'active' : ''}>Mobile-app</li>
          <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? 'active' : ''}>Contact-us</li>
      </ul>
      <div className='navbar-right'>
          <img src={assets.search_icon} alt=''/>
          <div className='navbar-search-icon'>
           <Link to='/cart'> <img src={assets.basket_icon} alt=''/> </Link>
            <div className='dot'></div>
          </div>
          <button onClick={() => setShowlogin(true)}>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
