import React from 'react'
import "./styles/Home.css"

const Home = () => {
  return (
    <div className='container'>
        <div className='c1'></div>
        <div className='c2'></div>
        <div className='c3'></div>

        <div className='top'>
            <div className='left'>
                <img className='img' src= "./images/spot2.png" alt="" />
                <h2 className='spt'>Spotify</h2>
            </div>
            <nav className='link'>
              <a className='a' href="">Premium</a>
              <a className='a' href="">Help</a>
              <a className='a' href="">Download &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</a> 
              <a className='a' href="">Sign up</a>
              <a className='a' href="http://localhost:5173/login">Log In</a>
            </nav>   
        </div>
        <div className='text2'>
          <h1>Music for everyone.</h1>
          <p>Millions of songs. No credit card needed.</p>
          <button className='bt'>GET SPOTIFY FREE</button>
          
          </div>
    </div>
  )
}

export default Home