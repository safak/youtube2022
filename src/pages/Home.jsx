import React from 'react'

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