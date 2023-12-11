import React from 'react';
import Cookies from 'js-cookie';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const history = Cookies.get('isLoggedIn');
  const navigate = useNavigate();  
  const handleLogout = () => {
    // Perform any logout related logic here
    // For this example, we're just redirecting to the login page
    console.log("Logout");
    Cookies.set('isLoggedIn', false);
    navigate('/login');
  };

  return (
    <div className="App">
      <h1>Welcome to Your Dashboard</h1>
      <p>You are now logged in.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
