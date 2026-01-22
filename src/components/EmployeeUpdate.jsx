import React, { useState, useEffect, use } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
function EmployeeUpdate() {
  const [updateData, setUpdateData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    departmentId: 5,
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


  const params = useParams();
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/department')
      .then((response) => { setDepartments(response.data); })
      .catch((error) => { console.log(error); });
  }, []);
  useEffect(() => {
    axios.get(`http://localhost:8080/employee/${params.id}`)
      .then((response) => {
        setUpdateData(response.data)
      }).catch((error) => {
        console.log(error)
      })
  }, [params.id])

  const handleSubmit = (e) => {
    axios.put(`http://localhost:8080/update_employee/${params.id}`, updateData)
      .then((response) => alert("Employee updated"))
      .catch((error) => console.log(error));
  };


  if (!updateData) {
    return <div>Loading...</div>;
  }
  if (!departments) {
    return <div>Loading...</div>;
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
                              value={updateData.firstName}
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
                              value={updateData.lastName}
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
                              value={updateData.departmentId}
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
                              type="text"
                              className="form-control"
                              id="mailInput"
                              placeholder="Email"
                              name="email"
                              onChange={handleChange}
                              value={updateData.email}


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
                              onChange={handleChange}
                              value={updateData.mobileNumber}
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
                              onChange={handleChange}
                              value={updateData.salary}
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
                              onChange={handleChange}
                              value={updateData.country}
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
                              onChange={handleChange}
                              value={updateData.city}
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
                              onChange={handleChange}
                              value={updateData.role}
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
                                  checked={updateData.isActive === true}
                                  onChange={handleChange}
                                />
                                <span className="form-check-label">Active</span>
                              </label>

                              <label className="form-check form-check-inline m-0">
                                <input
                                  type="radio"
                                  name="isActive"
                                  value="false"
                                  checked={updateData.isActive === false}
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
                              onChange={handleChange}
                              value={updateData.website}
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
                              Value={""}
                              name='address'
                              onChange={handleChange}
                              value={updateData.address}
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
                              Value={""}
                              name='about'
                              onChange={handleChange}
                              value={updateData.about}
                            />
                          </div>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Update Profile
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
export default EmployeeUpdate;