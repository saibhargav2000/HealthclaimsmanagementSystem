import React from 'react';
import { Link } from 'react-router-dom';

function UserDashboard() {
  return (
    <div>
      <h2>User Dashboard</h2>
      <ul>
        <li>
          <Link to="/claim">Submit Claim</Link>
        </li>
        <li>
          <Link to="/choose-policy">Choose Policy</Link>
        </li>
      </ul>
    </div>
  );
}

export default UserDashboard;
