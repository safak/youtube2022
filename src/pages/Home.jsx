import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/chat'

const Home = () => {
  return (
    <div className='home'>
        <div className="container">
            <Sidebar/>  
            <Chat/>
        </div>
    </div>
  )
}

export default Home