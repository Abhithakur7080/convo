import React from 'react'
import userLogo from '../assets/user.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="user">
            <img src={userLogo} alt="user logo" />
            <span>Abc</span>
            <button>logout</button>
        </div>
    </div>
  )
}

export default Navbar