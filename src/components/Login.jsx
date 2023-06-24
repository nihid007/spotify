import React from 'react'
import "./styles/Login.css"
const Login = () => {
  return (
    <div className='container2'>
     <div className='box'>
      <header>Login</header>
      <form action="#">
        <div className='l1'>
        <label htmlFor="email">Email : <br /></label>
        <input type="email" className='em' placeholder='Enter Email'/>
        </div>
        <div className='l2'>
        <label htmlFor="email">Password : <br /></label>
        <input type="email" className='em' placeholder='Enter Password'/>
        </div>
        <div className='ck'>
        <input type="checkbox" className='ch' />  
        <label htmlFor="">Show Password</label>
        </div>
        <button className='but'>SIGN IN</button>
        <div className='t1'>
          <span>Forgot <a href="" className='user'>Username</a> / <a href="">Password</a>?</span>
        </div>
        <div className='t2'>
        <span>Don't have an account? <a href="">Sign up</a></span>
        </div>
      </form>
     </div>
    


    </div>
  )
}

export default Login