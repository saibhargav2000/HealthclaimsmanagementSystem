import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import ClaimForm from './components/ClaimForm';
import RegisterPolicyHolder from './components/RegisterPolicyHolder';
import UpdateClaimStatus from './components/UpdateClaimStatus';
import ChoosePolicy from './components/ChoosePolicy';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/claim" element={<ClaimForm />} />
          <Route path="/register-policy-holder" element={<RegisterPolicyHolder />} />
          <Route path="/update-claim-status" element={<UpdateClaimStatus />} />
          <Route path="/choose-policy" element={<ChoosePolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
