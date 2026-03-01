// UserDashbord.jsx
import React from 'react';

const UserDashbord = () => {
  return (
    <div className="user-dashboard" style={{ padding: '2rem' }}>
      <h2>User Dashboard</h2>
      <div className="dashboard-info" style={{ marginTop: '1.5rem' }}>
        <p>Welcome to your dashboard!</p>
        <ul>
          <li>Profile</li>
          <li>Attendance</li>
          <li>Leave Requests</li>
          <li>Payroll</li>
        </ul>
      </div>
    </div>
  );
};

export default UserDashbord;
