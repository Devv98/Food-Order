import React from 'react'
import { useState } from 'react'
import { assets } from '../assets/assets'
import './LoginPopup.css'
 
const LoginPopup = ({setShowlogin}) => {

    const[currState, setCurrState] = useState("Login")

  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className='login-popup-title'>
                <h2>{currState}</h2>
                <img onClick={()=>setShowlogin(false)} src={assets.cross_icon} alt=''/>
            </div>
            <div className='login-popup-inputs'>
                {currState==='Login' ? <></>: <input type='text' placeholder='your Name' required />}
                <input type='email' placeholder='your email' required />
                <input type='password' placeholder='Password' required/>
            </div>
            <button>{currState==='Sign Up' ? "Create an account" : "Login"}</button>
            <div className='login-popup-condition'>
                <input type='checkbox' required/>
                <p>I agree</p>
            </div>
            {currState==="Login" ? 
            <p>Create an account? <span onClick={() => setCurrState("Sign Up")}>Click Here</span> </p>  
            : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login Here</span></p>  
        }
        </form>
    </div>
  )
}

export default LoginPopup
