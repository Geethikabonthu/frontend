// navigation.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Define your components 
 const Home = () => {
  return <h2>Home Page</h2>;
};

export  const About = () => {
  return <h2>About Page</h2>;
};

export const Contact = () => {
  return <h2>Contact Page</h2>;
};

 export  const UserProfile = () => {
  const { userId } = useParams();
  return <h2>User Profile for User ID: {userId}</h2>;
};

 export  const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="profile">Profile</Link></li>
          <li><Link to="settings">Settings</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="profile" element={<h3>Profile Page</h3>} />
        <Route path="settings" element={<h3>Settings Page</h3>} />
      </Routes>
    </div>
  );
};

const NotFound = () => {
  return <h2>404 Page Not Found</h2>;
};

// Main App component with routing setup
 export const Navigation = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/user/1">User 1 Profile</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/user/:userId" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
