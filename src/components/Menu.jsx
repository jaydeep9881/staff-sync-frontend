// import '../assets/images/favicon.ico';
// import '../assets/css/bootstrap.min.css';
// import '../assets/vendors/css/vendors.min.css';
// import '../assets/vendors/css/daterangepicker.min.css';
// import '../assets/css/theme.min.css';
import axios from "axios";
import image from "../assets/images/avatar/image.png";
import { useAuth } from "../context/AuthContext";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "../utiliti/axiosConfig.js"; // ← ADD THIS
function Menu() {
  const { user, logout } = useAuth();
  const [emp, setEmp] = useState(null);
const [attendanceStatus, setAttendanceStatus] = useState(null); 
  useEffect(() => {
    // Only fetch if employeeId exists
    if (!user?.employeeId) return; //  

    axios
      .get(`/employee/${user.employeeId}`)  
      .then((response) => {
        setEmp(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employee data:", error);
      });
  }, [user]);
  const handleCheckIn = async () => {
  try {
    const location = await getLocation();
    await axios.post("/attendance/check-in", {
      employeeId: user.employeeId,
      checkInLocation: location,
    });
    setAttendanceStatus("checkedIn");
    alert("Check-in successful!");
  } catch (error) {
    alert("Check-in failed: " + (error.response?.data?.message || error.message));
  }
};
const getLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation not supported"));
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve(`${pos.coords.latitude}, ${pos.coords.longitude}`),
      (err) => reject(err)
    );
  });
};
const checkout = ()=>{

}
  return (
    <>
      {/*! ================================================================ !*/}
      {/*! [Start] Navigation Manu !*/}
      {/*! ================================================================ !*/}
       
      <nav className="nxl-navigation">
        <div className="navbar-wrapper">
          <div className="m-header">
            <a href="index.html" className="b-brand">
              {/* ========   change your logo hear   ============ */}
              <img
                src="assets/images/logo-full.png"
                alt=""
                className="logo logo-lg"
              />
              <img
                src="assets/images/logo-abbr.png"
                alt=""
                className="logo logo-sm"
              />
            </a>
          </div>
          <div className="navbar-content">
            <ul className="nxl-navbar">
              <li className="nxl-item nxl-caption">
                <label>Navigation</label>
              </li>
              <li className="nxl-item nxl-hasmenu">
                
                 
                  <Link to="/admin/dashboard" className="nxl-link">
                   <span className="nxl-mtext">Dashboards</span>
                  </Link>
                  {/* <span className="nxl-arrow">
                    <i className="feather-chevron-right" />
                  </span> */}
               
                {/* <ul className="nxl-submenu">
                  <li className="nxl-item">
                    <a className="nxl-link" href="index.html">
                      CRM
                    </a>
                  </li>
                  <li className="nxl-item">
                    <a className="nxl-link" href="analytics.html">
                      Analytics
                    </a>
                  </li>
                </ul> */}
              </li>
              <li className="nxl-item nxl-hasmenu">
                <a href="javascript:void(0);" className="nxl-link">
                  <span className="nxl-micon">
                    <i className="feather-users" />
                  </span>
                  <span className="nxl-mtext">Emplyees</span>
                  <span className="nxl-arrow">
                    <i className="feather-chevron-right" />
                  </span>
                </a>
                <ul className="nxl-submenu">
                  <li className="nxl-item">
                    <Link to="/employees" className="nxl-link">
                      All Employees
                    </Link>
                  </li>
                  <li className="nxl-item">
                    <Link to="/addemployee" className="nxl-link">
                      Add Employee
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nxl-item nxl-hasmenu">
                <Link to="/departments" className="nxl-link">
                  <span className="nxl-micon">
                    <i className="feather-briefcase" />
                  </span>
                  <span className="nxl-mtext">Departments</span>
                </Link>
              </li>
              {user?.role === "ROLE_ADMIN" && (
              <li className="nxl-item nxl-hasmenu">
                <Link to="/users" className="nxl-link">
                  <span className="nxl-micon">
                    <i className="feather-briefcase" />
                  </span>
                  <span className="nxl-mtext">Users</span>
                </Link>
              </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {/*! ================================================================ !*/}
      {/*! [End]  Navigation Manu !*/}

      {/*! [Start] Header !*/}
      {/*! ================================================================ !*/}
      <header className="nxl-header">
        <div className="header-wrapper">
          {/*! [Start] Header Left !*/}
          <div className="header-left d-flex align-items-center gap-4">
            {/*! [Start] nxl-head-mobile-toggler !*/}
            <a
              href="javascript:void(0);"
              className="nxl-head-mobile-toggler"
              id="mobile-collapse"
            >
              <div className="hamburger hamburger--arrowturn">
                <div className="hamburger-box">
                  <div className="hamburger-inner" />
                </div>
              </div>
            </a>
            {/*! [Start] nxl-head-mobile-toggler !*/}
            {/*! [Start] nxl-navigation-toggle !*/}
            <div className="nxl-navigation-toggle">
              <a href="javascript:void(0);" id="menu-mini-button">
                <i className="feather-align-left" />
              </a>
              <a
                href="javascript:void(0);"
                id="menu-expend-button"
                style={{ display: "none" }}
              >
                <i className="feather-arrow-right" />
              </a>
            </div>
            {/*! [End] nxl-navigation-toggle !*/}
            {/*! [Start] nxl-lavel-mega-menu-toggle !*/}
            <div className="nxl-lavel-mega-menu-toggle d-flex d-lg-none">
              <a href="javascript:void(0);" id="nxl-lavel-mega-menu-open">
                <i className="feather-align-left" />
              </a>
            </div>
            {/*! [End] nxl-lavel-mega-menu-toggle !*/}
            {/*! [Start] nxl-lavel-mega-menu !*/}
            <div className="nxl-drp-link nxl-lavel-mega-menu">
              <div className="nxl-lavel-mega-menu-toggle d-flex d-lg-none">
                <a href="javascript:void(0)" id="nxl-lavel-mega-menu-hide">
                  <i className="feather-arrow-left me-2" />
                  <span>Back</span>
                </a>
              </div>
              {/*! [Start] nxl-lavel-mega-menu-wrapper !*/}
              <div className="nxl-lavel-mega-menu-wrapper d-flex gap-3">
                {/*! [Start] nxl-lavel-menu !*/}
                 
                {/*! [End] nxl-lavel-menu !*/}
                {/*! [Start] nxl-h-item nxl-mega-menu !*/}
                
                {/*! [End] nxl-h-item nxl-mega-menu !*/}
              </div>
              {/*! [End] nxl-lavel-mega-menu-wrapper !*/}
            </div>
            {/*! [End] nxl-lavel-mega-menu !*/}
          </div>
          {/*! [End] Header Left !*/}
          {/*! [Start] Header Right !*/}
          <div className="header-right ms-auto">
            <div className="d-flex align-items-center">
              {/* check in button */}
              <div  >
              { attendanceStatus == "checkedIn" ?   <button className="btn btn-danger" onClick={ checkout}>
                  check out
                  </button> :<button className="btn btn-success btn-pill" onClick={ handleCheckIn}>
                  check in
                  </button> }
                  
                  
                
              </div>  
              {/* check in button ends */}
              <div className="nxl-h-item dark-light-theme">
                <a
                  href="javascript:void(0);"
                  className="nxl-head-link me-0 dark-button"
                >
                  <i className="feather-moon" />
                </a>
                <a
                  href="javascript:void(0);"
                  className="nxl-head-link me-0 light-button"
                  style={{ display: "none" }}
                >
                  <i className="feather-sun" />
                </a>
              </div>  
                  
              <div className="dropdown nxl-h-item">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                  role="button"
                  data-bs-auto-close="outside"
                >
                  <img
                    src="/src/assets/images/avatar/image.png"
                    alt="image"
                    className="img-fluid user-avtar me-0"
                  />
                </a>
                <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-user-dropdown">
                  <div className="dropdown-header">
                    <div className="d-flex align-items-center">
                      <img
                        src="/src/assets/images/avatar/image.png"
                        alt="user-image"
                        className="img-fluid user-avtar"
                      />
                      <div>
                        <h6 className="text-dark mb-0">
                          {emp?.firstName} {emp?.lastName}
                          <br></br>
                          <span className="badge bg-soft-success text-success ms-1">
                            {emp?.role}
                          </span>
                        </h6>
                        <span className="fs-12 fw-medium text-muted">
                          {emp?.email}
                        </span>
                      </div>
                    </div>
                  </div>

                  <a href="javascript:void(0);" className="dropdown-item">
                    <i className="feather-user" />
                    <Link to={`/employees/${user?.employeeId}`} style={{color:'inherit',textDecoration:'none'}}>
                    <span>Profile Details</span>
                    </Link>
                    
                  </a>
                  {/* <a href="javascript:void(0);" className="dropdown-item">
                  <i className="feather-activity" />
                  <span>Activity Feed</span>
                </a>
                <a href="javascript:void(0);" className="dropdown-item">
                  <i className="feather-dollar-sign" />
                  <span>Billing Details</span>
                </a>
                <a href="javascript:void(0);" className="dropdown-item">
                  <i className="feather-bell" />
                  <span>Notifications</span>
                </a>
                <a href="javascript:void(0);" className="dropdown-item">
                  <i className="feather-settings" />
                  <span>Account Settings</span>
                </a> */}
                  <div className="dropdown-divider" />
                  <a
                    onClick={() => {
                      logout();
                      navigate("/login");
                    }}
                    className="dropdown-item"
                    style={{cursor:"pointer"}}
                  >
                    <i className="feather-log-out" />
                    <span>Logout</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*! [End] Header Right !*/}
        </div>
      </header>
      {/*! ================================================================ !*/}
      {/*! [End] Header !*/}
    </>
  );
}
export default Menu;
