import React from 'react';
import Navbar from '../navbar/Navbar';
import './signUp.css';

export default function SignUpPage() {
  return (
    <>
        <Navbar/>
            <div id="sign-in-form-container">
                <h1>SIGN UP</h1>
                <div  id="inputs-sign-in-container">
                    <input type="text" placeholder='First name' />
                    <input type="text" placeholder='Last name' />
                    <input type="email" placeholder="Email address" />
                    <input type="text" placeholder="User name" />
                    <input type="password" placeholder="Password" />
                </div>
                 <button className='sign-up-in-page' id="sign-up-btn">SIGN UP</button>
            </div>
        </>
  )
}
