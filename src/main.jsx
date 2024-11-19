  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import {createBrowserRouter,RouterProvider } from 'react-router-dom'
  import {router} from './Routes/UrlRoutes.jsx'
  import './index.css'
  import CartContextProvider from './context/CartContext.jsx'
  import PaymentProvider from './context/OrderPaymentContext.jsx'



  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <CartContextProvider>
        <PaymentProvider>
          <RouterProvider router={router}/> 
        </PaymentProvider>
      </CartContextProvider>
    </StrictMode>,
  )
