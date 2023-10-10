import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">ShitBox Chat</span>
      <div className="user">
        <img src="" alt="" />
        <span>Timmy</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar