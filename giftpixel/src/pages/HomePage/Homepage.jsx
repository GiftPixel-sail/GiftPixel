import { Link } from "react-router-dom"



const Homepage = () => {
  return (
    <div>
      <Link to={"/signUp"}>Sign up</Link>
      <Link to={"/signIn"}>Sign In</Link> | <Link to="/forgotPassword">Forgot Password</Link>
    </div>
  );
}

export default Homepage