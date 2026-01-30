// import '../assets/images/favicon.ico';
// import '../assets/css/bootstrap.min.css';
// import '../assets/vendors/css/vendors.min.css';
// import '../assets/vendors/css/daterangepicker.min.css';
// import '../assets/css/theme.min.css';
import { Link, Outlet } from 'react-router-dom';
function Menu() {
  return (<>

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
              <a href="javascript:void(0);" className="nxl-link">
                <span className="nxl-micon">
                  <i className="feather-airplay" />
                </span>
                <span className="nxl-mtext">Dashboards</span>
                <span className="nxl-arrow">
                  <i className="feather-chevron-right" />
                </span>
              </a>
              <ul className="nxl-submenu">
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
              </ul>
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
                <li className="nxl-item">
                  <a className="nxl-link" href="customers-create.html">
                    update Employee
                  </a>
                </li>
              </ul>
            </li>
            <li className="nxl-item nxl-hasmenu">
              <a href="javascript:void(0);" className="nxl-link">
                <span className="nxl-micon">
                  <i className="feather-briefcase" />
                </span>
                <span className="nxl-mtext">Departments</span>
                <span className="nxl-arrow">
                  <i className="feather-chevron-right" />
                </span>
              </a>
              <ul className="nxl-submenu">
                <li className="nxl-item">
                  <Link to="/departments" className="nxl-link">

                    Detail

                  </Link>
                </li>
                <li className="nxl-item">
                  <a className="nxl-link" href="customers-view.html">
                    Add Department
                  </a>
                </li>
                <li className="nxl-item">
                  <a className="nxl-link" href="customers-create.html">
                    Update Department
                  </a>
                </li>
              </ul>
            </li>
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
              <div className="dropdown nxl-h-item nxl-lavel-menu">
                <a
                  href="javascript:void(0);"
                  className="avatar-text avatar-md bg-primary text-white"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  <i className="feather-plus" />
                </a>
                <div className="dropdown-menu nxl-h-dropdown">
                  <div className="dropdown nxl-level-menu">
                    <a href="javascript:void(0);" className="dropdown-item">
                      <span className="hstack">
                        <i className="feather-send" />
                        <span>Applications</span>
                      </span>
                      <i className="feather-chevron-right ms-auto me-0" />
                    </a>
                    <div className="dropdown-menu nxl-h-dropdown">
                      <a href="apps-chat.html" className="dropdown-item">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Chat</span>
                      </a>
                      <a href="apps-email.html" className="dropdown-item">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Email</span>
                      </a>
                      <a href="apps-tasks.html" className="dropdown-item">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Tasks</span>
                      </a>
                      <a href="apps-notes.html" className="dropdown-item">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Notes</span>
                      </a>
                      <a href="apps-storage.html" className="dropdown-item">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Storage</span>
                      </a>
                      <a href="apps-calendar.html" className="dropdown-item">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Calendar</span>
                      </a>
                    </div>
                  </div>
                  <div className="dropdown-divider" />
                  <div className="dropdown nxl-level-menu">
                    <a href="javascript:void(0);" className="dropdown-item">
                      <span className="hstack">
                        <i className="feather-cast" />
                        <span>Reports</span>
                      </span>
                      <i className="feather-chevron-right ms-auto me-0" />
                    </a>
                    <div className="dropdown-menu nxl-h-dropdown">
                      <a href="reports-sales.html" className="dropdown-item">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Sales Report</span>
                      </a>
                      <a href="reports-leads.html" className="dropdown-item">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Leads Report</span>
                      </a>
                      <a href="reports-project.html" className="dropdown-item">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Project Report</span>
                      </a>
                      <a href="reports-timesheets.html" className="dropdown-item">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Timesheets Report</span>
                      </a>
                    </div>
                  </div>
                  <div className="dropdown nxl-level-menu">
                    <a href="javascript:void(0);" className="dropdown-item">
                      <span className="hstack">
                        <i className="feather-at-sign" />
                        <span>Proposal</span>
                      </span>
                      <i className="feather-chevron-right ms-auto me-0" />
                    </a>
                    <div className="dropdown-menu nxl-h-dropdown">
                      <a href="proposal.html" className="dropdown-item">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Proposal</span>
                      </a>
                      <a href="proposal-view.html" className="dropdown-item">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Proposal View</span>
                      </a>
                      <a href="proposal-edit.html" className="dropdown-item">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Proposal Edit</span>
                      </a>
                      <a href="proposal-create.html" className="dropdown-item">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Proposal Create</span>
                      </a>
                    </div>
                  </div>
                  <div className="dropdown nxl-level-menu">
                    <a href="javascript:void(0);" className="dropdown-item">
                      <span className="hstack">
                        <i className="feather-dollar-sign" />
                        <span>Payment</span>
                      </span>
                      <i className="feather-chevron-right ms-auto me-0" />
                    </a>
                    <div className="dropdown-menu nxl-h-dropdown">
                      <a href="payment.html" className="dropdown-item">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Payment</span>
                      </a>
                      <a href="invoice-view.html" className="dropdown-item">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Invoice View</span>
                      </a>
                      <a href="invoice-create.html" className="dropdown-item">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Invoice Create</span>
                      </a>
                    </div>
                  </div>
                  <div className="dropdown nxl-level-menu">
                    <a href="javascript:void(0);" className="dropdown-item">
                      <span className="hstack">
                        <i className="feather-users" />
                        <span>Customers</span>
                      </span>
                      <i className="feather-chevron-right ms-auto me-0" />
                    </a>
                    <div className="dropdown-menu nxl-h-dropdown">
                      <a href="customers.html" className="dropdown-item">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Customers</span>
                      </a>
                      <a href="customers-view.html" className="dropdown-item">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Customers View</span>
                      </a>
                      <a href="customers-create.html" className="dropdown-item">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Customers Create</span>
                      </a>
                    </div>
                  </div>
                  <div className="dropdown nxl-level-menu">
                    <a href="javascript:void(0);" className="dropdown-item">
                      <span className="hstack">
                        <i className="feather-alert-circle" />
                        <span>Leads</span>
                      </span>
                      <i className="feather-chevron-right ms-auto me-0" />
                    </a>
                    <div className="dropdown-menu nxl-h-dropdown">
                      <a href="leads.html" className="dropdown-item">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Leads</span>
                      </a>
                      <a href="leads-view.html" className="dropdown-item">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Leads View</span>
                      </a>
                      <a href="leads-create.html" className="dropdown-item">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Leads Create</span>
                      </a>
                    </div>
                  </div>
                  <div className="dropdown nxl-level-menu">
                    <a href="javascript:void(0);" className="dropdown-item">
                      <span className="hstack">
                        <i className="feather-briefcase" />
                        <span>Projects</span>
                      </span>
                      <i className="feather-chevron-right ms-auto me-0" />
                    </a>
                    <div className="dropdown-menu nxl-h-dropdown">
                      <a href="projects.html" className="dropdown-item">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Projects</span>
                      </a>
                      <a href="projects-view.html" className="dropdown-item">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Projects View</span>
                      </a>
                      <a href="projects-create.html" className="dropdown-item">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Projects Create</span>
                      </a>
                    </div>
                  </div>
                  <div className="dropdown nxl-level-menu">
                    <a href="javascript:void(0);" className="dropdown-item">
                      <span className="hstack">
                        <i className="feather-layout" />
                        <span>Widgets</span>
                      </span>
                      <i className="feather-chevron-right ms-auto me-0" />
                    </a>
                    <div className="dropdown-menu nxl-h-dropdown">
                      <a href="widgets-lists.html" className="dropdown-item">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Lists</span>
                      </a>
                      <a href="widgets-tables.html" className="dropdown-item">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Tables</span>
                      </a>
                      <a href="widgets-charts.html" className="dropdown-item">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Charts</span>
                      </a>
                      <a href="widgets-statistics.html" className="dropdown-item">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Statistics</span>
                      </a>
                    </div>
                  </div>
                  <div className="dropdown nxl-level-menu">
                    <a href="javascript:void(0);" className="dropdown-item">
                      <span className="hstack">
                        <i className="feather-power" />
                        <span>Authentication</span>
                      </span>
                      <i className="feather-chevron-right ms-auto me-0" />
                    </a>
                    <div className="dropdown-menu nxl-h-dropdown">
                      <div className="dropdown nxl-level-menu">
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="hstack">
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                            <span>Login</span>
                          </span>
                          <i className="feather-chevron-right ms-auto me-0" />
                        </a>
                        <div className="dropdown-menu nxl-h-dropdown">
                          <a
                            href="./auth-login-cover.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                            <span>Cover</span>
                          </a>
                          <a
                            href="./auth-login-minimal.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                            <span>Minimal</span>
                          </a>
                          <a
                            href="./auth-login-creative.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                            <span>Creative</span>
                          </a>
                        </div>
                      </div>
                      <div className="dropdown nxl-level-menu">
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="hstack">
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                            <span>Register</span>
                          </span>
                          <i className="feather-chevron-right ms-auto me-0" />
                        </a>
                        <div className="dropdown-menu nxl-h-dropdown">
                          <a
                            href="./auth-register-cover.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                            <span>Cover</span>
                          </a>
                          <a
                            href="./auth-register-minimal.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                            <span>Minimal</span>
                          </a>
                          <a
                            href="./auth-register-creative.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                            <span>Creative</span>
                          </a>
                        </div>
                      </div>
                      <div className="dropdown nxl-level-menu">
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="hstack">
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                            <span>Error-404</span>
                          </span>
                          <i className="feather-chevron-right ms-auto me-0" />
                        </a>
                        <div className="dropdown-menu nxl-h-dropdown">
                          <a
                            href="./auth-404-cover.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                            <span>Cover</span>
                          </a>
                          <a
                            href="./auth-404-minimal.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                            <span>Minimal</span>
                          </a>
                          <a
                            href="./auth-404-creative.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                            <span>Creative</span>
                          </a>
                        </div>
                      </div>
                      <div className="dropdown nxl-level-menu">
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="hstack">
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                            <span>Reset Pass</span>
                          </span>
                          <i className="feather-chevron-right ms-auto me-0" />
                        </a>
                        <div className="dropdown-menu nxl-h-dropdown">
                          <a
                            href="./auth-reset-cover.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                            <span>Cover</span>
                          </a>
                          <a
                            href="./auth-reset-minimal.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                            <span>Minimal</span>
                          </a>
                          <a
                            href="./auth-reset-creative.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                            <span>Creative</span>
                          </a>
                        </div>
                      </div>
                      <div className="dropdown nxl-level-menu">
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="hstack">
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                            <span>Verify OTP</span>
                          </span>
                          <i className="feather-chevron-right ms-auto me-0" />
                        </a>
                        <div className="dropdown-menu nxl-h-dropdown">
                          <a
                            href="./auth-verify-cover.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                            <span>Cover</span>
                          </a>
                          <a
                            href="./auth-verify-minimal.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                            <span>Minimal</span>
                          </a>
                          <a
                            href="./auth-verify-creative.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                            <span>Creative</span>
                          </a>
                        </div>
                      </div>
                      <div className="dropdown nxl-level-menu">
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="hstack">
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                            <span>Maintenance</span>
                          </span>
                          <i className="feather-chevron-right ms-auto me-0" />
                        </a>
                        <div className="dropdown-menu nxl-h-dropdown">
                          <a
                            href="./auth-maintenance-cover.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                            <span>Cover</span>
                          </a>
                          <a
                            href="./auth-maintenance-minimal.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                            <span>Minimal</span>
                          </a>
                          <a
                            href="./auth-maintenance-creative.html"
                            className="dropdown-item"
                          >
                            <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                            <span>Creative</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-divider" />
                  <a href="javascript:void(0);" className="dropdown-item">
                    <i className="feather-plus" />
                    <span>Add New Items</span>
                  </a>
                </div>
              </div>
              {/*! [End] nxl-lavel-menu !*/}
              {/*! [Start] nxl-h-item nxl-mega-menu !*/}
              <div className="dropdown nxl-h-item nxl-mega-menu">
                <a
                  href="javascript:void(0);"
                  className="btn btn-light-brand"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  {" "}
                  Mega Menu{" "}
                </a>
                <div
                  className="dropdown-menu nxl-h-dropdown"
                  id="mega-menu-dropdown"
                >
                  <div className="d-lg-flex align-items-start">
                    {/*! [Start] nxl-mega-menu-tabs !*/}
                    <div
                      className="nav flex-column nxl-mega-menu-tabs"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <button
                        className="nav-link active nxl-mega-menu-sm"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-general"
                        type="button"
                        role="tab"
                      >
                        <span className="menu-icon">
                          <i className="feather-airplay" />
                        </span>
                        <span className="menu-title">General</span>
                        <span className="menu-arrow">
                          <i className="feather-chevron-right" />
                        </span>
                      </button>
                      <button
                        className="nav-link nxl-mega-menu-md"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-applications"
                        type="button"
                        role="tab"
                      >
                        <span className="menu-icon">
                          <i className="feather-send" />
                        </span>
                        <span className="menu-title">Applications</span>
                        <span className="menu-arrow">
                          <i className="feather-chevron-right" />
                        </span>
                      </button>
                      <button
                        className="nav-link nxl-mega-menu-lg"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-integrations"
                        type="button"
                        role="tab"
                      >
                        <span className="menu-icon">
                          <i className="feather-link-2" />
                        </span>
                        <span className="menu-title">Integrations</span>
                        <span className="menu-arrow">
                          <i className="feather-chevron-right" />
                        </span>
                      </button>
                      <button
                        className="nav-link nxl-mega-menu-xl"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-components"
                        type="button"
                        role="tab"
                      >
                        <span className="menu-icon">
                          <i className="feather-layers" />
                        </span>
                        <span className="menu-title">Components</span>
                        <span className="menu-arrow">
                          <i className="feather-chevron-right" />
                        </span>
                      </button>
                      <button
                        className="nav-link nxl-mega-menu-xxl"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-authentication"
                        type="button"
                        role="tab"
                      >
                        <span className="menu-icon">
                          <i className="feather-cpu" />
                        </span>
                        <span className="menu-title">Authentication</span>
                        <span className="menu-arrow">
                          <i className="feather-chevron-right" />
                        </span>
                      </button>
                      <button
                        className="nav-link nxl-mega-menu-full"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-miscellaneous"
                        type="button"
                        role="tab"
                      >
                        <span className="menu-icon">
                          <i className="feather-bluetooth" />
                        </span>
                        <span className="menu-title">Miscellaneous</span>
                        <span className="menu-arrow">
                          <i className="feather-chevron-right" />
                        </span>
                      </button>
                    </div>
                    {/*! [End] nxl-mega-menu-tabs !*/}
                    {/*! [Start] nxl-mega-menu-tabs-content !*/}
                    <div className="tab-content nxl-mega-menu-tabs-content">
                      {/*! [Start] v-pills-general !*/}
                      <div
                        className="tab-pane fade show active"
                        id="v-pills-general"
                        role="tabpanel"
                      >
                        <div className="mb-4 rounded-3 border">
                          <img
                            src="assets/images/banner/mockup.png"
                            alt=""
                            className="img-fluid rounded-3"
                          />
                        </div>
                        <h6 className="fw-bolder">
                          Duralux - Admin Dashboard UiKit
                        </h6>
                        <p className="fs-12 fw-normal text-muted text-truncate-3-line">
                          Get started Duralux with Duralux up and running. Duralux
                          bootstrap template docs helps you to get started with
                          simple html codes.
                        </p>
                        <a
                          href="javascript:void(0);"
                          className="fs-13 fw-bold text-primary"
                        >
                          Get Started →
                        </a>
                      </div>
                      {/*! [End] v-pills-general !*/}
                      {/*! [Start] v-pills-applications !*/}
                      <div
                        className="tab-pane fade"
                        id="v-pills-applications"
                        role="tabpanel"
                      >
                        <div className="row g-4">
                          <div className="col-lg-6">
                            <h6 className="dropdown-item-title">Applications</h6>
                            <a href="apps-chat.html" className="dropdown-item">
                              <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                              <span>Chat</span>
                            </a>
                            <a href="apps-email.html" className="dropdown-item">
                              <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                              <span>Email</span>
                            </a>
                            <a href="apps-tasks.html" className="dropdown-item">
                              <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                              <span>Tasks</span>
                            </a>
                            <a href="apps-notes.html" className="dropdown-item">
                              <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                              <span>Notes</span>
                            </a>
                            <a href="apps-storage.html" className="dropdown-item">
                              <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                              <span>Storage</span>
                            </a>
                            <a
                              href="apps-calendar.html"
                              className="dropdown-item"
                            >
                              <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                              <span>Calendar</span>
                            </a>
                          </div>
                          <div className="col-lg-6">
                            <div className="nxl-mega-menu-image">
                              <img
                                src="assets/images/general/full-avatar.png"
                                alt=""
                                className="img-fluid full-user-avtar"
                              />
                            </div>
                          </div>
                        </div>
                        <hr className="border-top-dashed" />
                        <div className="d-lg-flex align-items-center justify-content-between">
                          <div>
                            <h6 className="menu-item-heading text-truncate-1-line">
                              Need more application?
                            </h6>
                            <p className="fs-12 text-muted mb-0 text-truncate-3-line">
                              We are ready to build custom applications.
                            </p>
                          </div>
                          <div className="mt-2 mt-lg-0">
                            <a
                              href="mailto:flexilecode@gmail.com"
                              className="fs-13 fw-bold text-primary"
                            >
                              Contact Us →
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*! [End] v-pills-applications !*/}
                      {/*! [Start] v-pills-integrations !*/}
                      <div
                        className="tab-pane fade"
                        id="v-pills-integrations"
                        role="tabpanel"
                      >
                        <div className="row g-lg-4 nxl-mega-menu-integrations">
                          <div className="col-lg-12 d-lg-flex align-items-center justify-content-between mb-4 mb-lg-0">
                            <div>
                              <h6 className="fw-bolder text-dark">
                                Integrations
                              </h6>
                              <p className="fs-12 text-muted mb-0">
                                Connect amazing apps on your bucket.
                              </p>
                            </div>
                            <div className="mt-2 mt-lg-0">
                              <a
                                href="javascript:void(0);"
                                className="fs-13 text-primary"
                              >
                                Add New →
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <div className="menu-item-icon">
                                <img
                                  src="assets/images/brand/app-store.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="menu-item-title">App Store</div>
                              <div className="menu-item-arrow">
                                <i className="feather-arrow-right" />
                              </div>
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <div className="menu-item-icon">
                                <img
                                  src="assets/images/brand/spotify.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="menu-item-title">Spotify</div>
                              <div className="menu-item-arrow">
                                <i className="feather-arrow-right" />
                              </div>
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <div className="menu-item-icon">
                                <img
                                  src="assets/images/brand/figma.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="menu-item-title">Figma</div>
                              <div className="menu-item-arrow">
                                <i className="feather-arrow-right" />
                              </div>
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <div className="menu-item-icon">
                                <img
                                  src="assets/images/brand/shopify.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="menu-item-title">Shopify</div>
                              <div className="menu-item-arrow">
                                <i className="feather-arrow-right" />
                              </div>
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <div className="menu-item-icon">
                                <img
                                  src="assets/images/brand/paypal.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="menu-item-title">Paypal</div>
                              <div className="menu-item-arrow">
                                <i className="feather-arrow-right" />
                              </div>
                            </a>
                          </div>
                          <div className="col-lg-4">
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <div className="menu-item-icon">
                                <img
                                  src="assets/images/brand/gmail.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="menu-item-title">Gmail</div>
                              <div className="menu-item-arrow">
                                <i className="feather-arrow-right" />
                              </div>
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <div className="menu-item-icon">
                                <img
                                  src="assets/images/brand/dropbox.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="menu-item-title">Dropbox</div>
                              <div className="menu-item-arrow">
                                <i className="feather-arrow-right" />
                              </div>
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <div className="menu-item-icon">
                                <img
                                  src="assets/images/brand/google-drive.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="menu-item-title">Google Drive</div>
                              <div className="menu-item-arrow">
                                <i className="feather-arrow-right" />
                              </div>
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <div className="menu-item-icon">
                                <img
                                  src="assets/images/brand/github.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="menu-item-title">Github</div>
                              <div className="menu-item-arrow">
                                <i className="feather-arrow-right" />
                              </div>
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <div className="menu-item-icon">
                                <img
                                  src="assets/images/brand/gitlab.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="menu-item-title">Gitlab</div>
                              <div className="menu-item-arrow">
                                <i className="feather-arrow-right" />
                              </div>
                            </a>
                          </div>
                          <div className="col-lg-4">
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <div className="menu-item-icon">
                                <img
                                  src="assets/images/brand/facebook.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="menu-item-title">Facebook</div>
                              <div className="menu-item-arrow">
                                <i className="feather-arrow-right" />
                              </div>
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <div className="menu-item-icon">
                                <img
                                  src="assets/images/brand/pinterest.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="menu-item-title">Pinterest</div>
                              <div className="menu-item-arrow">
                                <i className="feather-arrow-right" />
                              </div>
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <div className="menu-item-icon">
                                <img
                                  src="assets/images/brand/instagram.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="menu-item-title">Instagram</div>
                              <div className="menu-item-arrow">
                                <i className="feather-arrow-right" />
                              </div>
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <div className="menu-item-icon">
                                <img
                                  src="assets/images/brand/twitter.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="menu-item-title">Twitter</div>
                              <div className="menu-item-arrow">
                                <i className="feather-arrow-right" />
                              </div>
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <div className="menu-item-icon">
                                <img
                                  src="assets/images/brand/youtube.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="menu-item-title">Youtube</div>
                              <div className="menu-item-arrow">
                                <i className="feather-arrow-right" />
                              </div>
                            </a>
                          </div>
                        </div>
                        <hr className="border-top-dashed" />
                        <p className="fs-13 text-muted mb-0">
                          Need help? Contact our{" "}
                          <a href="javascript:void(0);" className="fst-italic">
                            support center
                          </a>
                        </p>
                      </div>
                      {/*! [End] v-pills-integrations !*/}
                      {/*! [Start] v-pills-components !*/}
                      <div
                        className="tab-pane fade"
                        id="v-pills-components"
                        role="tabpanel"
                      >
                        <div className="row g-4 align-items-center">
                          <div className="col-xl-8">
                            <div className="row g-4">
                              <div className="col-lg-4">
                                <h6 className="dropdown-item-title">
                                  Navigation
                                </h6>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  CRM
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Analytics
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Sales
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Leads
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Projects
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Timesheets
                                </a>
                              </div>
                              <div className="col-lg-4">
                                <h6 className="dropdown-item-title">Pages</h6>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Leads{" "}
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Payments
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Projects
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Proposals
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Customers
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Documentations
                                </a>
                              </div>
                              <div className="col-lg-4">
                                <h6 className="dropdown-item-title">
                                  Authentication
                                </h6>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Login
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Regiser
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Error-404
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Reset Pass
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Verify OTP
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Maintenance
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4">
                            <div className="nxl-mega-menu-image">
                              <img
                                src="assets/images/banner/1.jpg"
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div className="mt-4">
                              <a
                                href="mailto:flexilecode@gmail.com"
                                className="fs-13 fw-bold"
                              >
                                View all resources on Duralux →
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*! [End] v-pills-components !*/}
                      {/*! [Start] v-pills-authentication !*/}
                      <div
                        className="tab-pane fade"
                        id="v-pills-authentication"
                        role="tabpanel"
                      >
                        <div className="row g-4 align-items-center nxl-mega-menu-authentication">
                          <div className="col-xl-8">
                            <div className="row g-4">
                              <div className="col-lg-4">
                                <h6 className="dropdown-item-title">Cover</h6>
                                <a
                                  href="./auth-login-cover.html"
                                  className="dropdown-item"
                                >
                                  <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                                  <span>Login</span>
                                </a>
                                <a
                                  href="./auth-register-cover.html"
                                  className="dropdown-item"
                                >
                                  <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                                  <span>Register</span>
                                </a>
                                <a
                                  href="./auth-404-cover.html"
                                  className="dropdown-item"
                                >
                                  <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                                  <span>Error-404</span>
                                </a>
                                <a
                                  href="./auth-reset-cover.html"
                                  className="dropdown-item"
                                >
                                  <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                                  <span>Reset Pass</span>
                                </a>
                                <a
                                  href="./auth-verify-cover.html"
                                  className="dropdown-item"
                                >
                                  <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                                  <span>Verify OTP</span>
                                </a>
                                <a
                                  href="./auth-maintenance-cover.html"
                                  className="dropdown-item"
                                >
                                  <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                                  <span>Maintenance</span>
                                </a>
                              </div>
                              <div className="col-lg-4">
                                <h6 className="dropdown-item-title">Minimal</h6>
                                <a
                                  href="./auth-login-minimal.html"
                                  className="dropdown-item"
                                >
                                  <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                                  <span>Login</span>
                                </a>
                                <a
                                  href="./auth-register-minimal.html"
                                  className="dropdown-item"
                                >
                                  <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                                  <span>Register</span>
                                </a>
                                <a
                                  href="./auth-404-minimal.html"
                                  className="dropdown-item"
                                >
                                  <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                                  <span>Error-404</span>
                                </a>
                                <a
                                  href="./auth-reset-minimal.html"
                                  className="dropdown-item"
                                >
                                  <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                                  <span>Reset Pass</span>
                                </a>
                                <a
                                  href="./auth-verify-minimal.html"
                                  className="dropdown-item"
                                >
                                  <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                                  <span>Verify OTP</span>
                                </a>
                                <a
                                  href="./auth-maintenance-minimal.html"
                                  className="dropdown-item"
                                >
                                  <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                                  <span>Maintenance</span>
                                </a>
                              </div>
                              <div className="col-lg-4">
                                <h6 className="dropdown-item-title">Creative</h6>
                                <a
                                  href="./auth-login-creative.html"
                                  className="dropdown-item"
                                >
                                  <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                                  <span>Login</span>
                                </a>
                                <a
                                  href="./auth-register-creative.html"
                                  className="dropdown-item"
                                >
                                  <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                                  <span>Register</span>
                                </a>
                                <a
                                  href="./auth-404-creative.html"
                                  className="dropdown-item"
                                >
                                  <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                                  <span>Error-404</span>
                                </a>
                                <a
                                  href="./auth-reset-creative.html"
                                  className="dropdown-item"
                                >
                                  <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                                  <span>Reset Pass</span>
                                </a>
                                <a
                                  href="./auth-verify-creative.html"
                                  className="dropdown-item"
                                >
                                  <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                                  <span>Verify OTP</span>
                                </a>
                                <a
                                  href="./auth-maintenance-creative.html"
                                  className="dropdown-item"
                                >
                                  <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                                  <span>Maintenance</span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4">
                            <div
                              id="carouselResourcesCaptions"
                              className="carousel slide"
                              data-bs-ride="carousel"
                            >
                              <div className="carousel-indicators">
                                <button
                                  type="button"
                                  data-bs-target="#carouselResourcesCaptions"
                                  data-bs-slide-to={0}
                                  className="active"
                                  aria-current="true"
                                />
                                <button
                                  type="button"
                                  data-bs-target="#carouselResourcesCaptions"
                                  data-bs-slide-to={1}
                                />
                                <button
                                  type="button"
                                  data-bs-target="#carouselResourcesCaptions"
                                  data-bs-slide-to={2}
                                />
                                <button
                                  type="button"
                                  data-bs-target="#carouselResourcesCaptions"
                                  data-bs-slide-to={3}
                                />
                                <button
                                  type="button"
                                  data-bs-target="#carouselResourcesCaptions"
                                  data-bs-slide-to={4}
                                />
                                <button
                                  type="button"
                                  data-bs-target="#carouselResourcesCaptions"
                                  data-bs-slide-to={5}
                                />
                              </div>
                              <div className="carousel-inner rounded-3">
                                <div className="carousel-item active">
                                  <div className="nxl-mega-menu-image">
                                    <img
                                      src="assets/images/banner/6.jpg"
                                      alt=""
                                      className="img-fluid d-block w-100"
                                    />
                                  </div>
                                  <div className="carousel-caption">
                                    <h5 className="carousel-caption-title text-truncate-1-line">
                                      Shopify eCommerce Store
                                    </h5>
                                    <p className="carousel-caption-desc">
                                      Some representative placeholder content for
                                      the first slide.
                                    </p>
                                  </div>
                                </div>
                                <div className="carousel-item">
                                  <div className="nxl-mega-menu-image">
                                    <img
                                      src="assets/images/banner/5.jpg"
                                      alt=""
                                      className="img-fluid d-block w-100"
                                    />
                                  </div>
                                  <div className="carousel-caption">
                                    <h5 className="carousel-caption-title text-truncate-1-line">
                                      iOS Apps Development
                                    </h5>
                                    <p className="carousel-caption-desc">
                                      Some representative placeholder content for
                                      the second slide.
                                    </p>
                                  </div>
                                </div>
                                <div className="carousel-item">
                                  <div className="nxl-mega-menu-image">
                                    <img
                                      src="assets/images/banner/4.jpg"
                                      alt=""
                                      className="img-fluid d-block w-100"
                                    />
                                  </div>
                                  <div className="carousel-caption">
                                    <h5 className="carousel-caption-title text-truncate-1-line">
                                      Figma Dashboard Design
                                    </h5>
                                    <p className="carousel-caption-desc">
                                      Some representative placeholder content for
                                      the third slide.
                                    </p>
                                  </div>
                                </div>
                                <div className="carousel-item">
                                  <div className="nxl-mega-menu-image">
                                    <img
                                      src="assets/images/banner/3.jpg"
                                      alt=""
                                      className="img-fluid d-block w-100"
                                    />
                                  </div>
                                  <div className="carousel-caption">
                                    <h5 className="carousel-caption-title text-truncate-1-line">
                                      React Dashboard Design
                                    </h5>
                                    <p className="carousel-caption-desc">
                                      Some representative placeholder content for
                                      the third slide.
                                    </p>
                                  </div>
                                </div>
                                <div className="carousel-item">
                                  <div className="nxl-mega-menu-image">
                                    <img
                                      src="assets/images/banner/2.jpg"
                                      alt=""
                                      className="img-fluid d-block w-100"
                                    />
                                  </div>
                                  <div className="carousel-caption">
                                    <h5 className="carousel-caption-title text-truncate-1-line">
                                      Standup Team Meeting
                                    </h5>
                                    <p className="carousel-caption-desc">
                                      Some representative placeholder content for
                                      the third slide.
                                    </p>
                                  </div>
                                </div>
                                <div className="carousel-item">
                                  <div className="nxl-mega-menu-image">
                                    <img
                                      src="assets/images/banner/1.jpg"
                                      alt=""
                                      className="img-fluid d-block w-100"
                                    />
                                  </div>
                                  <div className="carousel-caption">
                                    <h5 className="carousel-caption-title text-truncate-1-line">
                                      Zoom Team Meeting
                                    </h5>
                                    <p className="carousel-caption-desc">
                                      Some representative placeholder content for
                                      the third slide.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselResourcesCaptions"
                                data-bs-slide="prev"
                              >
                                <span
                                  className="carousel-control-prev-icon"
                                  aria-hidden="true"
                                />
                                <span className="visually-hidden">Previous</span>
                              </button>
                              <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselResourcesCaptions"
                                data-bs-slide="next"
                              >
                                <span
                                  className="carousel-control-next-icon"
                                  aria-hidden="true"
                                />
                                <span className="visually-hidden">Next</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*! [End] v-pills-authentication !*/}
                      {/*! [Start] v-pills-miscellaneous !*/}
                      <div
                        className="tab-pane fade nxl-mega-menu-miscellaneous"
                        id="v-pills-miscellaneous"
                        role="tabpanel"
                      >
                        {/* Nav tabs */}
                        <ul
                          className="nav nav-tabs flex-column flex-lg-row nxl-mega-menu-miscellaneous-tabs"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              data-bs-toggle="tab"
                              data-bs-target="#v-pills-projects"
                              type="button"
                              role="tab"
                            >
                              <span className="menu-icon">
                                <i className="feather-cast" />
                              </span>
                              <span className="menu-title">Projects</span>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              data-bs-toggle="tab"
                              data-bs-target="#v-pills-services"
                              type="button"
                              role="tab"
                            >
                              <span className="menu-icon">
                                <i className="feather-check-square" />
                              </span>
                              <span className="menu-title">Services</span>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              data-bs-toggle="tab"
                              data-bs-target="#v-pills-features"
                              type="button"
                              role="tab"
                            >
                              <span className="menu-icon">
                                <i className="feather-airplay" />
                              </span>
                              <span className="menu-title">Features</span>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              data-bs-toggle="tab"
                              data-bs-target="#v-pills-blogs"
                              type="button"
                              role="tab"
                            >
                              <span className="menu-icon">
                                <i className="feather-bold" />
                              </span>
                              <span className="menu-title">Blogs</span>
                            </button>
                          </li>
                        </ul>
                        {/* Tab panes */}
                        <div className="tab-content nxl-mega-menu-miscellaneous-content">
                          <div
                            className="tab-pane fade active show"
                            id="v-pills-projects"
                            role="tabpanel"
                          >
                            <div className="row g-4">
                              <div className="col-xxl-2 d-lg-none d-xxl-block">
                                <h6 className="dropdown-item-title">
                                  Categories
                                </h6>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Support
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Services
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Applicatios
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  eCommerce
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Development
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Miscellaneous
                                </a>
                              </div>
                              <div className="col-xxl-10">
                                <div className="row g-4">
                                  <div className="col-xl-6">
                                    <div className="d-lg-flex align-items-center gap-3">
                                      <div className="wd-150 rounded-3">
                                        <img
                                          src="assets/images/banner/1.jpg"
                                          alt=""
                                          className="img-fluid rounded-3"
                                        />
                                      </div>
                                      <div className="mt-3 mt-lg-0 ms-lg-3 item-text">
                                        <a href="javascript:void(0);">
                                          <h6 className="menu-item-heading text-truncate-1-line">
                                            Shopify eCommerce Store
                                          </h6>
                                        </a>
                                        <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                          Lorem ipsum dolor sit amet, consectetur
                                          adipisicing elit. Sint nam ullam iure
                                          eum sed rerum libero quis doloremque
                                          maiores veritatis?
                                        </p>
                                        <div className="hstack gap-2 mt-3">
                                          <div className="avatar-image avatar-sm">
                                            <img
                                              src="assets/images/avatar/1.png"
                                              alt=""
                                              className="img-fluid"
                                            />
                                          </div>
                                          <a
                                            href="javascript:void(0);"
                                            className="fs-12"
                                          >
                                            Alexandra Della
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-6">
                                    <div className="d-lg-flex align-items-center gap-3">
                                      <div className="wd-150 rounded-3">
                                        <img
                                          src="assets/images/banner/2.jpg"
                                          alt=""
                                          className="img-fluid rounded-3"
                                        />
                                      </div>
                                      <div className="mt-3 mt-lg-0 ms-lg-3 item-text">
                                        <a href="javascript:void(0);">
                                          <h6 className="menu-item-heading text-truncate-1-line">
                                            iOS Apps Development
                                          </h6>
                                        </a>
                                        <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                          Lorem ipsum dolor sit amet, consectetur
                                          adipisicing elit. Sint nam ullam iure
                                          eum sed rerum libero quis doloremque
                                          maiores veritatis?
                                        </p>
                                        <div className="hstack gap-2 mt-3">
                                          <div className="avatar-image avatar-sm">
                                            <img
                                              src="assets/images/avatar/2.png"
                                              alt=""
                                              className="img-fluid"
                                            />
                                          </div>
                                          <a
                                            href="javascript:void(0);"
                                            className="fs-12"
                                          >
                                            Green Cute
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-6">
                                    <div className="d-lg-flex align-items-center gap-3">
                                      <div className="wd-150 rounded-3">
                                        <img
                                          src="assets/images/banner/3.jpg"
                                          alt=""
                                          className="img-fluid rounded-3"
                                        />
                                      </div>
                                      <div className="mt-3 mt-lg-0 ms-lg-3 item-text">
                                        <a href="javascript:void(0);">
                                          <h6 className="menu-item-heading text-truncate-1-line">
                                            Figma Dashboard Design
                                          </h6>
                                        </a>
                                        <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                          Lorem ipsum dolor sit amet, consectetur
                                          adipisicing elit. Sint nam ullam iure
                                          eum sed rerum libero quis doloremque
                                          maiores veritatis?
                                        </p>
                                        <div className="hstack gap-2 mt-3">
                                          <div className="avatar-image avatar-sm">
                                            <img
                                              src="assets/images/avatar/3.png"
                                              alt=""
                                              className="img-fluid"
                                            />
                                          </div>
                                          <a
                                            href="javascript:void(0);"
                                            className="fs-12"
                                          >
                                            Malanie Hanvey
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-6">
                                    <div className="d-lg-flex align-items-center gap-3">
                                      <div className="wd-150 rounded-3">
                                        <img
                                          src="assets/images/banner/4.jpg"
                                          alt=""
                                          className="img-fluid rounded-3"
                                        />
                                      </div>
                                      <div className="mt-3 mt-lg-0 ms-lg-3 item-text">
                                        <a href="javascript:void(0);">
                                          <h6 className="menu-item-heading text-truncate-1-line">
                                            React Dashboard Design
                                          </h6>
                                        </a>
                                        <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                          Lorem ipsum dolor sit amet, consectetur
                                          adipisicing elit. Sint nam ullam iure
                                          eum sed rerum libero quis doloremque
                                          maiores veritatis?
                                        </p>
                                        <div className="hstack gap-2 mt-3">
                                          <div className="avatar-image avatar-sm">
                                            <img
                                              src="assets/images/avatar/4.png"
                                              alt=""
                                              className="img-fluid"
                                            />
                                          </div>
                                          <a
                                            href="javascript:void(0);"
                                            className="fs-12"
                                          >
                                            Kenneth Hune
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="v-pills-services"
                            role="tabpanel"
                          >
                            <div className="row g-4 nxl-mega-menu-miscellaneous-services">
                              <div className="col-xl-8">
                                <div className="row g-4">
                                  <div className="col-lg-6">
                                    <div className="d-flex align-items-start gap-3">
                                      <div className="avatar-text avatar-lg rounded bg-primary text-white">
                                        <i className="feather-bar-chart-2 mx-auto" />
                                      </div>
                                      <div>
                                        <a href="javascript:void(0);">
                                          <h6 className="menu-item-heading text-truncate-1-line">
                                            Analytics Services
                                          </h6>
                                        </a>
                                        <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                          Lorem ipsum dolor sit amet consectetur
                                          adipisicing elit Unde numquam rem
                                          dignissimos. elit Unde numquam rem
                                          dignissimos.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="d-flex align-items-start gap-3">
                                      <div className="avatar-text avatar-lg rounded bg-danger text-white">
                                        <i className="feather-feather mx-auto" />
                                      </div>
                                      <div>
                                        <a href="javascript:void(0);">
                                          <h6 className="menu-item-heading text-truncate-1-line">
                                            Content Writing
                                          </h6>
                                        </a>
                                        <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                          Lorem ipsum dolor sit amet consectetur
                                          adipisicing elit Unde numquam rem
                                          dignissimos. elit Unde numquam rem
                                          dignissimos.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="d-flex align-items-start gap-3">
                                      <div className="avatar-text avatar-lg rounded bg-warning text-white">
                                        <i className="feather-bell mx-auto" />
                                      </div>
                                      <div>
                                        <a href="javascript:void(0);">
                                          <h6 className="menu-item-heading text-truncate-1-line">
                                            SEO (Search Engine Optimization)
                                          </h6>
                                        </a>
                                        <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                          Lorem ipsum dolor sit amet consectetur
                                          adipisicing elit Unde numquam rem
                                          dignissimos. elit Unde numquam rem
                                          dignissimos.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="d-flex align-items-start gap-3">
                                      <div className="avatar-text avatar-lg rounded bg-success text-white">
                                        <i className="feather-shield mx-auto" />
                                      </div>
                                      <div>
                                        <a href="javascript:void(0);">
                                          <h6 className="menu-item-heading text-truncate-1-line">
                                            Security Services
                                          </h6>
                                        </a>
                                        <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                          Lorem ipsum dolor sit amet consectetur
                                          adipisicing elit Unde numquam rem
                                          dignissimos. elit Unde numquam rem
                                          dignissimos.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="d-flex align-items-start gap-3">
                                      <div className="avatar-text avatar-lg rounded bg-teal text-white">
                                        <i className="feather-shopping-cart mx-auto" />
                                      </div>
                                      <div>
                                        <a href="javascript:void(0);">
                                          <h6 className="menu-item-heading text-truncate-1-line">
                                            eCommerce Services
                                          </h6>
                                        </a>
                                        <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                          Lorem ipsum dolor sit amet consectetur
                                          adipisicing elit Unde numquam rem
                                          dignissimos. elit Unde numquam rem
                                          dignissimos.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="d-flex align-items-start gap-3">
                                      <div className="avatar-text avatar-lg rounded bg-dark text-white">
                                        <i className="feather-life-buoy mx-auto" />
                                      </div>
                                      <div>
                                        <a href="javascript:void(0);">
                                          <h6 className="menu-item-heading text-truncate-1-line">
                                            Support Services
                                          </h6>
                                        </a>
                                        <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                          Lorem ipsum dolor sit amet consectetur
                                          adipisicing elit Unde numquam rem
                                          dignissimos. elit Unde numquam rem
                                          dignissimos.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="p-3 bg-soft-dark text-dark rounded d-lg-flex align-items-center justify-content-between">
                                      <div className="fs-13">
                                        <i className="feather-star me-2" />
                                        <span>View all services on Duralux.</span>
                                      </div>
                                      <div className="mt-2 mt-lg-0">
                                        <a
                                          href="javascript:void(0);"
                                          className="fs-13 text-primary"
                                        >
                                          Learn More →
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-4">
                                <div
                                  id="carouselServicesCaptions"
                                  className="carousel slide"
                                  data-bs-ride="carousel"
                                >
                                  <div className="carousel-indicators">
                                    <button
                                      type="button"
                                      data-bs-target="#carouselServicesCaptions"
                                      data-bs-slide-to={0}
                                      className="active"
                                      aria-current="true"
                                    />
                                    <button
                                      type="button"
                                      data-bs-target="#carouselServicesCaptions"
                                      data-bs-slide-to={1}
                                    />
                                    <button
                                      type="button"
                                      data-bs-target="#carouselServicesCaptions"
                                      data-bs-slide-to={2}
                                    />
                                    <button
                                      type="button"
                                      data-bs-target="#carouselServicesCaptions"
                                      data-bs-slide-to={3}
                                    />
                                    <button
                                      type="button"
                                      data-bs-target="#carouselServicesCaptions"
                                      data-bs-slide-to={4}
                                    />
                                    <button
                                      type="button"
                                      data-bs-target="#carouselServicesCaptions"
                                      data-bs-slide-to={5}
                                    />
                                  </div>
                                  <div className="carousel-inner rounded-3">
                                    <div className="carousel-item active">
                                      <div className="nxl-mega-menu-image">
                                        <img
                                          src="assets/images/banner/6.jpg"
                                          alt=""
                                          className="img-fluid d-block w-100"
                                        />
                                      </div>
                                      <div className="carousel-caption">
                                        <h5 className="carousel-caption-title text-truncate-1-line">
                                          Shopify eCommerce Store
                                        </h5>
                                        <p className="carousel-caption-desc">
                                          Some representative placeholder content
                                          for the first slide.
                                        </p>
                                      </div>
                                    </div>
                                    <div className="carousel-item">
                                      <div className="nxl-mega-menu-image">
                                        <img
                                          src="assets/images/banner/5.jpg"
                                          alt=""
                                          className="img-fluid d-block w-100"
                                        />
                                      </div>
                                      <div className="carousel-caption">
                                        <h5 className="carousel-caption-title text-truncate-1-line">
                                          iOS Apps Development
                                        </h5>
                                        <p className="carousel-caption-desc">
                                          Some representative placeholder content
                                          for the second slide.
                                        </p>
                                      </div>
                                    </div>
                                    <div className="carousel-item">
                                      <div className="nxl-mega-menu-image">
                                        <img
                                          src="assets/images/banner/4.jpg"
                                          alt=""
                                          className="img-fluid d-block w-100"
                                        />
                                      </div>
                                      <div className="carousel-caption">
                                        <h5 className="carousel-caption-title text-truncate-1-line">
                                          Figma Dashboard Design
                                        </h5>
                                        <p className="carousel-caption-desc">
                                          Some representative placeholder content
                                          for the third slide.
                                        </p>
                                      </div>
                                    </div>
                                    <div className="carousel-item">
                                      <div className="nxl-mega-menu-image">
                                        <img
                                          src="assets/images/banner/3.jpg"
                                          alt=""
                                          className="img-fluid d-block w-100"
                                        />
                                      </div>
                                      <div className="carousel-caption">
                                        <h5 className="carousel-caption-title text-truncate-1-line">
                                          React Dashboard Design
                                        </h5>
                                        <p className="carousel-caption-desc">
                                          Some representative placeholder content
                                          for the third slide.
                                        </p>
                                      </div>
                                    </div>
                                    <div className="carousel-item">
                                      <div className="nxl-mega-menu-image">
                                        <img
                                          src="assets/images/banner/2.jpg"
                                          alt=""
                                          className="img-fluid d-block w-100"
                                        />
                                      </div>
                                      <div className="carousel-caption">
                                        <h5 className="carousel-caption-title text-truncate-1-line">
                                          Standup Team Meeting
                                        </h5>
                                        <p className="carousel-caption-desc">
                                          Some representative placeholder content
                                          for the third slide.
                                        </p>
                                      </div>
                                    </div>
                                    <div className="carousel-item">
                                      <div className="nxl-mega-menu-image">
                                        <img
                                          src="assets/images/banner/1.jpg"
                                          alt=""
                                          className="img-fluid d-block w-100"
                                        />
                                      </div>
                                      <div className="carousel-caption">
                                        <h5 className="carousel-caption-title text-truncate-1-line">
                                          Zoom Team Meeting
                                        </h5>
                                        <p className="carousel-caption-desc">
                                          Some representative placeholder content
                                          for the third slide.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselServicesCaptions"
                                    data-bs-slide="prev"
                                  >
                                    <span
                                      className="carousel-control-prev-icon"
                                      aria-hidden="true"
                                    />
                                    <span className="visually-hidden">
                                      Previous
                                    </span>
                                  </button>
                                  <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselServicesCaptions"
                                    data-bs-slide="next"
                                  >
                                    <span
                                      className="carousel-control-next-icon"
                                      aria-hidden="true"
                                    />
                                    <span className="visually-hidden">Next</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="v-pills-features"
                            role="tabpanel"
                          >
                            <div className="row g-4 nxl-mega-menu-miscellaneous-features">
                              <div className="col-xl-8">
                                <div className="row g-4">
                                  <div className="col-lg-6">
                                    <div className="d-flex align-items-start gap-3">
                                      <div className="avatar-text avatar-lg bg-soft-primary text-primary border-soft-primary rounded">
                                        <i className="feather-bell mx-auto" />
                                      </div>
                                      <div>
                                        <a href="javascript:void(0);">
                                          <h6 className="menu-item-heading text-truncate-1-line">
                                            Notifications
                                          </h6>
                                        </a>
                                        <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                          Lorem ipsum dolor sit amet consectetur
                                          adipisicing elit Unde numquam rem
                                          dignissimos. elit Unde numquam rem
                                          dignissimos.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="d-flex align-items-start gap-3">
                                      <div className="avatar-text avatar-lg bg-soft-danger text-danger border-soft-danger rounded">
                                        <i className="feather-bar-chart-2 mx-auto" />
                                      </div>
                                      <div>
                                        <a href="javascript:void(0);">
                                          <h6 className="menu-item-heading text-truncate-1-line">
                                            Analytics
                                          </h6>
                                        </a>
                                        <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                          Lorem ipsum dolor sit amet consectetur
                                          adipisicing elit Unde numquam rem
                                          dignissimos. elit Unde numquam rem
                                          dignissimos.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="d-flex align-items-start gap-3">
                                      <div className="avatar-text avatar-lg bg-soft-success text-success border-soft-success rounded">
                                        <i className="feather-link-2 mx-auto" />
                                      </div>
                                      <div>
                                        <a href="javascript:void(0);">
                                          <h6 className="menu-item-heading text-truncate-1-line">
                                            Ingetrations
                                          </h6>
                                        </a>
                                        <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                          Lorem ipsum dolor sit amet consectetur
                                          adipisicing elit Unde numquam rem
                                          dignissimos. elit Unde numquam rem
                                          dignissimos.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="d-flex align-items-start gap-3">
                                      <div className="avatar-text avatar-lg bg-soft-indigo text-indigo border-soft-indigo rounded">
                                        <i className="feather-book mx-auto" />
                                      </div>
                                      <div>
                                        <a href="javascript:void(0);">
                                          <h6 className="menu-item-heading text-truncate-1-line">
                                            Documentations
                                          </h6>
                                        </a>
                                        <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                          Lorem ipsum dolor sit amet consectetur
                                          adipisicing elit Unde numquam rem
                                          dignissimos. elit Unde numquam rem
                                          dignissimos.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="d-flex align-items-start gap-3">
                                      <div className="avatar-text avatar-lg bg-soft-warning text-warning border-soft-warning rounded">
                                        <i className="feather-shield mx-auto" />
                                      </div>
                                      <div>
                                        <a href="javascript:void(0);">
                                          <h6 className="menu-item-heading text-truncate-1-line">
                                            Security
                                          </h6>
                                        </a>
                                        <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                          Lorem ipsum dolor sit amet consectetur
                                          adipisicing elit Unde numquam rem
                                          dignissimos. elit Unde numquam rem
                                          dignissimos.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="d-flex align-items-start gap-3">
                                      <div className="avatar-text avatar-lg bg-soft-teal text-teal border-soft-teal rounded">
                                        <i className="feather-life-buoy mx-auto" />
                                      </div>
                                      <div>
                                        <a href="javascript:void(0);">
                                          <h6 className="menu-item-heading text-truncate-1-line">
                                            Support
                                          </h6>
                                        </a>
                                        <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                          Lorem ipsum dolor sit amet consectetur
                                          adipisicing elit Unde numquam rem
                                          dignissimos. elit Unde numquam rem
                                          dignissimos.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xxl-3 offset-xxl-1 col-xl-4">
                                <div className="nxl-mega-menu-image">
                                  <img
                                    src="assets/images/banner/1.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="mt-4">
                                  <a
                                    href="mailto:flexilecode@gmail.com"
                                    className="fs-13 fw-bold"
                                  >
                                    View all features on Duralux →
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="v-pills-blogs"
                            role="tabpanel"
                          >
                            <div className="row g-4">
                              <div className="col-xxl-2 d-lg-none d-xxl-block">
                                <h6 className="dropdown-item-title">
                                  Categories
                                </h6>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Support
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Services
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Applicatios
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  eCommerce
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Development
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Miscellaneous
                                </a>
                              </div>
                              <div className="col-xxl-10">
                                <div className="row g-4">
                                  <div className="col-xxl-4 col-lg-6">
                                    <div className="d-flex align-items-center gap-3">
                                      <div className="wd-100 rounded-3">
                                        <img
                                          src="assets/images/banner/1.jpg"
                                          alt=""
                                          className="img-fluid rounded-3 border border-3"
                                        />
                                      </div>
                                      <div>
                                        <a href="javascript:void(0);">
                                          <h6 className="menu-item-heading text-truncate-1-line">
                                            Lorem ipsum dolor sit
                                          </h6>
                                        </a>
                                        <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                          Lorem ipsum, dolor sit amet consectetur
                                          adipisicing elit. Eius dolor quo commodi
                                          nisi animi error minus quia aliquam.
                                        </p>
                                        <span className="fs-11 text-gray-500">
                                          26 March, 2023
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xxl-4 col-lg-6">
                                    <div className="d-flex align-items-center gap-3">
                                      <div className="wd-100 rounded-3">
                                        <img
                                          src="assets/images/banner/2.jpg"
                                          alt=""
                                          className="img-fluid rounded-3 border border-3"
                                        />
                                      </div>
                                      <div>
                                        <a href="javascript:void(0);">
                                          <h6 className="menu-item-heading text-truncate-1-line">
                                            Lorem ipsum dolor sit
                                          </h6>
                                        </a>
                                        <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                          Lorem ipsum, dolor sit amet consectetur
                                          adipisicing elit. Eius dolor quo commodi
                                          nisi animi error minus quia aliquam.
                                        </p>
                                        <span className="fs-11 text-gray-500">
                                          26 March, 2023
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xxl-4 col-lg-6">
                                    <div className="d-flex align-items-center gap-3">
                                      <div className="wd-100 rounded-3">
                                        <img
                                          src="assets/images/banner/3.jpg"
                                          alt=""
                                          className="img-fluid rounded-3 border border-3"
                                        />
                                      </div>
                                      <div>
                                        <a href="javascript:void(0);">
                                          <h6 className="menu-item-heading text-truncate-1-line">
                                            Lorem ipsum dolor sit
                                          </h6>
                                        </a>
                                        <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                          Lorem ipsum, dolor sit amet consectetur
                                          adipisicing elit. Eius dolor quo commodi
                                          nisi animi error minus quia aliquam.
                                        </p>
                                        <span className="fs-11 text-gray-500">
                                          26 March, 2023
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xxl-4 col-lg-6">
                                    <div className="d-flex align-items-center gap-3">
                                      <div className="wd-100 rounded-3">
                                        <img
                                          src="assets/images/banner/4.jpg"
                                          alt=""
                                          className="img-fluid rounded-3 border border-3"
                                        />
                                      </div>
                                      <div>
                                        <a href="javascript:void(0);">
                                          <h6 className="menu-item-heading text-truncate-1-line">
                                            Lorem ipsum dolor sit
                                          </h6>
                                        </a>
                                        <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                          Lorem ipsum, dolor sit amet consectetur
                                          adipisicing elit. Eius dolor quo commodi
                                          nisi animi error minus quia aliquam.
                                        </p>
                                        <span className="fs-11 text-gray-500">
                                          26 March, 2023
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xxl-4 col-lg-6">
                                    <div className="d-flex align-items-center gap-3">
                                      <div className="wd-100 rounded-3">
                                        <img
                                          src="assets/images/banner/5.jpg"
                                          alt=""
                                          className="img-fluid rounded-3 border border-3"
                                        />
                                      </div>
                                      <div>
                                        <a href="javascript:void(0);">
                                          <h6 className="menu-item-heading text-truncate-1-line">
                                            Lorem ipsum dolor sit
                                          </h6>
                                        </a>
                                        <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                          Lorem ipsum, dolor sit amet consectetur
                                          adipisicing elit. Eius dolor quo commodi
                                          nisi animi error minus quia aliquam.
                                        </p>
                                        <span className="fs-11 text-gray-500">
                                          26 March, 2023
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xxl-4 col-lg-6">
                                    <div className="d-flex align-items-center gap-3">
                                      <div className="wd-100 rounded-3">
                                        <img
                                          src="assets/images/banner/6.jpg"
                                          alt=""
                                          className="img-fluid rounded-3 border border-3"
                                        />
                                      </div>
                                      <div>
                                        <a href="javascript:void(0);">
                                          <h6 className="menu-item-heading text-truncate-1-line">
                                            Lorem ipsum dolor sit
                                          </h6>
                                        </a>
                                        <p className="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                          Lorem ipsum, dolor sit amet consectetur
                                          adipisicing elit. Eius dolor quo commodi
                                          nisi animi error minus quia aliquam.
                                        </p>
                                        <span className="fs-11 text-gray-500">
                                          26 March, 2023
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="p-3 bg-soft-dark text-dark rounded d-flex align-items-center justify-content-between gap-4">
                                      <div className="fs-13 text-truncate-1-line">
                                        <i className="feather-star me-2" />
                                        <strong>Version 2.3.2 is out!</strong>
                                        <span>
                                          Learn more about our news and schedule
                                          reporting.
                                        </span>
                                      </div>
                                      <div className="wd-100 text-end">
                                        <a
                                          href="javascript:void(0);"
                                          className="fs-13 text-primary"
                                        >
                                          Learn More →
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*! [End] v-pills-miscellaneous !*/}
                    </div>
                    {/*! [End] nxl-mega-menu-tabs-content !*/}
                  </div>
                </div>
              </div>
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
            <div className="dropdown nxl-h-item nxl-header-search">
              <a
                href="javascript:void(0);"
                className="nxl-head-link me-0"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                <i className="feather-search" />
              </a>
              <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-search-dropdown">
                <div className="input-group search-form">
                  <span className="input-group-text">
                    <i className="feather-search fs-6 text-muted" />
                  </span>
                  <input
                    type="text"
                    className="form-control search-input-field"
                    placeholder="Search...."
                  />
                  <span className="input-group-text">
                    <button type="button" className="btn-close" />
                  </span>
                </div>
                <div className="dropdown-divider mt-0" />
                <div className="search-items-wrapper">
                  <div className="searching-for px-4 py-2">
                    <p className="fs-11 fw-medium text-muted">
                      I'm searching for...
                    </p>
                    <div className="d-flex flex-wrap gap-1">
                      <a
                        href="javascript:void(0);"
                        className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold"
                      >
                        Projects
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold"
                      >
                        Leads
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold"
                      >
                        Contacts
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold"
                      >
                        Inbox
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold"
                      >
                        Invoices
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold"
                      >
                        Tasks
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold"
                      >
                        Customers
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold"
                      >
                        Notes
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold"
                      >
                        Affiliate
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold"
                      >
                        Storage
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold"
                      >
                        Calendar
                      </a>
                    </div>
                  </div>
                  <div className="dropdown-divider" />
                  <div className="recent-result px-4 py-2">
                    <h4 className="fs-13 fw-normal text-gray-600 mb-3">
                      Recnet{" "}
                      <span className="badge small bg-gray-200 rounded ms-1 text-dark">
                        3
                      </span>
                    </h4>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div className="d-flex align-items-center gap-3">
                        <div className="avatar-text rounded">
                          <i className="feather-airplay" />
                        </div>
                        <div>
                          <a
                            href="javascript:void(0);"
                            className="font-body fw-bold d-block mb-1"
                          >
                            CRM dashboard redesign
                          </a>
                          <p className="fs-11 text-muted mb-0">
                            Home / project / crm
                          </p>
                        </div>
                      </div>
                      <div>
                        <a
                          href="javascript:void(0);"
                          className="badge border rounded text-dark"
                        >
                          /<i className="feather-command ms-1 fs-10" />
                        </a>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div className="d-flex align-items-center gap-3">
                        <div className="avatar-text rounded">
                          <i className="feather-file-plus" />
                        </div>
                        <div>
                          <a
                            href="javascript:void(0);"
                            className="font-body fw-bold d-block mb-1"
                          >
                            Create new document
                          </a>
                          <p className="fs-11 text-muted mb-0">
                            Home / tasks / docs
                          </p>
                        </div>
                      </div>
                      <div>
                        <a
                          href="javascript:void(0);"
                          className="badge border rounded text-dark"
                        >
                          N /<i className="feather-command ms-1 fs-10" />
                        </a>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center gap-3">
                        <div className="avatar-text rounded">
                          <i className="feather-user-plus" />
                        </div>
                        <div>
                          <a
                            href="javascript:void(0);"
                            className="font-body fw-bold d-block mb-1"
                          >
                            Invite project colleagues
                          </a>
                          <p className="fs-11 text-muted mb-0">
                            Home / project / invite
                          </p>
                        </div>
                      </div>
                      <div>
                        <a
                          href="javascript:void(0);"
                          className="badge border rounded text-dark"
                        >
                          P /<i className="feather-command ms-1 fs-10" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-divider my-3" />
                  <div className="users-result px-4 py-2">
                    <h4 className="fs-13 fw-normal text-gray-600 mb-3">
                      Users{" "}
                      <span className="badge small bg-gray-200 rounded ms-1 text-dark">
                        5
                      </span>
                    </h4>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div className="d-flex align-items-center gap-3">
                        <div className="avatar-image rounded">
                          <img
                            src="assets/images/avatar/1.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div>
                          <a
                            href="javascript:void(0);"
                            className="font-body fw-bold d-block mb-1"
                          >
                            Alexandra Della
                          </a>
                          <p className="fs-11 text-muted mb-0">
                            alex@example.com
                          </p>
                        </div>
                      </div>
                      <a
                        href="javascript:void(0);"
                        className="avatar-text avatar-md"
                      >
                        <i className="feather-chevron-right" />
                      </a>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div className="d-flex align-items-center gap-3">
                        <div className="avatar-image rounded">
                          <img
                            src="assets/images/avatar/2.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div>
                          <a
                            href="javascript:void(0);"
                            className="font-body fw-bold d-block mb-1"
                          >
                            Green Cute
                          </a>
                          <p className="fs-11 text-muted mb-0">
                            green.cute@outlook.com
                          </p>
                        </div>
                      </div>
                      <a
                        href="javascript:void(0);"
                        className="avatar-text avatar-md"
                      >
                        <i className="feather-chevron-right" />
                      </a>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div className="d-flex align-items-center gap-3">
                        <div className="avatar-image rounded">
                          <img
                            src="assets/images/avatar/3.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div>
                          <a
                            href="javascript:void(0);"
                            className="font-body fw-bold d-block mb-1"
                          >
                            Malanie Hanvey
                          </a>
                          <p className="fs-11 text-muted mb-0">
                            malanie.anvey@outlook.com
                          </p>
                        </div>
                      </div>
                      <a
                        href="javascript:void(0);"
                        className="avatar-text avatar-md"
                      >
                        <i className="feather-chevron-right" />
                      </a>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div className="d-flex align-items-center gap-3">
                        <div className="avatar-image rounded">
                          <img
                            src="assets/images/avatar/4.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div>
                          <a
                            href="javascript:void(0);"
                            className="font-body fw-bold d-block mb-1"
                          >
                            Kenneth Hune
                          </a>
                          <p className="fs-11 text-muted mb-0">
                            kenth.hune@outlook.com
                          </p>
                        </div>
                      </div>
                      <a
                        href="javascript:void(0);"
                        className="avatar-text avatar-md"
                      >
                        <i className="feather-chevron-right" />
                      </a>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-0">
                      <div className="d-flex align-items-center gap-3">
                        <div className="avatar-image rounded">
                          <img
                            src="assets/images/avatar/5.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div>
                          <a
                            href="javascript:void(0);"
                            className="font-body fw-bold d-block mb-1"
                          >
                            Archie Cantones
                          </a>
                          <p className="fs-11 text-muted mb-0">
                            archie.cones@outlook.com
                          </p>
                        </div>
                      </div>
                      <a
                        href="javascript:void(0);"
                        className="avatar-text avatar-md"
                      >
                        <i className="feather-chevron-right" />
                      </a>
                    </div>
                  </div>
                  <div className="dropdown-divider my-3" />
                  <div className="file-result px-4 py-2">
                    <h4 className="fs-13 fw-normal text-gray-600 mb-3">
                      Files{" "}
                      <span className="badge small bg-gray-200 rounded ms-1 text-dark">
                        3
                      </span>
                    </h4>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div className="d-flex align-items-center gap-3">
                        <div className="avatar-image bg-gray-200 rounded">
                          <img
                            src="assets/images/file-icons/css.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div>
                          <a
                            href="javascript:void(0);"
                            className="font-body fw-bold d-block mb-1"
                          >
                            Project Style CSS
                          </a>
                          <p className="fs-11 text-muted mb-0">05.74 MB</p>
                        </div>
                      </div>
                      <a
                        href="javascript:void(0);"
                        className="avatar-text avatar-md"
                      >
                        <i className="feather-download" />
                      </a>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div className="d-flex align-items-center gap-3">
                        <div className="avatar-image bg-gray-200 rounded">
                          <img
                            src="assets/images/file-icons/zip.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div>
                          <a
                            href="javascript:void(0);"
                            className="font-body fw-bold d-block mb-1"
                          >
                            Dashboard Project Zip
                          </a>
                          <p className="fs-11 text-muted mb-0">46.83 MB</p>
                        </div>
                      </div>
                      <a
                        href="javascript:void(0);"
                        className="avatar-text avatar-md"
                      >
                        <i className="feather-download" />
                      </a>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-0">
                      <div className="d-flex align-items-center gap-3">
                        <div className="avatar-image bg-gray-200 rounded">
                          <img
                            src="assets/images/file-icons/pdf.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div>
                          <a
                            href="javascript:void(0);"
                            className="font-body fw-bold d-block mb-1"
                          >
                            Project Document PDF
                          </a>
                          <p className="fs-11 text-muted mb-0">12.85 MB</p>
                        </div>
                      </div>
                      <a
                        href="javascript:void(0);"
                        className="avatar-text avatar-md"
                      >
                        <i className="feather-download" />
                      </a>
                    </div>
                  </div>
                  <div className="dropdown-divider mt-3 mb-0" />
                  <a
                    href="javascript:void(0);"
                    className="p-3 fs-10 fw-bold text-uppercase text-center d-block"
                  >
                    Loar More
                  </a>
                </div>
              </div>
            </div>
            <div className="dropdown nxl-h-item nxl-header-language d-none d-sm-flex">
              <a
                href="javascript:void(0);"
                className="nxl-head-link me-0 nxl-language-link"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                <img
                  src="assets/vendors/img/flags/4x3/us.svg"
                  alt=""
                  className="img-fluid wd-20"
                />
              </a>
              <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-language-dropdown">
                <div className="dropdown-divider mt-0" />
                <div className="language-items-wrapper">
                  <div className="select-language px-4 py-2 hstack justify-content-between gap-4">
                    <div className="lh-lg">
                      <h6 className="mb-0">Select Language</h6>
                      <p className="fs-11 text-muted mb-0">
                        12 languages avaiable!
                      </p>
                    </div>
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-md"
                      data-bs-toggle="tooltip"
                      title="Add Language"
                    >
                      <i className="feather-plus" />
                    </a>
                  </div>
                  <div className="dropdown-divider" />
                  <div className="row px-4 pt-3">
                    <div className="col-sm-4 col-6 language_select">
                      <a
                        href="javascript:void(0);"
                        className="d-flex align-items-center gap-2"
                      >
                        <div className="avatar-image avatar-sm">
                          <img
                            src="assets/vendors/img/flags/1x1/sa.svg"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <span>Arabic</span>
                      </a>
                    </div>
                    <div className="col-sm-4 col-6 language_select">
                      <a
                        href="javascript:void(0);"
                        className="d-flex align-items-center gap-2"
                      >
                        <div className="avatar-image avatar-sm">
                          <img
                            src="assets/vendors/img/flags/1x1/bd.svg"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <span>Bengali</span>
                      </a>
                    </div>
                    <div className="col-sm-4 col-6 language_select">
                      <a
                        href="javascript:void(0);"
                        className="d-flex align-items-center gap-2"
                      >
                        <div className="avatar-image avatar-sm">
                          <img
                            src="assets/vendors/img/flags/1x1/ch.svg"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <span>Chinese</span>
                      </a>
                    </div>
                    <div className="col-sm-4 col-6 language_select">
                      <a
                        href="javascript:void(0);"
                        className="d-flex align-items-center gap-2"
                      >
                        <div className="avatar-image avatar-sm">
                          <img
                            src="assets/vendors/img/flags/1x1/nl.svg"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <span>Dutch</span>
                      </a>
                    </div>
                    <div className="col-sm-4 col-6 language_select active">
                      <a
                        href="javascript:void(0);"
                        className="d-flex align-items-center gap-2"
                      >
                        <div className="avatar-image avatar-sm">
                          <img
                            src="assets/vendors/img/flags/1x1/us.svg"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <span>English</span>
                      </a>
                    </div>
                    <div className="col-sm-4 col-6 language_select">
                      <a
                        href="javascript:void(0);"
                        className="d-flex align-items-center gap-2"
                      >
                        <div className="avatar-image avatar-sm">
                          <img
                            src="assets/vendors/img/flags/1x1/fr.svg"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <span>French</span>
                      </a>
                    </div>
                    <div className="col-sm-4 col-6 language_select">
                      <a
                        href="javascript:void(0);"
                        className="d-flex align-items-center gap-2"
                      >
                        <div className="avatar-image avatar-sm">
                          <img
                            src="assets/vendors/img/flags/1x1/de.svg"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <span>German</span>
                      </a>
                    </div>
                    <div className="col-sm-4 col-6 language_select">
                      <a
                        href="javascript:void(0);"
                        className="d-flex align-items-center gap-2"
                      >
                        <div className="avatar-image avatar-sm">
                          <img
                            src="assets/vendors/img/flags/1x1/in.svg"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <span>Hindi</span>
                      </a>
                    </div>
                    <div className="col-sm-4 col-6 language_select">
                      <a
                        href="javascript:void(0);"
                        className="d-flex align-items-center gap-2"
                      >
                        <div className="avatar-image avatar-sm">
                          <img
                            src="assets/vendors/img/flags/1x1/ru.svg"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <span>Russian</span>
                      </a>
                    </div>
                    <div className="col-sm-4 col-6 language_select">
                      <a
                        href="javascript:void(0);"
                        className="d-flex align-items-center gap-2"
                      >
                        <div className="avatar-image avatar-sm">
                          <img
                            src="assets/vendors/img/flags/1x1/es.svg"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <span>Spanish</span>
                      </a>
                    </div>
                    <div className="col-sm-4 col-6 language_select">
                      <a
                        href="javascript:void(0);"
                        className="d-flex align-items-center gap-2"
                      >
                        <div className="avatar-image avatar-sm">
                          <img
                            src="assets/vendors/img/flags/1x1/tr.svg"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <span>Turkish</span>
                      </a>
                    </div>
                    <div className="col-sm-4 col-6 language_select">
                      <a
                        href="javascript:void(0);"
                        className="d-flex align-items-center gap-2"
                      >
                        <div className="avatar-image avatar-sm">
                          <img
                            src="assets/vendors/img/flags/1x1/pk.svg"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <span>Urdo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nxl-h-item d-none d-sm-flex">
              <div className="full-screen-switcher">
                <a
                  href="javascript:void(0);"
                  className="nxl-head-link me-0"
                  onclick="$('body').fullScreenHelper('toggle');"
                >
                  <i className="feather-maximize maximize" />
                  <i className="feather-minimize minimize" />
                </a>
              </div>
            </div>
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
                className="nxl-head-link me-0"
                data-bs-toggle="dropdown"
                role="button"
                data-bs-auto-close="outside"
              >
                <i className="feather-clock" />
                <span className="badge bg-success nxl-h-badge">2</span>
              </a>
              <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-timesheets-menu">
                <div className="d-flex justify-content-between align-items-center timesheets-head">
                  <h6 className="fw-bold text-dark mb-0">Timesheets</h6>
                  <a
                    href="javascript:void(0);"
                    className="fs-11 text-success text-end ms-auto"
                    data-bs-toggle="tooltip"
                    title="Upcomming Timers"
                  >
                    <i className="feather-clock" />
                    <span>3 Upcomming</span>
                  </a>
                </div>
                <div className="d-flex justify-content-between align-items-center flex-column timesheets-body">
                  <i className="feather-clock fs-1 mb-4" />
                  <p className="text-muted">No started timers found yes!</p>
                  <a
                    href="javascript:void(0);"
                    className="btn btn-sm btn-primary"
                  >
                    Started Timer
                  </a>
                </div>
                <div className="text-center timesheets-footer">
                  <a
                    href="javascript:void(0);"
                    className="fs-13 fw-semibold text-dark"
                  >
                    Alls Timesheets
                  </a>
                </div>
              </div>
            </div>
            <div className="dropdown nxl-h-item">
              <a
                className="nxl-head-link me-3"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                data-bs-auto-close="outside"
              >
                <i className="feather-bell" />
                <span className="badge bg-danger nxl-h-badge">3</span>
              </a>
              <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-notifications-menu">
                <div className="d-flex justify-content-between align-items-center notifications-head">
                  <h6 className="fw-bold text-dark mb-0">Notifications</h6>
                  <a
                    href="javascript:void(0);"
                    className="fs-11 text-success text-end ms-auto"
                    data-bs-toggle="tooltip"
                    title="Make as Read"
                  >
                    <i className="feather-check" />
                    <span>Make as Read</span>
                  </a>
                </div>
                <div className="notifications-item">
                  <img
                    src="assets/images/avatar/2.png"
                    alt=""
                    className="rounded me-3 border"
                  />
                  <div className="notifications-desc">
                    <a
                      href="javascript:void(0);"
                      className="font-body text-truncate-2-line"
                    >
                      {" "}
                      <span className="fw-semibold text-dark">
                        Malanie Hanvey
                      </span>{" "}
                      We should talk about that at lunch!
                    </a>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="notifications-date text-muted border-bottom border-bottom-dashed">
                        2 minutes ago
                      </div>
                      <div className="d-flex align-items-center float-end gap-2">
                        <a
                          href="javascript:void(0);"
                          className="d-block wd-8 ht-8 rounded-circle bg-gray-300"
                          data-bs-toggle="tooltip"
                          title="Make as Read"
                        />
                        <a
                          href="javascript:void(0);"
                          className="text-danger"
                          data-bs-toggle="tooltip"
                          title="Remove"
                        >
                          <i className="feather-x fs-12" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="notifications-item">
                  <img
                    src="assets/images/avatar/3.png"
                    alt=""
                    className="rounded me-3 border"
                  />
                  <div className="notifications-desc">
                    <a
                      href="javascript:void(0);"
                      className="font-body text-truncate-2-line"
                    >
                      {" "}
                      <span className="fw-semibold text-dark">
                        Valentine Maton
                      </span>{" "}
                      You can download the latest invoices now.
                    </a>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="notifications-date text-muted border-bottom border-bottom-dashed">
                        36 minutes ago
                      </div>
                      <div className="d-flex align-items-center float-end gap-2">
                        <a
                          href="javascript:void(0);"
                          className="d-block wd-8 ht-8 rounded-circle bg-gray-300"
                          data-bs-toggle="tooltip"
                          title="Make as Read"
                        />
                        <a
                          href="javascript:void(0);"
                          className="text-danger"
                          data-bs-toggle="tooltip"
                          title="Remove"
                        >
                          <i className="feather-x fs-12" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="notifications-item">
                  <img
                    src="assets/images/avatar/4.png"
                    alt=""
                    className="rounded me-3 border"
                  />
                  <div className="notifications-desc">
                    <a
                      href="javascript:void(0);"
                      className="font-body text-truncate-2-line"
                    >
                      {" "}
                      <span className="fw-semibold text-dark">
                        Archie Cantones
                      </span>{" "}
                      Don't forget to pickup Jeremy after school!
                    </a>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="notifications-date text-muted border-bottom border-bottom-dashed">
                        53 minutes ago
                      </div>
                      <div className="d-flex align-items-center float-end gap-2">
                        <a
                          href="javascript:void(0);"
                          className="d-block wd-8 ht-8 rounded-circle bg-gray-300"
                          data-bs-toggle="tooltip"
                          title="Make as Read"
                        />
                        <a
                          href="javascript:void(0);"
                          className="text-danger"
                          data-bs-toggle="tooltip"
                          title="Remove"
                        >
                          <i className="feather-x fs-12" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center notifications-footer">
                  <a
                    href="javascript:void(0);"
                    className="fs-13 fw-semibold text-dark"
                  >
                    Alls Notifications
                  </a>
                </div>
              </div>
            </div>
            <div className="dropdown nxl-h-item">
              <a
                href="javascript:void(0);"
                data-bs-toggle="dropdown"
                role="button"
                data-bs-auto-close="outside"
              >
                <img
                  src="assets/images/avatar/1.png"
                  alt="user-image"
                  className="img-fluid user-avtar me-0"
                />
              </a>
              <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-user-dropdown">
                <div className="dropdown-header">
                  <div className="d-flex align-items-center">
                    <img
                      src="assets/images/avatar/1.png"
                      alt="user-image"
                      className="img-fluid user-avtar"
                    />
                    <div>
                      <h6 className="text-dark mb-0">
                        Alexandra Della{" "}
                        <span className="badge bg-soft-success text-success ms-1">
                          PRO
                        </span>
                      </h6>
                      <span className="fs-12 fw-medium text-muted">
                        alex@example.com
                      </span>
                    </div>
                  </div>
                </div>
                <div className="dropdown">
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item"
                    data-bs-toggle="dropdown"
                  >
                    <span className="hstack">
                      <i className="wd-10 ht-10 border border-2 border-gray-1 bg-success rounded-circle me-2" />
                      <span>Active</span>
                    </span>
                    <i className="feather-chevron-right ms-auto me-0" />
                  </a>
                  <div className="dropdown-menu">
                    <a href="javascript:void(0);" className="dropdown-item">
                      <span className="hstack">
                        <i className="wd-10 ht-10 border border-2 border-gray-1 bg-warning rounded-circle me-2" />
                        <span>Always</span>
                      </span>
                    </a>
                    <a href="javascript:void(0);" className="dropdown-item">
                      <span className="hstack">
                        <i className="wd-10 ht-10 border border-2 border-gray-1 bg-success rounded-circle me-2" />
                        <span>Active</span>
                      </span>
                    </a>
                    <a href="javascript:void(0);" className="dropdown-item">
                      <span className="hstack">
                        <i className="wd-10 ht-10 border border-2 border-gray-1 bg-danger rounded-circle me-2" />
                        <span>Bussy</span>
                      </span>
                    </a>
                    <a href="javascript:void(0);" className="dropdown-item">
                      <span className="hstack">
                        <i className="wd-10 ht-10 border border-2 border-gray-1 bg-info rounded-circle me-2" />
                        <span>Inactive</span>
                      </span>
                    </a>
                    <a href="javascript:void(0);" className="dropdown-item">
                      <span className="hstack">
                        <i className="wd-10 ht-10 border border-2 border-gray-1 bg-dark rounded-circle me-2" />
                        <span>Disabled</span>
                      </span>
                    </a>
                    <div className="dropdown-divider" />
                    <a href="javascript:void(0);" className="dropdown-item">
                      <span className="hstack">
                        <i className="wd-10 ht-10 border border-2 border-gray-1 bg-primary rounded-circle me-2" />
                        <span>Cutomization</span>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="dropdown-divider" />
                <div className="dropdown">
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item"
                    data-bs-toggle="dropdown"
                  >
                    <span className="hstack">
                      <i className="feather-dollar-sign me-2" />
                      <span>Subscriptions</span>
                    </span>
                    <i className="feather-chevron-right ms-auto me-0" />
                  </a>
                  <div className="dropdown-menu">
                    <a href="javascript:void(0);" className="dropdown-item">
                      <span className="hstack">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Plan</span>
                      </span>
                    </a>
                    <a href="javascript:void(0);" className="dropdown-item">
                      <span className="hstack">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Billings</span>
                      </span>
                    </a>
                    <a href="javascript:void(0);" className="dropdown-item">
                      <span className="hstack">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Referrals</span>
                      </span>
                    </a>
                    <a href="javascript:void(0);" className="dropdown-item">
                      <span className="hstack">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Payments</span>
                      </span>
                    </a>
                    <a href="javascript:void(0);" className="dropdown-item">
                      <span className="hstack">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Statements</span>
                      </span>
                    </a>
                    <div className="dropdown-divider" />
                    <a href="javascript:void(0);" className="dropdown-item">
                      <span className="hstack">
                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                        <span>Subscriptions</span>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="dropdown-divider" />
                <a href="javascript:void(0);" className="dropdown-item">
                  <i className="feather-user" />
                  <span>Profile Details</span>
                </a>
                <a href="javascript:void(0);" className="dropdown-item">
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
                </a>
                <div className="dropdown-divider" />
                <a href="./auth-login-minimal.html" className="dropdown-item">
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