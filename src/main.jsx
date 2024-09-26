import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import Order from './pages/Order.jsx'
import Reservation from './pages/Reservation.jsx'
import Offers from './pages/Offers.jsx'
import Galary from './pages/Galary.jsx'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import routes from './Routes/UrlRoutes.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
          path:'/',
          element:<Home/>,  
      },
      {
          path:'/menu',
          element:<Menu/>
      },
      {
          path:'/order',
          element:<Order/>
      },
      {
          path:'/reservation',
          element:<Reservation/>
      },
      {
          path:'/offers',
          element:<Offers/>
      },
      {
          path:'/gallary',
          element:<Galary/>
      }
  ]
    // children:routes.map((route,index)=>{
    //     return {path:route.path,
    //       element:<route.page/>
    //     }
    // })

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
