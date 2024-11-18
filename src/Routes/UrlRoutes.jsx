import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from '../App.jsx'
import Admin from '../pages/Admin.jsx'
import ViewDeliveryPerson from '../components/Admin/ViewDeliveryPerson.jsx'
import MenuItems from '../components/Admin/MenuItems.jsx'
import PhyaicalTables from '../components/Admin/PhyaicalTables.jsx'
import Home from '../pages/Home.jsx'
import Menu from '../pages/Menu.jsx'
import Order from '../pages/Order.jsx'
import Reservation from '../pages/Reservation.jsx'
import Offers from '../pages/Offers.jsx'
import Galary from '../pages/Galary.jsx'
import KictchenDisplay from '../pages/KictchenDisplay.jsx'
import ViewOrders from '../components/Admin/ViewOrders.jsx'
import Update from '../components/Admin/Update.jsx'
import UpdateTables from '../components/Admin/UpdateTables.jsx'
import AboutUs from '../pages/AboutUs.jsx'
import ProtectedRoutes from './ProtectedRoutes.jsx'

// navbar urls
const routes =[
    {
        path:'/',
        page:'Home',  
    },
    {
        path:'/menu',
        page:'Menu & Order Online'
    },
    {
        path:'/reservation',
        page:'Table Reservation'
    },
    {
        path:'/offers',
        page:'Offers'
    },
    {
        path:'/gallary',
        page:'Gallary'
    }
]

// main router urls
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
        },
        {
            path:'/aboutUs',
            element:<AboutUs/>
        }
    ]
    },
    {
      path:"/kitchen",
      element:
      <ProtectedRoutes requireRole='Chef'>
        <KictchenDisplay/>
      </ProtectedRoutes>
    },
    {
      path:"/Admin",
      element:
      <ProtectedRoutes requireRole='Admin'>
        <Admin/>
      </ProtectedRoutes>
      ,
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
        },
        {
          path:"/Admin/Update/:menuItemId",
          element:<Update/>
        },
        {
          path:"/Admin/UpdateTable/:tableId",
          element:<UpdateTables/>
        }
  
      ]
    }
  
  ])

  const adminUrls = [
    {
        path:"/Admin/viewOrders",
        title:"Orders"
    },
    {
        path:"/Admin/viewdeliveryperson",
        title:"DeliveryPersons"
    },
    {
        path:"/Admin/menuItems",
        title:"MenuItems"
    },
    {
        path:"/Admin/physicalTables",
        title:"Physical Tables"
    }
  ]

  export {router,routes,adminUrls}