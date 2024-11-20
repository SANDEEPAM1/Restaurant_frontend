  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import {createBrowserRouter,RouterProvider } from 'react-router-dom'
  import {router} from './Routes/UrlRoutes.jsx'
  import './index.css'
  import CartContextProvider from './context/CartContext.jsx'
  import PaymentProvider from './context/OrderPaymentContext.jsx'
  import { AuthProvider } from './context/AuthContext.jsx'
import { Toaster } from 'react-hot-toast'
  



  createRoot(document.getElementById('root')).render(
    <StrictMode>
    <AuthProvider>
      <CartContextProvider>
        <PaymentProvider>
          <Toaster position='top-center'/>
          <RouterProvider router={router}/> 
        </PaymentProvider>
      </CartContextProvider>
    </AuthProvider>
    </StrictMode>,
  )
