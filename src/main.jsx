import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import Order from './pages/Order.jsx'
import Reservation from './pages/Reservation.jsx'
import Offers from './pages/Offers.jsx'
import Galary from './pages/Galary.jsx'
import KictchenDisplay from './pages/KictchenDisplay.jsx'
import Admin from './pages/Admin.jsx'
import ViewOrders from './components/Admin/ViewOrders.jsx'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import routes from './Routes/UrlRoutes.jsx'
import './index.css'
import ViewDeliveryPerson from './components/Admin/ViewDeliveryPerson.jsx'
import MenuItems from './components/Admin/MenuItems.jsx'
import PhyaicalTables from './components/Admin/PhyaicalTables.jsx'



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
  },
  {
    path:"/kitchen",
    element:<KictchenDisplay/>
  },
  {
    path:"/Admin",
    element:<Admin/>,
    children:[
      {
        path:"/Admin/viewOrders",
        element:<ViewOrders/>
      },
      {
        path:"/Admin/viewdeliveryperson",
        element:<ViewDeliveryPerson/>
      },
      {
        path:"/Admin/menuItems",
        element:<MenuItems/>
      },
      {
        path:"/Admin/physicalTables",
        element:<PhyaicalTables/>
      }

    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/> 
  </StrictMode>,
)
