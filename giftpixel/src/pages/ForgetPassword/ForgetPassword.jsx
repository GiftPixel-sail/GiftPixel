import { Link } from "react-router-dom";
// import "../../styles/ForgetPassword.css";
import FormInput from "../SignInPage/FormInput";
import Button from "../../components/Button";

const ForgetPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle password reset can be added here
    alert("Password reset link has been sent to your email.");
  };

  return (
    <div className="forgetPasswordDiv">
      <div className="main-Container">
        <div className="welcome-section">
          <h1>Welcome to GiftPixel</h1>
          <p>Share Meaningful Promises With Your Loved Ones</p>
        </div>

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h2>Forgot Password</h2>
            <p>Enter your registered email to receive a password reset link.</p>
            <FormInput label="Email" type="email" name="email" required />

            <Button
              label="Send Reset Link"
              styleClass="primary-button"
              type="submit"
            />
          </form>
          {/* back to signIn */}
          <div className="backToSignIn">
            <p>
              Remembered your password? <Link to="/signin">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
      <img
        className="bottom-left-image"
        src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1733307863/image_gnnaf1.png"
        alt="Decorative SVG"
      />
    </div>
  );
};

export default ForgetPassword;
