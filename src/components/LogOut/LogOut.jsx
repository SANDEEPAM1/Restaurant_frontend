import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove the JWT from localStorage
        localStorage.removeItem('jwt');

        // Optional: Redirect the user to the login page
        navigate('/'); // Adjust this route to your login page
    };

    // Remove JWT when the browser is closed
    window.addEventListener('beforeunload', () => {
        localStorage.removeItem('jwt');
    });

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
};

export default LogoutButton;
