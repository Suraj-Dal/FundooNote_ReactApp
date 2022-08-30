import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
 import SignIn from '../Pages/Signin/Signin';
 import Signup from '../Pages/Signup/signup';
 import Dashboard from '../Pages/Dashboard/Dashboard';

function RouterComponent() {
  return (
    <div>
        <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default RouterComponent