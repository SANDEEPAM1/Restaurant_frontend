import { useState } from 'react'
import { BrowserRouter, createBrowserRouter,Outlet,Router,RouterProvider } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Border from './components/Border/Border.jsx'
import { CatagoryProvider } from './context/CatagoryContext.jsx'
import Sign_up from './components/Sign_Up/Sign_up.jsx'
import Log_in from './components/Log_in/Log_in.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

function App() {
  //   const [isSignUpVisible, setIsSignUpVisible] = useState(false)
  //   const [isLoginVisible, setIsLoginVisible] = useState(false)


  // const handleLogin = () =>{
  //   setIsLoginVisible(true)
  // }
  // const handleCloseLogin = () =>{
  //   setIsLoginVisible(false)
  // }

  // const handleSignUp = () =>{
  //   setIsSignUpVisible(true)
  // }

  // const handleCloseSignUp = () =>{
  //   setIsSignUpVisible(false);
  // }
  

  return (
    <>
    <AuthProvider>
      <CatagoryProvider>
    <NavBar/>
    <Border/>
    <Outlet/>
    <Footer/>
    <Sign_up/>
    <Log_in/> 
      </CatagoryProvider>
    </AuthProvider>
    </>
  )
}

export default App
