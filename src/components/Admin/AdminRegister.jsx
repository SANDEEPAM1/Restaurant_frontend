import React, { useState } from 'react';
import axios from 'axios';

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNubmer: '',
    userName: '',
    password: '',
    email: '',
    role: 'Admin', // Default value
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/register', formData);
      if (response.status === 201) {
        alert('User registered successfully!');
        // Clear the form
        setFormData({
          fullName: '',
          phoneNubmer: '',
          userName: '',
          password: '',
          email: '',
          role: 'Admin',
        });
      }
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Failed to register user. Please try again.');
    }
  };

  return (
    <div className="register-form-container p-8 bg-gray-100 rounded shadow-lg w-[50%] mx-auto mt-8">
      <h2 className="mb-6 text-3xl font-bold">Register New User</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block mb-1 font-semibold">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Phone Number</label>
          <input
            type="text"
            name="phoneNubmer"
            value={formData.phoneNubmer}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Username</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="Admin">Admin</option>
            <option value="Delivery">Delivery</option>
            <option value="Chef">Chef</option>
            <option value="Waiter">Waiter</option>
          </select>
        </div>

        <button
          type="submit"
          className="py-2 font-bold text-white transition-all bg-blue-500 rounded hover:bg-blue-700"
        >
          Register User
        </button>
      </form>
    </div>
  );
};

export default AdminRegister;
