import Footer from "../Footer";
import Menu from "../Menu";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Department() {
    const [dept, setDept] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/department").
            then((response) => {
                setDept(response.data);
            }).catch((error) => {
                console.log(error);
            });
    }, [])

    const updateDepartment = (e) => {
        //logic to update department
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
            <div className="main-content">

                <div className="row">


                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="card stretch stretch-full">
                            <div className="card-header">
                                <h5 className="card-title">Departments</h5>
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

                                            {dept.map((dept) => (
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center gap-3">

                                                            <Link to={`/employees/${dept.id}`} >

                                                                <span className="d-block">{dept.name}  </span>
                                                                <span className="fs-12 d-block fw-normal text-muted">

                                                                </span>
                                                            </Link>
                                                        </div>
                                                    </td>





                                                    <td >
                                                        <div className="diplay-inline">
                                                            <button onClick={updateDepartment} className="btn btn-primary">Update </button>
                                                            <button onClick={updateDepartment} className="btn btn-danger">Delete </button>
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
export default Department;