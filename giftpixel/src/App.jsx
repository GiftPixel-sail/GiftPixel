import {BrowserRouter,Routes, Route} from "react-router-dom"
import Homepage from "./pages/HomePage/Homepage"
import AboutPage from "./pages/AboutPage/AboutPage"
import SignInPage from "./pages/SignInPage/SignInPage"
import SignupPage from "./pages/SignupPage/SignupPage"
import EmailVerificationPage from "./pages/EmailVerificationPage/EmailVerificationPage"
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword"

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Homepage/>} />
          <Route path="/aboutUs" element ={<AboutPage/>} />
          <Route path="/signIn" element ={<SignInPage/>} />
          <Route path="/forgetPassword" element = {<ForgetPassword/>} />
          <Route path="/signUp" element ={<SignupPage/>} />
          <Route path="/emailVerificationPage" element ={<EmailVerificationPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
