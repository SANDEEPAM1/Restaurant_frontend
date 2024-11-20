import React, { useState} from 'react';
import axiosInstance from '../../Utility/api';
import { showToastPromise, showErrorToast } from '../../Utility/Toaster';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
    const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setErrors({ email: 'Email is required' });
      return;
    }

    try {
      // Show toaster notifications and send email reset request
      await showToastPromise(
        axiosInstance.post('/api/Auth/forgotPassword', { email }),
        {
          loading: 'Sending reset email...',
          success: 'Reset email sent successfully! Check your inbox.',
          error: 'Failed to send reset email. Please try again.',
        }
      );
      setEmail('');
      navigate('/')
    } catch (error) {
      console.error('Failed to send reset email:', error.response?.data || error.message);
      showErrorToast('Failed to send reset email. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="mb-4 text-2xl font-bold">Forgot Password</h1>
      <form
        className="w-full max-w-md p-6 bg-white rounded shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </div>
        <button
          type="submit"
          className="w-full p-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
