import {BrowserRouter,Routes, Route} from "react-router-dom"
import Homepage from "./pages/HomePage/Homepage"
import AboutPage from "./pages/AboutPage/AboutPage"
import SignInPage from "./pages/SignInPage/SignInPage"
import SignUp from "./pages/SignupPage/SignUp"

function App() {
 

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element ={<Homepage/>} />
              <Route path="/aboutUs" element ={<AboutPage/>} />
              <Route path="/signIn" element ={<SignInPage/>} />
              <Route path="/signUp" element ={<SignUp/>} />


          </Routes>
      
      
      
      </BrowserRouter>
    </>
  )
}

export default App
