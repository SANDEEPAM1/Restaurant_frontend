import { useState } from 'react'
import { BrowserRouter, createBrowserRouter,Outlet,Router,RouterProvider } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Border from './components/Border/Border.jsx'
import { CatagoryProvider } from './context/CatagoryContext.jsx'

function App() {
  
  return (
    <>
    <CatagoryProvider>
    <NavBar/>
    <Border/>
    <Outlet/>
    <Footer/>
    </CatagoryProvider>
    </>
  )
}

export default App
