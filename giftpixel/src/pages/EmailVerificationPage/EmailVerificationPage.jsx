import React, { useRef, useState } from "react";
import "../../styles/EmailVerificationPage.css";
import Input from "../../components/Inputs";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";
import { FaApple, FaFacebook, FaGoogle, FaAngleLeft } from "react-icons/fa";

const EmailVerificationPage = () => {
  const inputRefs = useRef([]); // Array to store refs for each input field
  const [otp,setOtp] = useState("");


  // Handle input and move focus to the next input
  const handleInput = (e, index) => {
    const value = e.target.value;

    // Check if the current input is filled and move to the next input
    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <div className="EmailVerificationPage">
      <div className="welcome-section-otp">
        <h1>Welcome to GiftPixel</h1>
        <p>Share Meaningful Promises With Your Loved Ones</p>
      </div>

      <div className="form-container-otp">
        <p className="Back">
          <FaAngleLeft size={20} /> Back
        </p>
        <h2 id="verify-text">Verify your email address</h2>
        <p>Enter the OTP code sent to your email</p>

        {/* OTP Input Fields */}
        {/* <div className="input">
          <Input
            type="number"
            styleClass="inputStyle"
            ref={(el) => (inputRefs.current[0] = el)}
            onInput={(e) => handleInput(e, 0)}
            maxLength={1}
          />

          <Input
            type="number"
            styleClass="inputStyle"
            ref={(el) => (inputRefs.current[1] = el)}
            onInput={(e) => handleInput(e, 1)}
            maxLength={1}
          />
          <Input
            type="number"
            styleClass="inputStyle"
            ref={(el) => (inputRefs.current[2] = el)}
            onInput={(e) => handleInput(e, 2)}
            maxLength={1}
          />
          <Input
            type="number"
            styleClass="inputStyle"
            ref={(el) => (inputRefs.current[3] = el)}
            onInput={(e) => handleInput(e, 3)}
            maxLength={1}
          />
          <Input
            type="number"
            styleClass="inputStyle"
            ref={(el) => (inputRefs.current[4] = el)}
            onInput={(e) => handleInput(e, 4)}
            maxLength={1}
          />
          <Input
            type="number"
            styleClass="inputStyle"
            ref={(el) => (inputRefs.current[5] = el)}
            onInput={(e) => handleInput(e, 5)}
            maxLength={1}
          />
        </div> */}
        <div className="otp-form">
          <OtpInput
            inputType="number"
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>&nbsp;</span>}
            renderInput={(props) => <input {...props} />}
          />
        </div>
        {/* Resend OTP */}
        <div>
          <p id="Resend-OTP">
            Didn't get the OTP? <span style={{ color: "red" }}>Resend</span>
          </p>
        </div>

        {/* Verify Button */}
        <div>
          <Button label="Verify" styleClass={`verifyBtn ${otp.length === 6 ? "active" : ""}`} />
        </div>

        {/* Divider */}
        <div className="span">
          <div></div>
          <p>OR Sign up with</p>
          <div></div>
        </div>

        {/* Social Icons */}
        <div className="social-icon">
          <FaApple size={30} />
          <FaFacebook size={30} />
          <FaGoogle size={30} />
        </div>

        {/* Account Settings */}
        <div className="acctSettings">
          <p>
            Already have an account?{" "}
            <Link id="span" to={"/signin"}>
              <span>Sign In</span>
            </Link>
          </p>
        </div>
      </div>

      {/* Background Image */}
      <div>
        <img
          className="bottom-left-image-otp"
          src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1733307863/image_gnnaf1.png"
          alt="Decorative SVG"
        />
      </div>
    </div>
  );
};

export default EmailVerificationPage;
