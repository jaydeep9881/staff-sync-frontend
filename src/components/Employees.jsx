import Footer from "./Footer";
import Menu from "./Menu";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Employees() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/employees").
      then((response) => {
        setEmployees(response.data);
      }).catch((error) => {
        console.log(error);
      });
  }, [])
  return (
    <>
      <div className="page-header d-flex  fixed-header ">
        <div className="page-header-left d-flex align-items-center">
          <div className="page-header-title">
            <h5 className="m-b-10">Employee</h5>
          </div>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">

              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">employee list</li>
          </ul>
        </div>
        <br></br>

      </div>
      <div className="main-content">

        <div className="row">


          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="card stretch stretch-full">
              <div className="card-header">
                <h5 className="card-title">Employees</h5>
                <div className="card-header-action">
                  <div className="card-header-btn">

                    <div data-bs-toggle="tooltip" title="Refresh">
                      <a
                        href="javascript:void(0);"
                        className="avatar-text avatar-xs bg-warning"
                        data-bs-toggle="refresh"
                      >
                        {" "}
                      </a>
                    </div>
                    <div data-bs-toggle="tooltip" title="Maximize/Minimize">
                      <a
                        href="javascript:void(0);"
                        className="avatar-text avatar-xs bg-success"
                        data-bs-toggle="expand"
                      >
                        {" "}
                      </a>
                    </div>
                  </div>

                </div>
              </div>
              <div className="card-body custom-card-action p-0">
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead>
                      <tr className="border-b">
                        <th scope="row">Name</th>
                        <th>Role</th>
                        <th>departmentId</th>
                        <th>salary</th>
                        <th>Join Date</th>
                        <th>Status</th>
                        <th className="text-end">Actions</th>
                      </tr>
                    </thead>
                    <tbody>

                      {employees.map((emp) => (
                        <tr>
                          <td>
                            <div className="d-flex align-items-center gap-3">

                              <Link to={`/employees/${emp.id}`} >

                                <span className="d-block">{emp.firstName} {emp.lastName}</span>
                                <span className="fs-12 d-block fw-normal text-muted">
                                  {emp.email}
                                </span>
                              </Link>
                            </div>
                          </td>
                          <td>
                            <span >{emp.role}</span>
                          </td>
                          <td>{emp.departmentName}</td>
                          <td>{emp.salary}.00</td>
                          <td>{emp.joiningDate}</td>
                          <td>
                            {emp.isActive ? <span className="badge bg-soft-success text-success   ">Active </span> :
                              <span className="badge bg-soft-danger text-danger   ">InActive</span>}
                          </td>

                          <td style={{ textAlign: 'center' }}>
                            <div className="dropdown d-inline-block ">
                              <a

                                href="javascript:void(0);"
                                role="button"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bi bi-three-dots-vertical" style={{ pointerEvents: 'none' }} />
                              </a>
                              <ul className="dropdown-menu">
                                <li>
                                  <a className="dropdown-item" href="javascript:void(0);">
                                    Update
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="javascript:void(0);">
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>


                      ))}

                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>)
}
export default Employees;