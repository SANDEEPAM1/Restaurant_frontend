import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import Button from '../Button/Button';
import './Log_in.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FaRegEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import axiosInstance from '../../Utility/api';
import * as Yup from 'yup';
import { showSuccessToast } from '../../Utility/Toaster';
import { jwtDecode } from 'jwt-decode';

const Log_in = () => {
    const buttonName = "Sign in ";
    const navigate = useNavigate();
    const { handleCloseLogin, isLoginVisible , handleSignUp} = useAuth();
    const [passwordIcon, setPasswordIcon] = useState('password');

    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    // Define the Yup validation schema
    const validationSchema = Yup.object({
        username: Yup.string()
            .required("Username is required")
            .min(4, "Username must be at least 4 characters"),
        password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters")
            .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one symbol")
            .matches(/[0-9]/, "Password must contain at least one number")
            .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
            .matches(/[a-z]/, "Password must contain at least one lowercase letter"),
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Validate form data using Yup
            await validationSchema.validate(loginData, { abortEarly: false });

            // Make the login API request directly
            const response = await axiosInstance.post("/api/Auth/login", loginData);

            // Check if response exists and contains the token
            if (!response || !response.data || !response.data.token) {
                throw new Error('Invalid response from server');
            }

            // Success toast for successful login
            showSuccessToast('Login successful!');

            // If login is successful
            const token = response.data.token;
            localStorage.setItem('jwt', token);

            const decodedJwt = jwtDecode(token);
            const role = decodedJwt.role;

            setLoginData({
                username: '',
                password: '',
            });

            // Redirect user based on their role
            switch (role) {
                case 'Customer':
                    navigate('/');
                    break;
                case 'Admin':
                    navigate('/Admin/viewOrders');
                    break;
                case 'Chef':
                    navigate('/kitchen');
                    break;
                case 'Delivery':
                    navigate('/delivery');
                    break;
                case 'Waiter':
                    navigate('/waiter');
                    break;
                default:
                    navigate('/');
            }
            handleCloseLogin(); // Close the modal after successful login
        } catch (error) {
            // Handle validation or API-related errors
            if (error.inner && Array.isArray(error.inner)) {
                const validationErrors = {};
                error.inner.forEach((err) => {
                    validationErrors[err.path] = err.message;
                });
                setErrors(validationErrors); // Display validation errors
            } else {
                // Log and display unexpected errors
                console.error("Unexpected error:", error);
                showSuccessToast(error.response?.data?.message || 'An unexpected error occurred. Please try again.');
            }
        }
    };

    const handleLoginData = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const handlePasswordIcon = (e) => {
        e.preventDefault();
        setPasswordIcon(passwordIcon === 'password' ? 'text' : 'password');
    };

    const handleForgotPassword = () => {
        handleCloseLogin(); 
        navigate('/requestResetPW'); 
    };

    return (
        <>
            {isLoginVisible ? (
                <>
                    <div className="overlay" onClick={handleCloseLogin}></div>

                    <div className="popup-container ">
                        <div className="border-[4px] border-red-700 bg-[#d1b891] w-[50vh] h-[60vh] z-10">
                            <div className="flex flex-col-reverse items-center gap-3 mt-2">
                                <h1 className="text-[5vh]">Welcome Back</h1>
                                <img src={logo} alt="logo" className="w-[20%]" />
                            </div>

                            <div className=" singupForm">
                                <form
                                    action=""
                                    method="POST"
                                    className="z-10 flex flex-col items-center w-full gap-4 mt-5"
                                >
                                    <div className="login">
                                        <input
                                            type="text"
                                            placeholder="UserName"
                                            name="username"
                                            value={loginData.username}
                                            onChange={handleLoginData}
                                        />
                                        {errors.username && (
                                            <p className="error-message">{errors.username}</p>
                                        )}
                                    </div>
                                    <div className="relative login">
                                        <input
                                            type={passwordIcon}
                                            placeholder="Password"
                                            name="password"
                                            value={loginData.password}
                                            onChange={handleLoginData}
                                        />
                                        {errors.password && (
                                            <p className="error-message">{errors.password}</p>
                                        )}
                                        <button
                                            className="absolute right-3 top-4"
                                            onClick={handlePasswordIcon}
                                        >
                                            {passwordIcon === 'password' ? (
                                                <IoEyeOff className="w-7" />
                                            ) : (
                                                <FaRegEye className="w-7" />
                                            )}
                                        </button>
                                    </div>

                                    <div className="mt-4">
                                        <Button name={buttonName} onClick={handleSubmit} />
                                    </div>
                                    <div className="flex flex-col mt-3 text-sm">
                                        <button
                                            className="text-blue-500 hover:underline"
                                            onClick={() =>handleForgotPassword()}
                                        >
                                            Forgot Password?
                                        </button>
                                        
                                        <button
        className="mt-2 text-blue-500 hover:underline"
        onClick={() => {
            handleCloseLogin(); 
           
            handleSignUp(); 
        }}
    >
        Don't have an Account? Register
    </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default Log_in;
