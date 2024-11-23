import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import Button from '../Button/Button';
import './Sign_up.css';
import { useNavigate } from 'react-router-dom';
import * as Yep from 'yup';
import axiosInstance from '../../Utility/api';
import { useAuth } from '../../context/AuthContext';
import { FaRegEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { showToastPromise, showErrorToast } from '../../Utility/Toaster';

const Sign_up = () => {
  const buttonName = 'Create';
  const navigate = useNavigate();
  const { isSignUpVisible, handleCloseSignUp, handelLogin } = useAuth();
  const [passwordIcon, setPasswordIcon] = useState('password');
  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState('password');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const validationScheama = Yep.object({
    username: Yep.string()
      .required('Username is required')
      .min(4, 'At least 4 characters'),
    password: Yep.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one symbol')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter'),
    confirmPassword: Yep.string()
      .oneOf([Yep.ref('password')], 'Passwords must match')
      .required('Confirm password is required'),
    email: Yep.string().required('Email is required').email('Invalid email'),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationScheama.validate(formData, { abortEarly: false });
      const response = await showToastPromise(
        axiosInstance.post('/api/Auth/register', formData),
        {
          loading: 'Creating your account...',
          success: 'Registration successful! Please verify your email.',
          error: 'Registration failed. Please try again.',
        },
        {
          success: {
            duration: 10000,
          },
        }
      );

      setFormData({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
      });

      console.log(response.status);
      setErrors({});
      handleCloseSignUp();
    } catch (error) {
      const validationError = {};

      if (error.inner && Array.isArray(error.inner)) {
        error.inner.forEach((err) => {
          validationError[err.path] = err.message;
        });
        showErrorToast('Registration failed. Please try again');
      } else {
        console.error('Unexpected error structure:', error); // Log unexpected errors
      }
      setErrors(validationError);
    }
  };

  const handleFormData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePasswordIcon = (e) => {
    e.preventDefault();
    setPasswordIcon((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  const handleConfirmPasswordIcon = (e) => {
    e.preventDefault();
    setConfirmPasswordIcon((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  return (
    <>
      {isSignUpVisible ? (
        <>
          <div className="overlay" onClick={handleCloseSignUp}></div>

          <div className="popup-container">
            <div className="border-[4px] border-red-700 bg-[#d1b891] w-[50vh] h-[75vh] z-10">
              <div className="flex flex-col-reverse items-center gap-3 mt-2">
                <h1 className="text-[5vh]">Create an Account</h1>
                <img src={logo} alt="logo" className="w-[20%]" />
              </div>

              <div className="signupForm">
                <form action="" method="POST" className="flex flex-col items-center w-full gap-4 mt-5">
                  <div className="signup">
                    <input
                      type="text"
                      placeholder="Username"
                      name="username"
                      value={formData.username}
                      onChange={handleFormData}
                    />
                    {errors.username && <p className="error-message">{errors.username}</p>}
                  </div>
                  <div className="relative signup">
                    <input
                      type={passwordIcon}
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleFormData}
                    />
                    {errors.password && <p className="error-message">{errors.password}</p>}
                    <button
                      className="absolute transform -translate-y-1/2 right-3 top-1/2"
                      onClick={handlePasswordIcon}
                    >
                      {passwordIcon === 'password' ? <IoEyeOff className="w-7" /> : <FaRegEye className="w-7" />}
                    </button>
                  </div>
                  <div className="relative signup">
                    <input
                      type={confirmPasswordIcon}
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleFormData}
                    />
                    {errors.confirmPassword && (
                      <p className="error-message">{errors.confirmPassword}</p>
                    )}
                    <button
                      className="absolute transform -translate-y-1/2 right-3 top-1/2"
                      onClick={handleConfirmPasswordIcon}
                    >
                      {confirmPasswordIcon === 'password' ? (
                        <IoEyeOff className="w-7" />
                      ) : (
                        <FaRegEye className="w-7" />
                      )}
                    </button>
                  </div>
                  <div className="signup">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormData}
                    />
                    {errors.email && <p className="error-message">{errors.email}</p>}
                  </div>
                  <div className="mt-4">
                    <Button name={buttonName} onClick={handleSubmit} />
                  </div>
                  <div className="flex flex-col items-center mt-3 text-sm">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => {
                        handleCloseSignUp();
                        handelLogin();
                      }}
                    >
                      Already Have an Account? Log in
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

export default Sign_up;
