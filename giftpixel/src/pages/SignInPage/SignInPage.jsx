import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/SignInPage.css";
import Button from "../../components/Button";
import Cookies from 'js-cookie';
import { FaApple, FaFacebook, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // New state for success message
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    if (!validateEmail(emailValue)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value.trim();
    setPassword(passwordValue);
    if (passwordValue.length < 8) {
      setError("Password must be at least 8 characters.");
    } else {
      setError("");
    }
  };

  const handleSignIn = () => {
    if (!email || !password || emailError) {
      return;
    }

    const userData = {
      email: email,
      password: password,
    };

    setLoading(true);

    axios
      .post("https://auth-zxvu.onrender.com/api/auth/login", userData, { withCredentials: false })
      .then((response) => {
        setLoading(false);
        setError("");
        setSuccessMessage("Login Successful"); // Set the success message

        console.log(response.data);

        Cookies.set('user', JSON.stringify(response.data.user), { expires: 1 }); 

        const userId = Cookies.get("user");
        const my_id = JSON.parse(userId)._id;

        axios.get(`https://auth-zxvu.onrender.com/api/auth/user/${my_id}/promises`)
          .then((response) => {

            if (Array.isArray(response.data.promises.titles) && response.data.promises.titles.length === 0) {
              setTimeout(() => {
                navigate("/createPromise");
              }, 1000);
            } else {
              setTimeout(() => {
                navigate("/PromiseList");
              }, 1000);
            }
          })
          .catch((error) => {
            console.error("Error fetching user promises:", error);
            setLoading(false);
            setError("Error fetching promises.");
          });
      })
      .catch((error) => {
        setLoading(false);
        setError("Incorrect email or password.");
        console.log(error);
        setSuccessMessage(""); // Clear success message if login fails
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signInDiv">
      <div className="main-Container">
        <div className="welcome-text">

          <h2>Welcome to GiftPixel</h2>
          <p>Share Meaningful Promises With Your Loved Ones</p>
        </div>

        <div className="form-container">

          <h2>Sign In</h2>

          {successMessage && <p className="success-message">{successMessage}</p>} {/* Display the success message */}

          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
            />
          </div>

          {emailError && <p className="email-error">{emailError}</p>}

          <div className="form-input">
            <label htmlFor="password">Password</label>
            <div className="password-container">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
              />
              <span className="password-icon" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </span>
            </div>
          </div>

          {error && <p className="password-error">{error}</p>}

          <Link to={"/forgotPassword"} className="fgpwrd">
            <p>Forgot password?</p>
          </Link>

          <Button
            label={loading ? "Signing in..." : "Sign in"}
            styleClass={`signBtn ${password.length >= 8 && email && !emailError ? "active" : ""}`}
            onClick={handleSignIn}
            disabled={loading || password.length < 8 || !email || emailError}
          />

          {loading && <div className="loader"><div className="spinner"></div></div>}

          <div className="span">
            <div></div>
            <p>OR Sign in with</p>
            <div></div>
          </div>

          <div className="social-icon">
            <FaApple size={30} />
            <FaFacebook size={30} />
            <FaGoogle size={30} />
          </div>

          <div className="acctSettings">
            <p>Don’t have an Account? <Link id="span" to={"/signup"}><span>Sign up</span></Link></p>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
