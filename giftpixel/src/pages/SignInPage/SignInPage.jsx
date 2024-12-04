import { Link } from "react-router-dom"
import "../../styles/SignInPage.css"
import FormInput from "./FormInput"
import Button from "../../components/Button"
import { FaApple,FaFacebook, FaGoogle } from "react-icons/fa";



const SignInPage = () => {
  return (
    <div className="signInDiv">
         

          <div className="main-Container">
                <div className="welcome-text">

                 
                  <h2>Welcome to GiftPixel</h2>
                  <p>Share Meaningful Promises With Your Loved Ones</p>
                </div>
                
                <div className="form-container">
                <h2>Sign In</h2>
                <FormInput  label="Email" type="email" name="name" />
                <FormInput  label="Password" type="password" name="password" />

                <Link to={"/forgotPassword"} className="fgpwrd"><p>Forgot password?</p></Link> 

                
                <Button label="Sign in" styleClass ="signBtn"/>

                <div className="span">
                <div></div>
                  <p>OR Sign in with</p>
                <div></div>
                </div>

                <div className="social-icon">
                    <FaApple size={30}/>
                    <FaFacebook size={30}/>
                    <FaGoogle size={30}/>
                </div>

                <div className="acctSettings">
                <p>Don`t have an Account? <Link id="span" to={"/signup"}><span>Sign up</span></Link> </p>
                </div>
                

                </div>

               
                
               

          </div>
    </div>
  )
}

export default SignInPage