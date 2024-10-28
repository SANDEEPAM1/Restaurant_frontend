import { useState } from 'react'
import { BrowserRouter, createBrowserRouter,Outlet,Router,RouterProvider } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Border from './components/Border/Border.jsx'
import { CatagoryProvider } from './context/CatagoryContext.jsx'
import Sign_up from './components/Sign_Up/Sign_up.jsx'
import Log_in from './components/Log_in/Log_in.jsx'

function App() {
    const [isSignUpVisible, setIsSignUpVisible] = useState(false)
    const [isLoginVisible, setIsLoginVisible] = useState(false)


  const handleLogin = () =>{
    setIsLoginVisible(true)
  }
  const handleCloseLogin = () =>{
    setIsLoginVisible(false)
  }

  const handleSignUp = () =>{
    setIsSignUpVisible(true)
  }

  const handleCloseSignUp = () =>{
    setIsSignUpVisible(false);
  }

  return (
    <>
    <CatagoryProvider>
    <NavBar onSignUpClick={handleSignUp} onLoginClick={handleLogin}/>
    <Border/>
    <Outlet/>
    <Footer/>
    <Sign_up isVisible={isSignUpVisible} onClose={handleCloseSignUp}/>
    <Log_in isVisible={isLoginVisible} onClose={handleCloseLogin}/> 
    </CatagoryProvider>
    </>
  )
}

export default App
