import { customerUrls } from '../Routes/UrlRoutes';
import { IoIosNotificationsOutline, IoMdMenu } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { NavLink, Outlet } from 'react-router-dom';
import PaymentModal from '../components/Payments/OrderPayments.jsx'; // Import PaymentModal
import { usePayment } from '../context/OrderPaymentContext';
import LogoutButton from '../components/LogOut/LogOut.jsx';

const CustomerProfile = () => {
  const { isOpen, handleClose } = usePayment();

  return (
    <>
      <div className="admin-pannel h-[100vh]">
        <header className="flex items-center bg-gray-300 h-[7vh] relative">
          {/* Container for buttons in top-left */}
          <div className="absolute flex gap-2 top-2 left-3">
            <NavLink
              to="/"
              className="px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-black"
            >
              Back to Home
            </NavLink>
            <LogoutButton />
          </div>

          {/* Rest of the header */}
          
          
          
          <h1 className="mx-auto text-4xl font-bold">Customer Dashboard</h1>
        </header>

        <div className="flex main-contain">
          <div className="sidebar w-[15%] h-[93vh] flex flex-col bg-gray-300 overflow-hidden justify-center items-center">
            {customerUrls.map((route, index) => {
              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className={({ isActive }) =>
                    isActive ? 'active-link' : 'link'
                  }
                >
                  {route.title}
                </NavLink>
              );
            })}
          </div>

          <div className="mx-8 my-4 h-[88vh] content w-[80%]">
            <Outlet />
            {isOpen && <PaymentModal />}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerProfile;
