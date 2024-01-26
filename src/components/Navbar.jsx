import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <>
   
    <nav className='main-conatiner'>
      <div className='nav-logo'>
      <img src="/images/brand_logo.png" alt='#'/>
      </div>
      <div className='info'>
        <a href="">Menu</a>
        <a href="">Location</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
      <div className='login'>
       <button>Login</button>
      </div>
    </nav>
    </>
  
  )
}

export default Navbar;