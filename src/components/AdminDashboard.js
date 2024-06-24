import React from 'react';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        <li>
          <Link to="/register-policy-holder">Register Policy Holder</Link>
        </li>
        <li>
          <Link to="/update-claim-status">Update Claim Status</Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminDashboard;
