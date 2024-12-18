import {BrowserRouter,Routes, Route} from "react-router-dom"
import Homepage from "./pages/HomePage/Homepage"
import AboutPage from "./pages/AboutPage/AboutPage"
import SignInPage from "./pages/SignInPage/SignInPage"
import SignupPage from "./pages/SignupPage/SignupPage"
import EmailVerificationPage from "./pages/EmailVerificationPage/EmailVerificationPage"
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword"
import PromiseCard from "./pages/PromiseCard/PromiseCard"
import PropsCard from "./components/PropsCard"
import PromiseListPage from "./pages/PromiseListPage/PromiseListPage"
import CurrentUserpage from "./pages/CurrentUserPage/CurrentUserpage"


function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Homepage/>} />
          <Route path="/aboutUs" element ={<AboutPage/>} />
          <Route path="/signIn" element ={<SignInPage/>} />
          <Route path="/forgotPassword" element = {<ForgetPassword/>} />
          <Route path="/signUp" element ={<SignupPage/>} />
          <Route path="/emailVerificationPage" element ={<EmailVerificationPage/>} />
          <Route path="/dashboard" />
          <Route path="/createPromise" element ={<PromiseCard/>}/>
          <Route path="/template" element ={<PropsCard/>}/>
          <Route path="/promiseList" element ={<PromiseListPage/>}/>
          <Route path="/currentuserpage" element ={<CurrentUserpage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
