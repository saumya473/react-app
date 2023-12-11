
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginForm from './LoginForm';
import HomePage from './HomePage';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/dashbaord" element={<Dashboard/>} />
        {/* Define other routes for your application here */}
      </Routes>
    </Router>
  );
}

export default App;


