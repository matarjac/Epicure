import React, { useState, ChangeEvent } from "react";
import {useNavigate, useNavigation} from 'react-router-dom';
import Navbar from "../navbar/Navbar";
import "./signInPage.css";

const SignInPage: React.FC = ()=>{

    const [isLoginAvailable, setIsLoginAvailable] = useState(false);
    const navigation = useNavigate();
    const handleInputChange = (e:ChangeEvent<HTMLInputElement>)=>{
        console.log(e)
    }

    return(
        <>
            <Navbar/>
            <div className='input-containers' id="sign-in-form-container">
                <h1>SIGN IN</h1>
                <div id="inputs-sign-in-container">
                    <input type="text" placeholder="Email address" onChange={(e)=>handleInputChange(e)}/>
                    <input type="text" placeholder="Password" onChange={(e)=>handleInputChange(e)}/>
                </div>
                <div id="log-in-buttons-container">
                    <button id="log-in-btn">LOGIN</button>
                    <button id="forgot-password-btn">Forgot password?</button>
                </div>
                 <div id="hr-line-div-sign-in">
                     <span>or</span>
                 </div>
                 <button id="sign-up-btn" onClick={()=>navigation("/sign-up")}>SIGN UP</button>
            </div>
        </>
    )
}

export default SignInPage;

function setState(arg0: boolean): [any, any] {
    throw new Error("Function not implemented.");
}
