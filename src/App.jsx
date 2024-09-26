import { useState } from 'react'
import { BrowserRouter, createBrowserRouter,Outlet,Router,RouterProvider } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  
  return (
    <>
    
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
