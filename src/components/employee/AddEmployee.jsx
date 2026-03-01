
import React, { useState, useEffect, use } from 'react';

import axios from 'axios';
function AddEmployee() {
    const [updateData, setUpdateData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        departmentId: "",
        role: "",
        salary: "",
        joiningDate: "",
        city: "",
        about: "",
        website: "",
        mobileNumber: "",
        address: "",
        country: "",
        isActive: true
    });
    const handleChange = (e) => {
        const { name, value, type } = e.target;

        setUpdateData(prev => ({
            ...prev,
            [name]:
                type === "radio"
                    ? value === "true"
                    : ["salary", "departmentId", "mobileNumber"].includes(name)
                        ? Number(value)
                        : value
        }));
    };

    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/department')
            .then((response) => { setDepartments(response.data); })
            .catch((error) => { console.log(error); });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Sending data:", updateData);
        axios.post('http://localhost:8080/employees', updateData)
            .then((response) => {
                // ✅ Check HTTP status or returned data
                if (response.status === 201 || response.status === 200) {
                    alert("Employee added successfully!");
                    console.log("Saved data:", response.data);
                }
            })
            .catch((error) => {
                // ❌ This runs if API fails
                console.error("Error adding employee:", error);
                alert("Failed to add employee", error.response);
            });
    }




    return (

        <>
            <div className="main-content">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card border-top-0">
                            <div className="card-header p-0">
                                {/* Nav tabs */}

                            </div>
                            <div className="tab-content">
                                <div
                                    className="tab-pane fade show active"
                                    id="profileTab"
                                    role="tabpanel"
                                >
                                    <div className="card-body personal-info">
                                        <div className="mb-4 d-flex align-items-center justify-content-between">
                                            <h5 className="fw-bold mb-0 me-4">
                                                <span className="d-block mb-2">Personal Information:</span>
                                                <span className="fs-12 fw-normal text-muted text-truncate-1-line">
                                                    Following information is publicly displayed, be careful!{" "}
                                                </span>
                                            </h5>
                                            <a
                                                href="javascript:void(0);"
                                                className="btn btn-sm btn-light-brand"
                                            >
                                                Add New
                                            </a>
                                        </div>

                                        <form onSubmit={handleSubmit}>
                                            <div className="row mb-4 align-items-center">
                                                <div className="col-lg-4">
                                                    <label htmlFor="fullnameInput" className="fw-semibold">
                                                        First Name:{" "}
                                                    </label>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div className="input-group">
                                                        <div className="input-group-text">
                                                            <i className="feather-user" />
                                                        </div>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="fullnameInput"
                                                            placeholder="Name"
                                                            name="firstName"

                                                            onChange={handleChange}

                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-4 align-items-center">
                                                <div className="col-lg-4">
                                                    <label htmlFor="fullnameInput" className="fw-semibold">
                                                        Last Name:{" "}
                                                    </label>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div className="input-group">
                                                        <div className="input-group-text">
                                                            <i className="feather-user" />
                                                        </div>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="fullnameInput"
                                                            placeholder="Name"
                                                            name="lastName"
                                                            defaultValue={""}
                                                            onChange={handleChange}

                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-4 align-items-center">
                                                <div className="col-lg-4">
                                                    <label htmlFor="mailInput" className="fw-semibold">
                                                        Department:{" "}
                                                    </label>
                                                </div>

                                                <div className="col-lg-8">
                                                    <div className="input-group">
                                                        <div className="input-group-text">
                                                            <i className="feather-mail" />
                                                        </div>
                                                        <select
                                                            className="form-select"
                                                            name="departmentId"
                                                            onChange={handleChange}

                                                        >

                                                            <option value="">Select Department</option>
                                                            {departments.map((dept) => (
                                                                <option key={dept.id} value={dept.id}>
                                                                    {dept.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mb-4 align-items-center">
                                                <div className="col-lg-4">
                                                    <label htmlFor="mailInput" className="fw-semibold">
                                                        Email:{" "}
                                                    </label>
                                                </div>

                                                <div className="col-lg-8">
                                                    <div className="input-group">
                                                        <div className="input-group-text">
                                                            <i className="feather-mail" />
                                                        </div>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="mailInput"
                                                            placeholder="Email"
                                                            name="email"
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mb-4 align-items-center">
                                                <div className="col-lg-4">
                                                    <label htmlFor="phoneInput" className="fw-semibold">
                                                        Phone:{" "}
                                                    </label>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div className="input-group">
                                                        <div className="input-group-text">
                                                            <i className="feather-phone" />
                                                        </div>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="phoneInput"
                                                            placeholder="Phone"
                                                            name='mobileNumber'
                                                            defaultValue={""}
                                                            onChange={handleChange}

                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-4 align-items-center">
                                                <div className="col-lg-4">
                                                    <label htmlFor="mailInput" className="fw-semibold">
                                                        salary:{" "}
                                                    </label>
                                                </div>

                                                <div className="col-lg-8">
                                                    <div className="input-group">
                                                        <div className="input-group-text">
                                                            <i className="feather-dollar-sign" />
                                                        </div>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="mailInput"
                                                            placeholder="salary"
                                                            name="salary"
                                                            defaultValue={""}
                                                            onChange={handleChange}

                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-4 align-items-center">
                                                <div className="col-lg-4">
                                                    <label htmlFor="companyInput" className="fw-semibold">
                                                        country :{" "}
                                                    </label>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div className="input-group">
                                                        <div className="input-group-text">
                                                            <i className="feather-compass" />
                                                        </div>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="companyInput"
                                                            placeholder="Country"
                                                            name='country'
                                                            defaultValue={""}
                                                            onChange={handleChange}

                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-4 align-items-center">
                                                <div className="col-lg-4">
                                                    <label htmlFor="companyInput" className="fw-semibold">
                                                        City :{" "}
                                                    </label>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div className="input-group">
                                                        <div className="input-group-text">
                                                            <i className="feather-compass" />
                                                        </div>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="companyInput"
                                                            placeholder="City"
                                                            name='city'
                                                            defaultValue={""}
                                                            onChange={handleChange}

                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-4 align-items-center">
                                                <div className="col-lg-4">
                                                    <label htmlFor="designationInput" className="fw-semibold">
                                                        Role:{" "}
                                                    </label>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div className="input-group">
                                                        <div className="input-group-text">
                                                            <i className="feather-briefcase" />
                                                        </div>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="designationInput"
                                                            placeholder="Role"
                                                            name='role'
                                                            defaultValue={""}
                                                            onChange={handleChange}

                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-4 align-items-center">
                                                <div className="col-lg-4">
                                                    <label htmlFor="designationInput" className="fw-semibold">
                                                        Active:{" "}
                                                    </label>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div className="input-group align-items-center">
                                                        <div className="input-group-text">
                                                            <i className="feather-user" />
                                                        </div>

                                                        <div className="d-flex gap-3 ms-2">
                                                            <label className="form-check form-check-inline m-0">
                                                                <input
                                                                    type="radio"
                                                                    name="isActive"
                                                                    value="true"

                                                                    onChange={handleChange}
                                                                />
                                                                <span className="form-check-label">Active</span>
                                                            </label>

                                                            <label className="form-check form-check-inline m-0">
                                                                <input
                                                                    type="radio"
                                                                    name="isActive"
                                                                    value="false"

                                                                    onChange={handleChange}
                                                                />
                                                                <span className="form-check-label">Inactive</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mb-4 align-items-center">
                                                <div className="col-lg-4">
                                                    <label htmlFor="websiteInput" className="fw-semibold">
                                                        Website:{" "}
                                                    </label>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div className="input-group">
                                                        <div className="input-group-text">
                                                            <i className="feather-link" />
                                                        </div>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="websiteInput"
                                                            placeholder="Website"
                                                            name='website'
                                                            defaultValue={""}
                                                            onChange={handleChange}

                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mb-4 align-items-center">
                                                <div className="col-lg-4">
                                                    <label htmlFor="addressInput_2" className="fw-semibold">
                                                        Street:{" "}
                                                    </label>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div className="input-group">
                                                        <div className="input-group-text">
                                                            <i className="feather-map-pin" />
                                                        </div>
                                                        <textarea
                                                            className="form-control"
                                                            id="addressInput_2"
                                                            cols={30}
                                                            rows={3}
                                                            placeholder="Address"

                                                            defaultValue={""}
                                                            name='address'
                                                            onChange={handleChange}

                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-4 align-items-center">
                                                <div className="col-lg-4">
                                                    <label htmlFor="aboutInput" className="fw-semibold">
                                                        About:{" "}
                                                    </label>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div className="input-group">
                                                        <div className="input-group-text">
                                                            <i className="feather-type" />
                                                        </div>
                                                        <textarea
                                                            className="form-control"
                                                            id="aboutInput"
                                                            cols={30}
                                                            rows={5}
                                                            placeholder="About"
                                                            defaultValue={""}

                                                            name='about'
                                                            onChange={handleChange}

                                                        />
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary">
                                                    Add Employee
                                                </button>

                                            </div>

                                        </form>
                                    </div>

                                    <hr className="my-0" />

                                </div>





                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default AddEmployee;













