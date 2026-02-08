import Footer from "../Footer";
import Menu from "../Menu";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Department() {
  const [departments, setDepartments] = useState();
  const [show, setShow] = useState(false);
  const [dept, setDept] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/department")
      .then((response) => {
        setDept(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [departments]);
  const handleChange = (e) => {
    setDepartments(e.target.value);
    console.log(departments);
  };

  const updateDepartment = (id) => {
    //logic to update department
    axios
      .put(`http://localhost:8080/department/${id}`, { name: departments })
      .then((response) => {
        setDepartments("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteDepartment = (id) => {
    //logic to delete department
    if (confirm("Are you sure you want to delete this department?")) {
      axios
        .delete(`http://localhost:8080/department/${id}`)
        .then((response) => {
          setDept((prev) => prev.filter((d) => d.id !== id));
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Department deletion cancelled");
    }
  };
  const handleAdd =() =>{
    axios.post(`http://localhost:8080/department`,{name:departments})
    .then((res)=>{
        setShow(false)
        setDepartments("")
        setDept((prev)=>{
           return [...prev, res.data]
           
        })
    })
  }
  return (
    <>
      <div className="page-header d-flex  fixed-header ">
        <div className="page-header-left d-flex align-items-center">
          <div className="page-header-title">
            <h5 className="m-b-10">Department</h5>
          </div>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">Department list</li>
          </ul>
        </div>
        <br></br>
      </div>
      <h1>{departments}</h1>
      <div className="main-content">
        <div className="row">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="card stretch stretch-full">
              <div className="card-header">
                <h5 className="card-title">
                  <button
                    onClick={() => setShow((show) => !show)}
                    className="btn btn-success d-flex align-items-center gap-2 p-0"
                  >
                    <span className="fs-5">+</span>
                    <span>Add Department</span>
                  </button>
                </h5>
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

                        <th className="text-end">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                       { show && <tr>
                          <td>
                            <div className="d-flex align-items-center gap-3">
                              <input
                                type="text"
                                onChange={(e) => handleChange(e)}
                              />

                              <span className="fs-12 d-block fw-normal text-muted"></span>
                            </div>
                          </td>

                          <td>
                            <div className="d-flex gap-2 justify-content-end">
                              <button
                                onClick={handleAdd}
                                className="btn btn-success"
                              >
                                save
                              </button>

                              
                            </div>
                          </td>
                        </tr>
}
                      {dept.map((dept) => (
                        <tr>
                          <td>
                            <div className="d-flex align-items-center gap-3">
                              <input
                                type="text"
                                defaultValue={dept.name}
                                onChange={(e) => handleChange(e)}
                              />

                              <span className="fs-12 d-block fw-normal text-muted"></span>
                            </div>
                          </td>

                          <td>
                            <div className="d-flex gap-2 justify-content-end">
                              <button
                                onClick={() => updateDepartment(dept.id)}
                                className="btn btn-primary"
                              >
                                Update
                              </button>

                              <button
                                onClick={() => deleteDepartment(dept.id)}
                                className="btn btn-danger"
                              >
                                Delete
                              </button>
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
    </>
  );
}
export default Department;
