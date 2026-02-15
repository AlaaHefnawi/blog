import { Route, Routes } from "react-router"
import NavBar from "../components/Navbar/NavBar"
import Home from "../pages/Home"
import About from "../pages/About"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import Footer from "../components/Footer/Footer"

function App() {
  const items = [
    {
        content: "Home",
        url: "/"
    },
    {
        content: "About",
        url: "/about"
    }]
    

  return (
    <>
    <NavBar logo="Alaa Hefnawi" items={items} btn={{content: "Sign In", url: "/signin"}} />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    <Footer footer= "© 2025 Blogs , vica web solutions"/>
    </>
  )
}

export default App
