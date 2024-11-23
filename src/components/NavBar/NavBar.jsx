import React from 'react';
import logo from '../../assets/logo.png';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { routes } from '../../Routes/UrlRoutes';
import { useAuth } from '../../context/AuthContext';
import { getUserRole, getUserId, isTokenValid } from '../../Utility/authUtility'; // Utility functions

function NavBar() {
    const { handelLogin, handleSignUp } = useAuth();

    // Check if the JWT token is valid
    const isValidToken = isTokenValid();
    const userId = isValidToken ? getUserId() : null;
    const role = isValidToken ? getUserRole() : null;

    // Check if the user is logged in and is a customer
    const isCustomer = userId && role === 'Customer';

    return (
        <>
            <div className="flex w-[100%] justify-between items-center h-[10vh] bg-[#c1c19d] ">
                <div className="ml-[2%] w-[10%] text-center logo">
                    <img src={logo} alt="logo" className="h-[8vh]" />
                </div>
                <div className="links w-[70%] flex justify-center">
                    {routes.map((route, index) => {
                        // Conditionally hide the Customer profile route when not logged in
                        if (route.path === '/Customer' && !isCustomer) {
                            return null;
                        }
                        return (
                            <NavLink
                                to={route.path}
                                key={index}
                                className={({ isActive }) =>
                                    isActive ? 'active-mainNav-link' : 'link'
                                }
                            >
                                {route.page}
                            </NavLink>
                        );
                    })}
                </div>

                <div className="flex w-[20%]">
                    {!isCustomer ? (
                        // Show Sign In and Sign Up buttons if the user is not logged in or not a customer
                        <>
                            <div className="w-[40%] link">
                                <button
                                    className="w-full text-xl rounded-full"
                                    onClick={handleSignUp}
                                >
                                    Sign Up
                                </button>
                            </div>

                            <div className="w-[40%] link">
                                <button
                                    className="w-full text-xl rounded-full"
                                    onClick={handelLogin}
                                >
                                    Sign In
                                </button>
                            </div>
                        </>
                    ) : (
                        // Show Profile button if the user is logged in as a customer
                        <div className="flex items-center justify-center w-[40%]">
                            <NavLink
                                to="/Customer/cart"
                                className={({ isActive }) =>
                                  isActive ? 'active-mainNav-link' : 'link'
                              }
                            >
                                MyProfile
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default NavBar;
