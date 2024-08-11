// SignOut.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignOut = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      // Optional: Send request to backend to end the session
      await axios.post('/api/signout');

      // Clear authentication state from local storage, cookies, or context
      localStorage.removeItem('authToken');
      // If using context, clear it here (e.g., dispatch a logout action)

      // Redirect to home page or login page
      navigate('/login'); // or navigate('/')
    } catch (error) {
      console.error('Error during sign out:', error);
    }
  };

  return (
    <button onClick={handleSignOut}>
      Sign Out
    </button>
  );
};

export default SignOut;
