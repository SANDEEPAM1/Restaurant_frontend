import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from '../App.jsx'
import Admin from '../pages/Admin.jsx'
import ViewDeliveryPerson from '../components/Admin/ViewDeliveryPerson.jsx'
import MenuItems from '../components/Admin/MenuItems.jsx'
import PhyaicalTables from '../components/Admin/PhyaicalTables.jsx'
import Home from '../pages/Home.jsx'
import Menu from '../pages/Menu.jsx'
import Reservation from '../pages/Reservation.jsx'
import Offers from '../pages/Offers.jsx'
import Galary from '../pages/Galary.jsx'
import KictchenDisplay from '../pages/KictchenDisplay.jsx'
import ViewOrders from '../components/Admin/ViewOrders.jsx'
import Update from '../components/Admin/Update.jsx'
import UpdateTables from '../components/Admin/UpdateTables.jsx'
import AboutUs from '../pages/AboutUs.jsx'
import ProtectedRoutes from './ProtectedRoutes.jsx'
import Sign_up from '../components/Sign_Up/Sign_up.jsx'
import CustomerProfile from '../pages/CustomerProfile.jsx'
import Cart from '../components/Customer/Cart.jsx'
import RequestReSetPassword from '../components/PasswordReset/RequestReSetPassword.jsx'
import ResetPassword from '../components/PasswordReset/ResetPassword.jsx'
import AdminRegister from '../components/Admin/AdminRegister.jsx'


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
        },
        {
          path:'/requestResetPW',
          element:<RequestReSetPassword/>
        },
        {
          path:'/resetPassword',
          element:<ResetPassword/>
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
        },
        {
          path:"/Admin/registerUser",
          element:<AdminRegister/>
        }
  
      ]
    },
    {
      path:"/Customer",
      element:
      <ProtectedRoutes requireRole='Customer'>
      <CustomerProfile/>
      </ProtectedRoutes>,
      children:[
        {
          path:"cart",
          element:<Cart/>
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
    },
    {
      path:"/Admin/registerUser",
      title:"Register user"
    }
  ]

  const customerUrls = [
    {
      path:"/Customer/cart",
      title:"Cart"
      
    }
  ]

  export {router,routes,adminUrls,customerUrls}