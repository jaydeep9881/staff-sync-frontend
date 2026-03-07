// AdminDashbord.jsx
import React from 'react';
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

const AdminDashbord = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const [counts, setCounts] = useState({ employees: 0 ,department: 0});

  useEffect(() => {
    let mounted = true; // ✅ moved outside try block

    const run = async () => {
      try {
        setLoading(true);

        const [emp, dept] = await Promise.all([
          axios.get("/employees"),
          axios.get("/department"),
        ]);

        if (!mounted) return; // ✅ check before updating state

        console.log(emp);
        setCounts({
          employees: Array.isArray(emp.data) ? emp.data.length : 0,
          departments: Array.isArray(dept.data) ? dept.data.length : 0,
        });

      } catch (err) {
        console.error("Dashboard load error:", err); // ✅ log the error
        if (mounted) setLoading(false);
      } finally {
        if (mounted) setLoading(false); // ✅ always stop loading
      }
    };

    run(); // ✅ actually call the function

    return () => {
      mounted = false; // ✅ cleanup to prevent memory leaks
    };
  }, []);

  return (
    <>
      <div className="page-header d-flex fixed-header">
        <div className="page-header-left d-flex align-items-center">
          <div className="page-header-title">
            <h5 className="m-b-10">Dashboard</h5>
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="row">
          <div className="col-xxl-12">
            <div className="card stretch stretch-full">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                  <div>
                    <h5 className="mb-1">Welcome</h5>
                    <div className="text-muted fs-12">
                      {user?.username
                        ? `${user.username} (${user.role ?? 'USER'})`
                        : 'Logged in'}
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <Link to={`/employees/${user?.employeeId}`} className="btn btn-light-brand">
                      Profile
                    </Link>
                    <Link to="/users" className="btn btn-primary">
                      Create User
                    </Link>
                  </div>
                </div>

                <hr />

                <div className="row g-3">
                  <div className="col-md-3">
                    <div className="border rounded p-3">
                      <div className="text-muted fs-12">Employees</div>
                      <div className="fs-20 fw-bold text-muted bold-text">
                        {loading ? '...' : counts.employees}
                      </div>
                      <Link to="/employees" className="fs-12">
                        View
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="border rounded p-3">
                      <div className="text-muted fs-12">Departments</div>
                      <div style={{fontWeight:'bold'}} className="fs-20 text-muted fw-bold">
                        {loading ? '...' : counts.departments}
                      </div>
                      <Link to="/departments" className="fs-12">
                        View
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="border rounded p-3">
                      <div className="text-muted fs-12">Leaves</div>
                      <Link to="/leaves" className="fs-12">
                        View
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="border rounded p-3">
                      <div className="text-muted fs-12">Reimbursements</div>
                      <Link to="/reimbursements" className="fs-12">
                        View
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-4 d-flex flex-wrap gap-2">
                  <Link className="btn btn-outline-primary" to="/attendance">
                    Attendance
                  </Link>
                  <Link className="btn btn-outline-primary" to="/salaries">
                    Salary
                  </Link>
                  <Link className="btn btn-outline-primary" to="/leaves">
                    Leave
                  </Link>
                  <Link className="btn btn-outline-primary" to="/reimbursements">
                    Reimbursement
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashbord;