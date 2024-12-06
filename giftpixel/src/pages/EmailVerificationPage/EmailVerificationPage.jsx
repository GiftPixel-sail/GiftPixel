import React from 'react'
import "../../styles/EmailVerificationPage.css"
import Input from "../../components/Inputs"
import Button from "../../components/Button"
import { Link } from "react-router-dom"
import { FaApple,FaFacebook, FaGoogle , FaAngleLeft } from "react-icons/fa";

const EmailVerificationPage = () => {
  return (
   
    <div className="EmailVerificationPage">
      <div className="welcome-section-otp">
        <h1>Welcome to GiftPixel</h1>
        <p>Share Meaningful Promises With Your Loved Ones</p>
      </div>
      <div className="form-container-otp">
        <p className='Back'><FaAngleLeft size={20}/> Back</p>
        <h2 id='verify-text'>Verify your email address</h2>
        <p>Enter the OTP code sent to your email</p>
        <div className='input'>
            <Input styleClass={"inputStyle"} type={"number"}/>
            <Input styleClass={"inputStyle"}/>
            <Input styleClass={"inputStyle"}/>
            <Input styleClass={"inputStyle"}/>
            <Input styleClass={"inputStyle"}/>
            <Input styleClass={"inputStyle"}/>
        </div>
        <div>
            <p id='Resend-OTP'>Didn't get the OTP? <span style={{color:"red"}}>Resend</span></p>
        </div>
        <div>
            <Button label="Verify" styleClass ="verifyBtn"/>
        </div>

        <div className="span">
                <div></div>
                  <p>OR Sign up with</p>
                <div></div>
        </div>

        <div className="social-icon">
            <FaApple size={30}/>
            <FaFacebook size={30}/>
            <FaGoogle size={30}/>
        </div>

        <div className="acctSettings">
            <p>Already have an account <Link id="span" to={"/signin"}><span>Sign In</span></Link> </p>
        </div>     
      </div>
      <div>
        <img
        className="bottom-left-image-otp"
        src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1733307863/image_gnnaf1.png"
        alt="Decorative SVG"/>
      </div>
    </div>
  )
}

export default EmailVerificationPage