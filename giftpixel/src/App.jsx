import {BrowserRouter,Routes, Route} from "react-router-dom"
import Homepage from "./pages/HomePage/Homepage"
import AboutPage from "./pages/AboutPage/AboutPage"
import SignInPage from "./pages/SignInPage/SignInPage"
import SignupPage from "./pages/SignupPage/SignupPage"
import EmailVerificationPage from "./pages/EmailVerificationPage/EmailVerificationPage"

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Homepage/>} />
          <Route path="/aboutUs" element ={<AboutPage/>} />
          <Route path="/signIn" element ={<SignInPage/>} />
          <Route path="/signUp" element ={<SignupPage/>} />
          <Route path="/emailVerificationPage" element ={<EmailVerificationPage/>} />
          <Route path="/dashboard" />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
