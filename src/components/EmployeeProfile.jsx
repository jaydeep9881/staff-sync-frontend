import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function EmployeeProfile() {
    const params = useParams();
    const [emp,setEmp] = useState(null);
    useEffect(()=>{
        axios.get(`http://localhost:8080/employee/${params.id}`)
        .then((response)=>{
            setEmp(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    },[params.id])
      if (!emp) return <div>Loading...</div>;
  return (
    <>
    
<div className="page-header">
  <div className="page-header-left d-flex align-items-center">
    <div className="page-header-title">
      <h5 className="m-b-10">Employee</h5>
    </div>
    <ul className="breadcrumb">
      <li className="breadcrumb-item">
         
        <Link to="/">Home</Link>
      </li>
      <li className="breadcrumb-item">View</li>
    </ul>
  </div>
   
</div>
<div className="main-content">
  <div className="row">
   

    <div className="col-xxl-4 col-xl-6">
      <div className="card stretch stretch-full">
        <div className="card-body">
          <div className="mb-4 text-center">
            <div className="wd-150 ht-150 mx-auto mb-3 position-relative">
              <div className="avatar-image wd-150 ht-150 border border-5 border-gray-3">
                <img
                  src="assets/images/avatar/1.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div
                className="wd-10 ht-10 text-success rounded-circle position-absolute translate-middle"
                style={{ top: "76%", right: 10 }}
              >
                <i className="bi bi-patch-check-fill" />
              </div>
            </div>
            <div className="mb-4">
              <a href="javascript:void(0);" className="fs-14 fw-bold d-block">
                {emp.firstName} {emp.lastName}
                 
              </a>
              <a
                href="javascript:void(0);"
                className="fs-12 fw-normal text-muted d-block"
              >
               {emp.email}
              </a>
            </div>
            <div className="fs-12 fw-normal text-muted text-center d-flex flex-wrap gap-3 mb-4">
              <div className="flex-fill py-3 px-4 rounded-1 d-none d-sm-block border border-dashed border-gray-5">
                <h6 className="fs-15 fw-bolder">{emp.role}</h6>
                <p className="fs-12 text-muted mb-0">Role</p>
              </div>
              <div className="flex-fill py-3 px-4 rounded-1 d-none d-sm-block border border-dashed border-gray-5">
                <h6 className="fs-15 fw-bolder">{emp.departmentName}</h6>
                <p className="fs-12 text-muted mb-0">Department </p>
              </div>
              <div className="flex-fill py-3 px-4 rounded-1 d-none d-sm-block border border-dashed border-gray-5">
                <h6 className="fs-15 fw-bolder">{emp.city}</h6>
                <p className="fs-12 text-muted mb-0">City</p>
              </div>
            </div>
          </div>
          <ul className="list-unstyled mb-4">
            <li className="hstack justify-content-between mb-4">
              <span className="text-muted fw-medium hstack gap-3">
                <i className="feather-map-pin" />
                Location
              </span>
              <a href="javascript:void(0);" className="float-end">
                {emp.city}, {emp.country}
              </a>
            </li>
            <li className="hstack justify-content-between mb-4">
              <span className="text-muted fw-medium hstack gap-3">
                <i className="feather-phone" />
                Phone
              </span>
              <a href="javascript:void(0);" className="float-end">
                {emp.mobileNumber}
              </a>
            </li>
            <li className="hstack justify-content-between mb-0">
              <span className="text-muted fw-medium hstack gap-3">
                <i className="feather-mail" />
                Email
              </span>
              <a href="javascript:void(0);" className="float-end">
               {emp.email}
              </a>
            </li>
          </ul>
          <div className="d-flex gap-2 text-center pt-4">
            <a href="javascript:void(0);" className="w-50 btn btn-light-brand">
              <i className="feather-trash-2 me-2" />
              <span>Delete</span>
            </a>
             <Link to={`/update/${emp.id}`} className="w-50 btn btn-primary">
             <i className="feather-edit me-2" />
                   <span>Edit Profile</span>
                </Link>
              
          </div>
        </div>
      </div>
      
      
    </div>
    <div className="col-xxl-8 col-xl-6">
      <div className="card border-top-0">
        
        <div className="tab-content">
          <div
            className="tab-pane fade show active p-4"
            id="overviewTab"
            role="tabpanel"
          >
            <div className="about-section mb-5">
              <div className="mb-4 d-flex align-items-center justify-content-between">
                <h5 className="fw-bold mb-0">Profile About:</h5>
                <a
                  href="javascript:void(0);"
                  className="btn btn-sm btn-light-brand"
                >
                  Updates
                </a>
              </div>
              
              <p>
                {emp.about}
              </p>
            </div>
            <div className="profile-details mb-5">
              <div className="mb-4 d-flex align-items-center justify-content-between">
                <h5 className="fw-bold mb-0">Profile Details:</h5>
                <a
                  href="javascript:void(0);"
                  className="btn btn-sm btn-light-brand"
                >
                  Edit Profile
                  
                </a>
              </div>
              <div className="row g-0 mb-4">
                <div className="col-sm-6 text-muted">Full Name:</div>
                <div className="col-sm-6 fw-semibold">{emp.firstName} {emp.lastName}</div>
              </div>
              <div className="row g-0 mb-4">
                <div className="col-sm-6 text-muted">Surname:</div>
                <div className="col-sm-6 fw-semibold">{emp.lastName}</div>
              </div>
              
              <div className="row g-0 mb-4">
                <div className="col-sm-6 text-muted">Date of Birth:</div>
                <div className="col-sm-6 fw-semibold">26 May, 2000</div>
              </div>
              <div className="row g-0 mb-4">
                <div className="col-sm-6 text-muted">Mobile Number:</div>
                <div className="col-sm-6 fw-semibold">{emp.mobileNumber}</div>
              </div>
              <div className="row g-0 mb-4">
                <div className="col-sm-6 text-muted">Email Address:</div>
                <div className="col-sm-6 fw-semibold">{emp.email}</div>
              </div>
              <div className="row g-0 mb-4">
                <div className="col-sm-6 text-muted">Location:</div>
                <div className="col-sm-6 fw-semibold">
                    {emp.city}, {emp.country}
                </div>
              </div>
              <div className="row g-0 mb-4">
                <div className="col-sm-6 text-muted">Joining Date:</div>
                <div className="col-sm-6 fw-semibold"> {emp.joiningDate}</div>
              </div>
              <div className="row g-0 mb-4">
                <div className="col-sm-6 text-muted">Country:</div>
                <div className="col-sm-6 fw-semibold">{emp.country}</div>
              </div>
              <div className="row g-0 mb-4">
                <div className="col-sm-6 text-muted">Communication:</div>
                <div className="col-sm-6 fw-semibold">{emp.email}, {emp.mobileNumber}</div>
              </div>
              <div className="row g-0 mb-4">
                <div className="col-sm-6 text-muted">Allow Changes:</div>
                <div className="col-sm-6 fw-semibold">YES</div>
              </div>
              <div className="row g-0">
                <div className="col-sm-6 text-muted">Website:</div>
                <div className="col-sm-6 fw-semibold">
                   {emp.website}
                </div>
              </div>
            </div>
            <div
              className="alert alert-dismissible mb-4 p-4 d-flex alert-soft-warning-message profile-overview-alert"
              role="alert"
            >
              <div className="me-4 d-none d-md-block">
                <i className="feather feather-alert-triangle fs-1" />
              </div>
              <div>
                <p className="fw-bold mb-1 text-truncate-1-line">
                  Your profile has not been updated yet!!!
                </p>
                <p className="fs-10 fw-medium text-uppercase text-truncate-1-line">
                  Last Update: <strong> {emp.updatedAt}</strong>
                </p>
                <a
                  href="javascript:void(0);"
                  className="btn btn-sm bg-soft-warning text-warning d-inline-block"
                >
                  Update Now
                </a>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                />
              </div>
            </div>
            
          </div>
          <div className="tab-pane fade" id="billingTab" role="tabpanel">
            <div
              className="alert alert-dismissible m-4 p-4 d-flex alert-soft-teal-message"
              role="alert"
            >
              <div className="me-4 d-none d-md-block">
                <i className="feather feather-alert-octagon fs-1" />
              </div>
              <div>
                <p className="fw-bold mb-1 text-truncate-1-line">
                  We need your attention!
                </p>
                <p className="fs-12 fw-medium text-truncate-1-line">
                  Your payment was declined. To start using tools, please{" "}
                  <strong>Add Payment Method</strong>
                </p>
                <a
                  href="javascript:void(0);"
                  className="btn btn-sm bg-soft-teal text-teal d-inline-block"
                >
                  Add Payment Method
                </a>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                />
              </div>
            </div>
            <div className="subscription-plan px-4 pt-4">
              <div className="mb-4 d-flex align-items-center justify-content-between">
                <h5 className="fw-bold mb-0">Subscription &amp; Plan:</h5>
                <a
                  href="javascript:void(0);"
                  className="btn btn-sm btn-light-brand"
                >
                  4 days remaining
                </a>
              </div>
              <div className="p-4 mb-4 d-xxl-flex d-xl-block d-md-flex align-items-center justify-content-between gap-4 border border-dashed border-gray-5 rounded-1">
                <div>
                  <div className="fs-14 fw-bold text-dark mb-1">
                    Your current plan is{" "}
                    <a
                      href="javascript:void(0);"
                      className="badge bg-primary text-white ms-2"
                    >
                      Team Plan
                    </a>
                  </div>
                  <div className="fs-12 text-muted">
                    A simple start for everyone
                  </div>
                </div>
                <div className="my-3 my-xxl-0 my-md-3 my-md-0">
                  <div className="fs-20 text-dark">
                    <span className="fw-bold">$29.99</span> /{" "}
                    <em className="fs-11 fw-medium">Month</em>
                  </div>
                  <div className="fs-12 text-muted mt-1">
                    Billed Monthly / Next payment on 12/10/2023 for{" "}
                    <strong className="text-dark">$62.48</strong>
                  </div>
                </div>
                <div className="hstack gap-3">
                  <a href="javascript:void(0);" className="text-danger">
                    Cancel Plan
                  </a>
                  <a href="javascript:void(0);" className="btn btn-light-brand">
                    Update Plan
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-4 col-xl-12 col-lg-4">
                  <a
                    href="javascript:void(0);"
                    className="p-4 mb-4 d-block bg-soft-100 border border-dashed border-gray-5 rounded-1"
                  >
                    <h6 className="fs-13 fw-bold">BASIC</h6>
                    <p className="fs-12 fw-normal text-muted">
                      Starter plan for individuals.
                    </p>
                    <p className="fs-12 fw-normal text-muted text-truncate-2-line">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quod ipsa id corrupti modi, impedit exercitationem harum
                      voluptates reiciendis.
                    </p>
                    <div className="mt-4">
                      <span className="fs-16 fw-bold text-dark">$12.99</span> /{" "}
                      <em className="fs-11 fw-medium">Month</em>
                    </div>
                  </a>
                </div>
                <div className="col-xxl-4 col-xl-12 col-lg-4">
                  <a
                    href="javascript:void(0);"
                    className="p-4 mb-4 d-block bg-soft-200 border border-dashed border-gray-5 rounded-1 position-relative"
                  >
                    <h6 className="fs-13 fw-bold">TEAM</h6>
                    <p className="fs-12 fw-normal text-muted">
                      Collaborate up to 10 people.
                    </p>
                    <p className="fs-12 fw-normal text-muted text-truncate-2-line">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quod ipsa id corrupti modi, impedit exercitationem harum
                      voluptates reiciendis.
                    </p>
                    <div className="mt-4">
                      <span className="fs-16 fw-bold text-dark">$29.99</span> /{" "}
                      <em className="fs-11 fw-medium">Month</em>
                    </div>
                    <div className="position-absolute top-0 start-50 translate-middle">
                      <i className="feather-check fs-12 bg-primary text-white p-1 rounded-circle" />
                    </div>
                  </a>
                </div>
                <div className="col-xxl-4 col-xl-12 col-lg-4">
                  <a
                    href="javascript:void(0);"
                    className="p-4 mb-4 d-block bg-soft-100 border border-dashed border-gray-5 rounded-1"
                  >
                    <h6 className="fs-13 fw-bold">ENTERPRISE</h6>
                    <p className="fs-12 fw-normal text-muted">
                      For bigger businesses.
                    </p>
                    <p className="fs-12 fw-normal text-muted text-truncate-2-line">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quod ipsa id corrupti modi, impedit exercitationem harum
                      voluptates reiciendis.
                    </p>
                    <div className="mt-4">
                      <span className="fs-16 fw-bold text-dark">$49.99</span> /{" "}
                      <em className="fs-11 fw-medium">Month</em>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <hr className="mt-2" />
            <div className="payment-methord px-4">
              <div className="mb-4 d-flex align-items-center justify-content-between">
                <h5 className="fw-bold mb-0">Payment Methords:</h5>
                <a
                  href="javascript:void(0);"
                  className="btn btn-sm btn-light-brand"
                >
                  Add Methord
                </a>
              </div>
              <div className="row">
                <div className="col-xxl-6 col-xl-12 col-lg-6">
                  <div className="px-4 py-2 mb-4 d-sm-flex justify-content-between border border-dashed border-gray-3 rounded-1 position-relative">
                    <div className="d-sm-flex align-items-center">
                      <div className="wd-100">
                        <img
                          src="assets/images/payment/mastercard.svg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="ms-0 ms-sm-3">
                        <div className="text-dark fw-bold mb-2">
                          Alexandra Della
                        </div>
                        <div className="mb-0 text-truncate-1-line">
                          5155 **** **** ****
                        </div>
                        <small className="fs-10 fw-medium text-uppercase text-muted text-truncate-1-line">
                          Card expires at 12/24
                        </small>
                      </div>
                    </div>
                    <div className="hstack gap-3 mt-3 mt-sm-0">
                      <a href="javascript:void(0);" className="text-danger">
                        Delete
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-sm btn-light"
                      >
                        Edit
                      </a>
                    </div>
                    <div className="position-absolute top-50 start-0 translate-middle">
                      <i className="feather-check fs-12 bg-primary text-white p-1 rounded-circle" />
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-12 col-lg-6">
                  <div className="px-4 py-2 mb-4 d-sm-flex justify-content-between border border-dashed border-gray-3 rounded-1">
                    <div className="d-sm-flex align-items-center">
                      <div className="wd-100">
                        <img
                          src="assets/images/payment/visa.svg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="ms-0 ms-sm-3">
                        <div className="text-dark fw-bold mb-2">
                          Alexandra Della
                        </div>
                        <div className="mb-0 text-truncate-1-line">
                          4236 **** **** ****
                        </div>
                        <small className="fs-10 fw-medium text-uppercase text-muted text-truncate-1-line">
                          Card expires at 11/23
                        </small>
                      </div>
                    </div>
                    <div className="hstack gap-3 mt-3 mt-sm-0">
                      <a href="javascript:void(0);" className="text-danger">
                        Delete
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-sm btn-light"
                      >
                        Edit
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-12 col-lg-6">
                  <div className="px-4 py-2 mb-4 d-sm-flex justify-content-between border border-dashed border-gray-3 rounded-1">
                    <div className="d-sm-flex align-items-center">
                      <div className="wd-100">
                        <img
                          src="assets/images/payment/american-express.svg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="ms-0 ms-sm-3">
                        <div className="text-dark fw-bold mb-2">
                          Alexandra Della
                        </div>
                        <div className="mb-0 text-truncate-1-line">
                          3437 **** **** ****
                        </div>
                        <small className="fs-10 fw-medium text-uppercase text-muted text-truncate-1-line">
                          Card expires at 11/24
                        </small>
                      </div>
                    </div>
                    <div className="hstack gap-3 mt-3 mt-sm-0">
                      <a href="javascript:void(0);" className="text-danger">
                        Delete
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-sm btn-light"
                      >
                        Edit
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-12 col-lg-6">
                  <div className="px-4 py-2 mb-4 d-sm-flex justify-content-between border border-dashed border-gray-3 rounded-1">
                    <div className="d-sm-flex align-items-center">
                      <div className="wd-100">
                        <img
                          src="assets/images/payment/discover.svg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="ms-0 ms-sm-3">
                        <div className="text-dark fw-bold mb-2">
                          Alexandra Della
                        </div>
                        <div className="mb-0 text-truncate-1-line">
                          6011 **** **** ****
                        </div>
                        <small className="fs-10 fw-medium text-uppercase text-muted text-truncate-1-line">
                          Card expires at 11/25
                        </small>
                      </div>
                    </div>
                    <div className="hstack gap-3 mt-3 mt-sm-0">
                      <a href="javascript:void(0);" className="text-danger">
                        Delete
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-sm btn-light"
                      >
                        Edit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-2" />
            <div className="payment-history">
              <div className="mb-4 px-4 d-flex align-items-center justify-content-between">
                <h5 className="fw-bold mb-0">Billing History:</h5>
                <a
                  href="javascript:void(0);"
                  className="btn btn-sm btn-light-brand"
                >
                  Alls History
                </a>
              </div>
              <div className="table-responsive">
                <table className="table mb-0">
                  <thead>
                    <tr className="border-top">
                      <th>ID</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th className="text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a href="javascript:void(0);">#258963</a>
                      </td>
                      <td>02 NOV, 2022</td>
                      <td>$350</td>
                      <td>
                        <span className="badge bg-soft-success text-success">
                          Completed
                        </span>
                      </td>
                      <td className="hstack justify-content-end gap-4 text-end">
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-trigger="hover"
                          title="Sent Mail"
                        >
                          <i className="feather feather-send fs-12" />
                        </a>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-trigger="hover"
                          title="Invoice Details"
                        >
                          <i className="feather feather-eye fs-12" />
                        </a>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-trigger="hover"
                          title="More Options"
                        >
                          <i className="feather feather-more-vertical fs-12" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="javascript:void(0);">#987456</a>
                      </td>
                      <td>05 DEC, 2022</td>
                      <td>$590</td>
                      <td>
                        <span className="badge bg-soft-warning text-warning">
                          Pendign
                        </span>
                      </td>
                      <td className="hstack justify-content-end gap-4 text-end">
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-trigger="hover"
                          title="Sent Mail"
                        >
                          <i className="feather feather-send fs-12" />
                        </a>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-trigger="hover"
                          title="Invoice Details"
                        >
                          <i className="feather feather-eye fs-12" />
                        </a>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-trigger="hover"
                          title="More Options"
                        >
                          <i className="feather feather-more-vertical fs-12" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="javascript:void(0);">#456321</a>
                      </td>
                      <td>31 NOV, 2022</td>
                      <td>$450</td>
                      <td>
                        <span className="badge bg-soft-danger text-danger">
                          Reject
                        </span>
                      </td>
                      <td className="hstack justify-content-end gap-4 text-end">
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-trigger="hover"
                          title="Sent Mail"
                        >
                          <i className="feather feather-send fs-12" />
                        </a>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-trigger="hover"
                          title="Invoice Details"
                        >
                          <i className="feather feather-eye fs-12" />
                        </a>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-trigger="hover"
                          title="More Options"
                        >
                          <i className="feather feather-more-vertical fs-12" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="javascript:void(0);">#357951</a>
                      </td>
                      <td>03 JAN, 2023</td>
                      <td>$250</td>
                      <td>
                        <span className="badge bg-soft-success text-success">
                          Completed
                        </span>
                      </td>
                      <td className="hstack justify-content-end gap-4 text-end">
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-trigger="hover"
                          title="Sent Mail"
                        >
                          <i className="feather feather-send fs-12" />
                        </a>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-trigger="hover"
                          title="Invoice Details"
                        >
                          <i className="feather feather-eye fs-12" />
                        </a>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-trigger="hover"
                          title="More Options"
                        >
                          <i className="feather feather-more-vertical fs-12" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="javascript:void(0);">#258963</a>
                      </td>
                      <td>02 NOV, 2022</td>
                      <td>$350</td>
                      <td>
                        <span className="badge bg-soft-success text-success">
                          Completed
                        </span>
                      </td>
                      <td className="hstack justify-content-end gap-4 text-end">
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-trigger="hover"
                          title="Sent Mail"
                        >
                          <i className="feather feather-send fs-12" />
                        </a>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-trigger="hover"
                          title="Invoice Details"
                        >
                          <i className="feather feather-eye fs-12" />
                        </a>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-trigger="hover"
                          title="More Options"
                        >
                          <i className="feather feather-more-vertical fs-12" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="javascript:void(0);">#357951</a>
                      </td>
                      <td>03 JAN, 2023</td>
                      <td>$250</td>
                      <td>
                        <span className="badge bg-soft-success text-success">
                          Completed
                        </span>
                      </td>
                      <td className="hstack justify-content-end gap-4 text-end">
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-trigger="hover"
                          title="Sent Mail"
                        >
                          <i className="feather feather-send fs-12" />
                        </a>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-trigger="hover"
                          title="Invoice Details"
                        >
                          <i className="feather feather-eye fs-12" />
                        </a>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          data-bs-trigger="hover"
                          title="More Options"
                        >
                          <i className="feather feather-more-vertical fs-12" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="activityTab" role="tabpanel">
            <div className="recent-activity p-4 pb-0">
              <div className="mb-4 pb-2 d-flex justify-content-between">
                <h5 className="fw-bold">Recent Activity:</h5>
                <a
                  href="javascript:void(0);"
                  className="btn btn-sm btn-light-brand"
                >
                  View Alls
                </a>
              </div>
              <ul className="list-unstyled activity-feed">
                <li className="d-flex justify-content-between feed-item feed-item-success">
                  <div>
                    <span className="text-truncate-1-line lead_date">
                      Reynante placed new order{" "}
                      <span className="date">[April 19, 2023]</span>
                    </span>
                    <span className="text">
                      New order placed{" "}
                      <a
                        href="javascript:void(0);"
                        className="fw-bold text-primary"
                      >
                        #456987
                      </a>
                    </span>
                  </div>
                  <div className="ms-3 d-flex gap-2 align-items-center">
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="Make Read"
                    >
                      <i className="feather feather-check fs-12" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="View Activity"
                    >
                      <i className="feather feather-eye fs-12" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="More Options"
                    >
                      <i className="feather feather-more-vertical" />
                    </a>
                  </div>
                </li>
                <li className="d-flex justify-content-between feed-item feed-item-info">
                  <div>
                    <span className="text-truncate-1-line lead_date">
                      5+ friends join this group{" "}
                      <span className="date">[April 20, 2023]</span>
                    </span>
                    <span className="text">
                      Joined the group{" "}
                      <a
                        href="javascript:void(0);"
                        className="fw-bold text-primary"
                      >
                        "Duralux"
                      </a>
                    </span>
                  </div>
                  <div className="ms-3 d-flex gap-2 align-items-center">
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="Make Read"
                    >
                      <i className="feather feather-check fs-12" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="View Activity"
                    >
                      <i className="feather feather-eye fs-12" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="More Options"
                    >
                      <i className="feather feather-more-vertical" />
                    </a>
                  </div>
                </li>
                <li className="d-flex justify-content-between feed-item feed-item-secondary">
                  <div>
                    <span className="text-truncate-1-line lead_date">
                      Socrates send you friend request{" "}
                      <span className="date">[April 21, 2023]</span>
                    </span>
                    <span className="text">
                      New friend request{" "}
                      <a
                        href="javascript:void(0);"
                        className="badge bg-soft-success text-success ms-1"
                      >
                        Conform
                      </a>
                    </span>
                  </div>
                  <div className="ms-3 d-flex gap-2 align-items-center">
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="Make Read"
                    >
                      <i className="feather feather-check fs-12" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="View Activity"
                    >
                      <i className="feather feather-eye fs-12" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="More Options"
                    >
                      <i className="feather feather-more-vertical" />
                    </a>
                  </div>
                </li>
                <li className="d-flex justify-content-between feed-item feed-item-warning">
                  <div>
                    <span className="text-truncate-1-line lead_date">
                      Reynante make deposit $565 USD{" "}
                      <span className="date">[April 22, 2023]</span>
                    </span>
                    <span className="text">
                      Make deposit{" "}
                      <a
                        href="javascript:void(0);"
                        className="fw-bold text-primary"
                      >
                        $565 USD
                      </a>
                    </span>
                  </div>
                  <div className="ms-3 d-flex gap-2 align-items-center">
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="Make Read"
                    >
                      <i className="feather feather-check fs-12" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="View Activity"
                    >
                      <i className="feather feather-eye fs-12" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="More Options"
                    >
                      <i className="feather feather-more-vertical" />
                    </a>
                  </div>
                </li>
                <li className="d-flex justify-content-between feed-item feed-item-primary">
                  <div>
                    <span className="text-truncate-1-line lead_date">
                      New event are coming soon{" "}
                      <span className="date">[April 23, 2023]</span>
                    </span>
                    <span className="text">
                      Attending the event{" "}
                      <a
                        href="javascript:void(0);"
                        className="fw-bold text-primary"
                      >
                        "Duralux Event"
                      </a>
                    </span>
                  </div>
                  <div className="ms-3 d-flex gap-2 align-items-center">
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="Make Read"
                    >
                      <i className="feather feather-check fs-12" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="View Activity"
                    >
                      <i className="feather feather-eye fs-12" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="More Options"
                    >
                      <i className="feather feather-more-vertical" />
                    </a>
                  </div>
                </li>
                <li className="d-flex justify-content-between feed-item feed-item-info">
                  <div>
                    <span className="text-truncate-1-line lead_date">
                      5+ friends join this group{" "}
                      <span className="date">[April 20, 2023]</span>
                    </span>
                    <span className="text">
                      Joined the group{" "}
                      <a
                        href="javascript:void(0);"
                        className="fw-bold text-primary"
                      >
                        "Duralux"
                      </a>
                    </span>
                  </div>
                  <div className="ms-3 d-flex gap-2 align-items-center">
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="Make Read"
                    >
                      <i className="feather feather-check fs-12" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="View Activity"
                    >
                      <i className="feather feather-eye fs-12" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="More Options"
                    >
                      <i className="feather feather-more-vertical" />
                    </a>
                  </div>
                </li>
                <li className="d-flex justify-content-between feed-item feed-item-danger">
                  <div>
                    <span className="text-truncate-1-line lead_date">
                      New meeting joining are pending{" "}
                      <span className="date">[April 23, 2023]</span>
                    </span>
                    <span className="text">
                      Duralux meeting{" "}
                      <a
                        href="javascript:void(0);"
                        className="badge bg-soft-warning text-warning ms-1"
                      >
                        Join
                      </a>
                    </span>
                  </div>
                  <div className="ms-3 d-flex gap-2 align-items-center">
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="Make Read"
                    >
                      <i className="feather feather-check fs-12" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="View Activity"
                    >
                      <i className="feather feather-eye fs-12" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="More Options"
                    >
                      <i className="feather feather-more-vertical" />
                    </a>
                  </div>
                </li>
                <li className="d-flex justify-content-between feed-item feed-item-info">
                  <div>
                    <span className="text-truncate-1-line lead_date">
                      5+ friends join this group{" "}
                      <span className="date">[April 20, 2023]</span>
                    </span>
                    <span className="text">
                      Joined the group{" "}
                      <a
                        href="javascript:void(0);"
                        className="fw-bold text-primary"
                      >
                        "Duralux"
                      </a>
                    </span>
                  </div>
                  <div className="ms-3 d-flex gap-2 align-items-center">
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="Make Read"
                    >
                      <i className="feather feather-check fs-12" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="View Activity"
                    >
                      <i className="feather feather-eye fs-12" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="More Options"
                    >
                      <i className="feather feather-more-vertical" />
                    </a>
                  </div>
                </li>
                <li className="d-flex justify-content-between feed-item feed-item-secondary">
                  <div>
                    <span className="text-truncate-1-line lead_date">
                      Socrates send you friend request{" "}
                      <span className="date">[April 21, 2023]</span>
                    </span>
                    <span className="text">
                      New friend request{" "}
                      <a
                        href="javascript:void(0);"
                        className="badge bg-soft-success text-success ms-1"
                      >
                        Conform
                      </a>
                    </span>
                  </div>
                  <div className="ms-3 d-flex gap-2 align-items-center">
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="Make Read"
                    >
                      <i className="feather feather-check fs-12" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="View Activity"
                    >
                      <i className="feather feather-eye fs-12" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="More Options"
                    >
                      <i className="feather feather-more-vertical" />
                    </a>
                  </div>
                </li>
                <li className="d-flex justify-content-between feed-item feed-item-warning">
                  <div>
                    <span className="text-truncate-1-line lead_date">
                      Reynante make deposit $565 USD{" "}
                      <span className="date">[April 22, 2023]</span>
                    </span>
                    <span className="text">
                      Make deposit{" "}
                      <a
                        href="javascript:void(0);"
                        className="fw-bold text-primary"
                      >
                        $565 USD
                      </a>
                    </span>
                  </div>
                  <div className="ms-3 d-flex gap-2 align-items-center">
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="Make Read"
                    >
                      <i className="feather feather-check fs-12" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="View Activity"
                    >
                      <i className="feather feather-eye fs-12" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="More Options"
                    >
                      <i className="feather feather-more-vertical" />
                    </a>
                  </div>
                </li>
                <li className="d-flex justify-content-between feed-item feed-item-primary">
                  <div>
                    <span className="text-truncate-1-line lead_date">
                      New event are coming soon{" "}
                      <span className="date">[April 23, 2023]</span>
                    </span>
                    <span className="text">
                      Attending the event{" "}
                      <a
                        href="javascript:void(0);"
                        className="fw-bold text-primary"
                      >
                        "Duralux Event"
                      </a>
                    </span>
                  </div>
                  <div className="ms-3 d-flex gap-2 align-items-center">
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="Make Read"
                    >
                      <i className="feather feather-check fs-12" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="View Activity"
                    >
                      <i className="feather feather-eye fs-12" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="avatar-text avatar-sm"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      title="More Options"
                    >
                      <i className="feather feather-more-vertical" />
                    </a>
                  </div>
                </li>
              </ul>
              <a
                href="javascript:void(0);"
                className="d-flex align-items-center text-muted"
              >
                <i className="feather feather-more-horizontal fs-12" />
                <span className="fs-10 text-uppercase ms-2 text-truncate-1-line">
                  Load More
                </span>
              </a>
            </div>
            <hr />
            <div className="logs-history mb-0">
              <div className="px-4 mb-4 d-flex justify-content-between">
                <h5 className="fw-bold">Logs History</h5>
                <a
                  href="javascript:void(0);"
                  className="btn btn-sm btn-light-brand"
                >
                  View Alls
                </a>
              </div>
              <div className="table-responsive">
                <table className="table">
                  <thead className="text-dark text-center border-top">
                    <tr>
                      <th className="text-start ps-4">Browser</th>
                      <th>IP</th>
                      <th>Time</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td className="fw-medium text-dark text-start ps-4">
                        Chrome on Window
                      </td>
                      <td>
                        <span className="text-muted">192.149.122.128</span>
                      </td>
                      <td>
                        <span className="text-muted">
                          {" "}
                          <span className="d-none d-sm-inline-block">
                            11:34 PM
                          </span>
                        </span>
                      </td>
                      <td>
                        <i className="feather feather-check-circle text-success" />
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-medium text-dark text-start ps-4">
                        Mozilla on Window
                      </td>
                      <td>
                        <span className="text-muted">186.188.154.225</span>
                      </td>
                      <td>
                        <span className="text-muted">
                          Nov 20, 2023{" "}
                          <span className="d-none d-sm-inline-block">
                            10:34 PM
                          </span>
                        </span>
                      </td>
                      <td>
                        <a href="javascript:void(0);">
                          <i className="feather feather-x text-danger" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-medium text-dark text-start ps-4">
                        Chrome on iMac
                      </td>
                      <td>
                        <span className="text-muted">192.149.122.128</span>
                      </td>
                      <td>
                        <span className="text-muted">
                          Oct 23, 2023{" "}
                          <span className="d-none d-sm-inline-block">
                            04:16 PM
                          </span>
                        </span>
                      </td>
                      <td>
                        <a href="javascript:void(0);">
                          <i className="feather feather-x text-danger" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-medium text-dark text-start ps-4">
                        Mozilla on Window
                      </td>
                      <td>
                        <span className="text-muted">186.188.154.225</span>
                      </td>
                      <td>
                        <span className="text-muted">
                          Nov 20, 2023{" "}
                          <span className="d-none d-sm-inline-block">
                            10:34 PM
                          </span>
                        </span>
                      </td>
                      <td>
                        <a href="javascript:void(0);">
                          <i className="feather feather-x text-danger" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-medium text-dark text-start ps-4">
                        Chrome on Window
                      </td>
                      <td>
                        <span className="text-muted">192.149.122.128</span>
                      </td>
                      <td>
                        <span className="text-muted">
                          Oct 23, 2023{" "}
                          <span className="d-none d-sm-inline-block">
                            04:16 PM
                          </span>
                        </span>
                      </td>
                      <td>
                        <a href="javascript:void(0);">
                          <i className="feather feather-x text-danger" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-medium text-dark text-start ps-4">
                        Chrome on iMac
                      </td>
                      <td>
                        <span className="text-muted">192.149.122.128</span>
                      </td>
                      <td>
                        <span className="text-muted">
                          Oct 15, 2023{" "}
                          <span className="d-none d-sm-inline-block">
                            11:41 PM
                          </span>
                        </span>
                      </td>
                      <td>
                        <a href="javascript:void(0);">
                          <i className="feather feather-x text-danger" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-medium text-dark text-start ps-4">
                        Mozilla on Window
                      </td>
                      <td>
                        <span className="text-muted">186.188.154.225</span>
                      </td>
                      <td>
                        <span className="text-muted">
                          Oct 13, 2023{" "}
                          <span className="d-none d-sm-inline-block">
                            05:43 AM
                          </span>
                        </span>
                      </td>
                      <td>
                        <a href="javascript:void(0);">
                          <i className="feather feather-x text-danger" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-medium text-dark text-start ps-4">
                        Chrome on iMac
                      </td>
                      <td>
                        <span className="text-muted">192.149.122.128</span>
                      </td>
                      <td>
                        <span className="text-muted">
                          Oct 03, 2023{" "}
                          <span className="d-none d-sm-inline-block">
                            04:12 AM
                          </span>
                        </span>
                      </td>
                      <td>
                        <a href="javascript:void(0);">
                          <i className="feather feather-x text-danger" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="notificationsTab" role="tabpanel">
            <div className="table-responsive">
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th className="wd-250 text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="fw-bold text-dark">
                        Successful payments
                      </div>
                      <small className="fs-12 text-muted">
                        Receive a notification for every successful payment.
                      </small>
                    </td>
                    <td className="text-end">
                      <div className="form-group select-wd-lg">
                        <select
                          className="form-control"
                          data-select2-selector="icon"
                        >
                          <option value="SMS" data-icon="feather-smartphone">
                            SMS
                          </option>
                          <option value="Push" data-icon="feather-bell">
                            Push
                          </option>
                          <option
                            value="Email"
                            data-icon="feather-mail"
                            selected=""
                          >
                            Email
                          </option>
                          <option value="Repeat" data-icon="feather-repeat">
                            Repeat
                          </option>
                          <option
                            value="Deactivate"
                            data-icon="feather-bell-off"
                          >
                            Deactivate
                          </option>
                          <option
                            value="SMS+Push"
                            data-icon="feather-smartphone"
                          >
                            SMS + Push
                          </option>
                          <option value="Email+Push" data-icon="feather-mail">
                            Email + Push
                          </option>
                          <option
                            value="SMS+Email"
                            data-icon="feather-smartphone"
                          >
                            SMS + Email
                          </option>
                          <option
                            value="SMS+Push+Email"
                            data-icon="feather-smartphone"
                          >
                            SMS + Push + Email
                          </option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="fw-bold text-dark">
                        Customer payment dispute
                      </div>
                      <small className="fs-12 text-muted">
                        Receive a notification if a payment is disputed by a
                        customer and for dispute purposes.{" "}
                      </small>
                    </td>
                    <td className="text-end">
                      <div className="form-group select-wd-lg">
                        <select
                          className="form-control"
                          data-select2-selector="icon"
                        >
                          <option value="SMS" data-icon="feather-smartphone">
                            SMS
                          </option>
                          <option value="Push" data-icon="feather-bell">
                            Push
                          </option>
                          <option value="Email" data-icon="feather-mail">
                            Email
                          </option>
                          <option value="Repeat" data-icon="feather-repeat">
                            Repeat
                          </option>
                          <option
                            value="Deactivate"
                            data-icon="feather-bell-off"
                            selected=""
                          >
                            Deactivate
                          </option>
                          <option
                            value="SMS+Push"
                            data-icon="feather-smartphone"
                          >
                            SMS + Push
                          </option>
                          <option value="Email+Push" data-icon="feather-mail">
                            Email + Push
                          </option>
                          <option
                            value="SMS+Email"
                            data-icon="feather-smartphone"
                          >
                            SMS + Email
                          </option>
                          <option
                            value="SMS+Push+Email"
                            data-icon="feather-smartphone"
                          >
                            SMS + Push + Email
                          </option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="fw-bold text-dark">Refund alerts</div>
                      <small className="fs-12 text-muted">
                        Receive a notification if a payment is stated as risk by
                        the Finance Department.{" "}
                      </small>
                    </td>
                    <td className="text-end">
                      <div className="form-group select-wd-lg">
                        <select
                          className="form-control"
                          data-select2-selector="icon"
                        >
                          <option value="SMS" data-icon="feather-smartphone">
                            SMS
                          </option>
                          <option
                            value="Push"
                            data-icon="feather-bell"
                            selected=""
                          >
                            Push
                          </option>
                          <option value="Email" data-icon="feather-mail">
                            Email
                          </option>
                          <option value="Repeat" data-icon="feather-repeat">
                            Repeat
                          </option>
                          <option
                            value="Deactivate"
                            data-icon="feather-bell-off"
                          >
                            Deactivate
                          </option>
                          <option
                            value="SMS+Push"
                            data-icon="feather-smartphone"
                          >
                            SMS + Push
                          </option>
                          <option value="Email+Push" data-icon="feather-mail">
                            Email + Push
                          </option>
                          <option
                            value="SMS+Email"
                            data-icon="feather-smartphone"
                          >
                            SMS + Email
                          </option>
                          <option
                            value="SMS+Push+Email"
                            data-icon="feather-smartphone"
                          >
                            SMS + Push + Email
                          </option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="fw-bold text-dark">Invoice payments</div>
                      <small className="fs-12 text-muted">
                        Receive a notification if a customer sends an incorrect
                        amount to pay their invoice.{" "}
                      </small>
                    </td>
                    <td className="text-end">
                      <div className="form-group select-wd-lg">
                        <select
                          className="form-control"
                          data-select2-selector="icon"
                        >
                          <option value="SMS" data-icon="feather-smartphone">
                            SMS
                          </option>
                          <option value="Push" data-icon="feather-bell">
                            Push
                          </option>
                          <option
                            value="Email"
                            data-icon="feather-mail"
                            selected=""
                          >
                            Email
                          </option>
                          <option value="Repeat" data-icon="feather-repeat">
                            Repeat
                          </option>
                          <option
                            value="Deactivate"
                            data-icon="feather-bell-off"
                          >
                            Deactivate
                          </option>
                          <option
                            value="SMS+Push"
                            data-icon="feather-smartphone"
                          >
                            SMS + Push
                          </option>
                          <option value="Email+Push" data-icon="feather-mail">
                            Email + Push
                          </option>
                          <option
                            value="SMS+Email"
                            data-icon="feather-smartphone"
                          >
                            SMS + Email
                          </option>
                          <option
                            value="SMS+Push+Email"
                            data-icon="feather-smartphone"
                          >
                            SMS + Push + Email
                          </option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="fw-bold text-dark">Rating reminders</div>
                      <small className="fs-12 text-muted">
                        Send an email reminding me to rate an item a week after
                        purchase{" "}
                      </small>
                    </td>
                    <td className="text-end">
                      <div className="form-group select-wd-lg">
                        <select
                          className="form-control"
                          data-select2-selector="icon"
                        >
                          <option value="SMS" data-icon="feather-smartphone">
                            SMS
                          </option>
                          <option value="Push" data-icon="feather-bell">
                            Push
                          </option>
                          <option value="Email" data-icon="feather-mail">
                            Email
                          </option>
                          <option value="Repeat" data-icon="feather-repeat">
                            Repeat
                          </option>
                          <option
                            value="Deactivate"
                            data-icon="feather-bell-off"
                            selected=""
                          >
                            Deactivate
                          </option>
                          <option
                            value="SMS+Push"
                            data-icon="feather-smartphone"
                          >
                            SMS + Push
                          </option>
                          <option value="Email+Push" data-icon="feather-mail">
                            Email + Push
                          </option>
                          <option
                            value="SMS+Email"
                            data-icon="feather-smartphone"
                          >
                            SMS + Email
                          </option>
                          <option
                            value="SMS+Push+Email"
                            data-icon="feather-smartphone"
                          >
                            SMS + Push + Email
                          </option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="fw-bold text-dark">
                        Item update notifications
                      </div>
                      <small className="fs-12 text-muted">
                        Send an email when an item I've purchased is updated{" "}
                      </small>
                    </td>
                    <td className="text-end">
                      <div className="form-group select-wd-lg">
                        <select
                          className="form-control"
                          data-select2-selector="icon"
                        >
                          <option value="SMS" data-icon="feather-smartphone">
                            SMS
                          </option>
                          <option value="Push" data-icon="feather-bell">
                            Push
                          </option>
                          <option value="Email" data-icon="feather-mail">
                            Email
                          </option>
                          <option value="Repeat" data-icon="feather-repeat">
                            Repeat
                          </option>
                          <option
                            value="Deactivate"
                            data-icon="feather-bell-off"
                          >
                            Deactivate
                          </option>
                          <option
                            value="SMS+Push"
                            data-icon="feather-smartphone"
                          >
                            SMS + Push
                          </option>
                          <option value="Email+Push" data-icon="feather-mail">
                            Email + Push
                          </option>
                          <option
                            value="SMS+Email"
                            data-icon="feather-smartphone"
                          >
                            SMS + Email
                          </option>
                          <option
                            value="SMS+Push+Email"
                            data-icon="feather-smartphone"
                            selected=""
                          >
                            SMS + Push + Email
                          </option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="fw-bold text-dark">
                        Item comment notifications
                      </div>
                      <small className="fs-12 text-muted">
                        Send me an email when someone comments on one of my
                        items{" "}
                      </small>
                    </td>
                    <td className="text-end">
                      <div className="form-group select-wd-lg">
                        <select
                          className="form-control"
                          data-select2-selector="icon"
                        >
                          <option value="SMS" data-icon="feather-smartphone">
                            SMS
                          </option>
                          <option value="Push" data-icon="feather-bell">
                            Push
                          </option>
                          <option value="Email" data-icon="feather-mail">
                            Email
                          </option>
                          <option value="Repeat" data-icon="feather-repeat">
                            Repeat
                          </option>
                          <option
                            value="Deactivate"
                            data-icon="feather-bell-off"
                          >
                            Deactivate
                          </option>
                          <option
                            value="SMS+Push"
                            data-icon="feather-smartphone"
                          >
                            SMS + Push
                          </option>
                          <option value="Email+Push" data-icon="feather-mail">
                            Email + Push
                          </option>
                          <option
                            value="SMS+Email"
                            data-icon="feather-smartphone"
                            selected=""
                          >
                            SMS + Email
                          </option>
                          <option
                            value="SMS+Push+Email"
                            data-icon="feather-smartphone"
                          >
                            SMS + Push + Email
                          </option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="fw-bold text-dark">
                        Team comment notifications
                      </div>
                      <small className="fs-12 text-muted">
                        Send me an email when someone comments on one of my team
                        items{" "}
                      </small>
                    </td>
                    <td className="text-end">
                      <div className="form-group select-wd-lg">
                        <select
                          className="form-control"
                          data-select2-selector="icon"
                        >
                          <option value="SMS" data-icon="feather-smartphone">
                            SMS
                          </option>
                          <option value="Push" data-icon="feather-bell">
                            Push
                          </option>
                          <option value="Email" data-icon="feather-mail">
                            Email
                          </option>
                          <option value="Repeat" data-icon="feather-repeat">
                            Repeat
                          </option>
                          <option
                            value="Deactivate"
                            data-icon="feather-bell-off"
                          >
                            Deactivate
                          </option>
                          <option
                            value="SMS+Push"
                            data-icon="feather-smartphone"
                          >
                            SMS + Push
                          </option>
                          <option
                            value="Email+Push"
                            data-icon="feather-mail"
                            selected=""
                          >
                            Email + Push
                          </option>
                          <option
                            value="SMS+Email"
                            data-icon="feather-smartphone"
                          >
                            SMS + Email
                          </option>
                          <option
                            value="SMS+Push+Email"
                            data-icon="feather-smartphone"
                          >
                            SMS + Push + Email
                          </option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="fw-bold text-dark">
                        Item review notifications
                      </div>
                      <small className="fs-12 text-muted">
                        Send me an email when my items are approved or rejected{" "}
                      </small>
                    </td>
                    <td className="text-end">
                      <div className="form-group select-wd-lg">
                        <select
                          className="form-control"
                          data-select2-selector="icon"
                        >
                          <option value="SMS" data-icon="feather-smartphone">
                            SMS
                          </option>
                          <option value="Push" data-icon="feather-bell">
                            Push
                          </option>
                          <option value="Email" data-icon="feather-mail">
                            Email
                          </option>
                          <option value="Repeat" data-icon="feather-repeat">
                            Repeat
                          </option>
                          <option
                            value="Deactivate"
                            data-icon="feather-bell-off"
                            selected=""
                          >
                            Deactivate
                          </option>
                          <option
                            value="SMS+Push"
                            data-icon="feather-smartphone"
                          >
                            SMS + Push
                          </option>
                          <option value="Email+Push" data-icon="feather-mail">
                            Email + Push
                          </option>
                          <option
                            value="SMS+Email"
                            data-icon="feather-smartphone"
                          >
                            SMS + Email
                          </option>
                          <option
                            value="SMS+Push+Email"
                            data-icon="feather-smartphone"
                          >
                            SMS + Push + Email
                          </option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="fw-bold text-dark">
                        Buyer review notifications
                      </div>
                      <small className="fs-12 text-muted">
                        Send me an email when someone leaves a review with their
                        rating{" "}
                      </small>
                    </td>
                    <td className="text-end">
                      <div className="form-group select-wd-lg">
                        <select
                          className="form-control"
                          data-select2-selector="icon"
                        >
                          <option value="SMS" data-icon="feather-smartphone">
                            SMS
                          </option>
                          <option value="Push" data-icon="feather-bell">
                            Push
                          </option>
                          <option value="Email" data-icon="feather-mail">
                            Email
                          </option>
                          <option value="Repeat" data-icon="feather-repeat">
                            Repeat
                          </option>
                          <option
                            value="Deactivate"
                            data-icon="feather-bell-off"
                          >
                            Deactivate
                          </option>
                          <option
                            value="SMS+Push"
                            data-icon="feather-smartphone"
                            selected=""
                          >
                            SMS + Push
                          </option>
                          <option value="Email+Push" data-icon="feather-mail">
                            Email + Push
                          </option>
                          <option
                            value="SMS+Email"
                            data-icon="feather-smartphone"
                          >
                            SMS + Email
                          </option>
                          <option
                            value="SMS+Push+Email"
                            data-icon="feather-smartphone"
                          >
                            SMS + Push + Email
                          </option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="fw-bold text-dark">
                        Expiring support notifications
                      </div>
                      <small className="fs-12 text-muted">
                        Send me emails showing my soon to expire support
                        entitlements{" "}
                      </small>
                    </td>
                    <td className="text-end">
                      <div className="form-group select-wd-lg">
                        <select
                          className="form-control"
                          data-select2-selector="icon"
                        >
                          <option value="SMS" data-icon="feather-smartphone">
                            SMS
                          </option>
                          <option value="Push" data-icon="feather-bell">
                            Push
                          </option>
                          <option
                            value="Email"
                            data-icon="feather-mail"
                            selected=""
                          >
                            Email
                          </option>
                          <option value="Repeat" data-icon="feather-repeat">
                            Repeat
                          </option>
                          <option
                            value="Deactivate"
                            data-icon="feather-bell-off"
                          >
                            Deactivate
                          </option>
                          <option
                            value="SMS+Push"
                            data-icon="feather-smartphone"
                          >
                            SMS + Push
                          </option>
                          <option value="Email+Push" data-icon="feather-mail">
                            Email + Push
                          </option>
                          <option
                            value="SMS+Email"
                            data-icon="feather-smartphone"
                          >
                            SMS + Email
                          </option>
                          <option
                            value="SMS+Push+Email"
                            data-icon="feather-smartphone"
                          >
                            SMS + Push + Email
                          </option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="fw-bold text-dark">
                        Daily summary emails
                      </div>
                      <small className="fs-12 text-muted">
                        Send me a daily summary of all items approved or
                        rejected{" "}
                      </small>
                    </td>
                    <td className="text-end">
                      <div className="form-group select-wd-lg">
                        <select
                          className="form-control"
                          data-select2-selector="icon"
                        >
                          <option value="SMS" data-icon="feather-smartphone">
                            SMS
                          </option>
                          <option
                            value="Push"
                            data-icon="feather-bell"
                            selected=""
                          >
                            Push
                          </option>
                          <option value="Email" data-icon="feather-mail">
                            Email
                          </option>
                          <option value="Repeat" data-icon="feather-repeat">
                            Repeat
                          </option>
                          <option
                            value="Deactivate"
                            data-icon="feather-bell-off"
                          >
                            Deactivate
                          </option>
                          <option
                            value="SMS+Push"
                            data-icon="feather-smartphone"
                          >
                            SMS + Push
                          </option>
                          <option value="Email+Push" data-icon="feather-mail">
                            Email + Push
                          </option>
                          <option
                            value="SMS+Email"
                            data-icon="feather-smartphone"
                          >
                            SMS + Email
                          </option>
                          <option
                            value="SMS+Push+Email"
                            data-icon="feather-smartphone"
                          >
                            SMS + Push + Email
                          </option>
                        </select>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr />
            <div className="notify-activity-section">
              <div className="px-4 mb-4 d-flex justify-content-between">
                <h5 className="fw-bold">Account Activity</h5>
                <a
                  href="javascript:void(0);"
                  className="btn btn-sm btn-light-brand"
                >
                  View Alls
                </a>
              </div>
              <div className="px-4">
                <div className="hstack justify-content-between p-4 mb-3 border border-dashed border-gray-3 rounded-1">
                  <div className="hstack me-4">
                    <div className="avatar-text">
                      <i className="feather-message-square" />
                    </div>
                    <div className="ms-4">
                      <a
                        href="javascript:void(0);"
                        className="fw-bold mb-1 text-truncate-1-line"
                      >
                        Someone comments on one of my items
                      </a>
                      <div className="fs-12 text-muted text-truncate-1-line">
                        If someone comments on one of your items, it's important
                        to respond in a timely and appropriate manner.
                      </div>
                    </div>
                  </div>
                  <div className="form-check form-switch form-switch-sm">
                    <label
                      className="form-check-label fw-500 text-dark c-pointer"
                      htmlFor="formSwitchComment"
                    />
                    <input
                      className="form-check-input c-pointer"
                      type="checkbox"
                      id="formSwitchComment"
                    />
                  </div>
                </div>
                <div className="hstack justify-content-between p-4 mb-3 border border-dashed border-gray-3 rounded-1">
                  <div className="hstack me-4">
                    <div className="avatar-text">
                      <i className="feather-briefcase" />
                    </div>
                    <div className="ms-4">
                      <a
                        href="javascript:void(0);"
                        className="fw-bold mb-1 text-truncate-1-line"
                      >
                        Someone replies to my job posting
                      </a>
                      <div className="fs-12 text-muted text-truncate-1-line">
                        Great! It's always exciting to hear from someone who's
                        interested in a job posting you've put out.
                      </div>
                    </div>
                  </div>
                  <div className="form-check form-switch form-switch-sm">
                    <label
                      className="form-check-label fw-500 text-dark c-pointer"
                      htmlFor="formSwitchReplie"
                    />
                    <input
                      className="form-check-input c-pointer"
                      type="checkbox"
                      id="formSwitchReplie"
                    />
                  </div>
                </div>
                <div className="hstack justify-content-between p-4 mb-3 border border-dashed border-gray-3 rounded-1">
                  <div className="hstack me-4">
                    <div className="avatar-text">
                      <i className="feather-briefcase" />
                    </div>
                    <div className="ms-4">
                      <a
                        href="javascript:void(0);"
                        className="fw-bold mb-1 text-truncate-1-line"
                      >
                        Someone mentions or follows me
                      </a>
                      <div className="fs-12 text-muted text-truncate-1-line">
                        If you received a notification that someone mentioned or
                        followed you, take a moment to read it and understand
                        what it means.
                      </div>
                    </div>
                  </div>
                  <div className="form-check form-switch form-switch-sm">
                    <label
                      className="form-check-label fw-500 text-dark c-pointer"
                      htmlFor="formSwitchFollow"
                    />
                    <input
                      className="form-check-input c-pointer"
                      type="checkbox"
                      id="formSwitchFollow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="connectionTab" role="tabpanel">
            <div className="development-connections p-4 pb-0">
              <div className="mb-4 d-flex align-items-center justify-content-between">
                <h5 className="fw-bold">Developement Connections:</h5>
                <a
                  href="javascript:void(0);"
                  className="btn btn-sm btn-light-brand"
                >
                  View Alls
                </a>
              </div>
              <div className="hstack justify-content-between p-4 mb-3 border border-dashed border-gray-3 rounded-1">
                <div className="hstack me-4">
                  <div className="wd-40">
                    <img
                      src="assets/images/brand/google-drive.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="ms-4">
                    <a
                      href="javascript:void(0);"
                      className="fw-bold mb-1 text-truncate-1-line"
                    >
                      Google Drive: Cloud Storage &amp; File Sharing
                    </a>
                    <div className="fs-12 text-muted text-truncate-1-line">
                      Google's powerful search capabilities are embedded in
                      Drive and offer speed, reliability, and collaboration. And
                      features like Drive search chips help your team ...
                    </div>
                  </div>
                </div>
                <div className="form-check form-switch form-switch-sm">
                  <label
                    className="form-check-label fw-500 text-dark c-pointer"
                    htmlFor="formSwitchGDrive"
                  />
                  <input
                    className="form-check-input c-pointer"
                    type="checkbox"
                    id="formSwitchGDrive"
                  />
                </div>
              </div>
              <div className="hstack justify-content-between p-4 mb-3 border border-dashed border-gray-3 rounded-1">
                <div className="hstack me-4">
                  <div className="wd-40">
                    <img
                      src="assets/images/brand/dropbox.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="ms-4">
                    <a
                      href="javascript:void(0);"
                      className="fw-bold mb-1 text-truncate-1-line"
                    >
                      Dropbox: Cloud Storage &amp; File Sharing
                    </a>
                    <div className="fs-12 text-muted text-truncate-1-line">
                      Dropbox brings everything—traditional files, cloud
                      content, and web shortcuts—together in one place. ... Save
                      and access your files from any device, and share ...
                    </div>
                  </div>
                </div>
                <div className="form-check form-switch form-switch-sm">
                  <label
                    className="form-check-label fw-500 text-dark c-pointer"
                    htmlFor="formSwitchDropbox"
                  />
                  <input
                    className="form-check-input c-pointer"
                    type="checkbox"
                    id="formSwitchDropbox"
                    defaultChecked=""
                  />
                </div>
              </div>
              <div className="hstack justify-content-between p-4 mb-3 border border-dashed border-gray-3 rounded-1">
                <div className="hstack me-4">
                  <div className="wd-40">
                    <img
                      src="assets/images/brand/github.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="ms-4">
                    <a
                      href="javascript:void(0);"
                      className="fw-bold mb-1 text-truncate-1-line"
                    >
                      GitHub: Where the world builds software
                    </a>
                    <div className="fs-12 text-muted text-truncate-1-line">
                      GitHub is where over 83 million developers shape the
                      future of software, together. Contribute to the open
                      source community, manage your Git repositories, ...
                    </div>
                  </div>
                </div>
                <div className="form-check form-switch form-switch-sm">
                  <label
                    className="form-check-label fw-500 text-dark c-pointer"
                    htmlFor="formSwitchGitHub"
                  />
                  <input
                    className="form-check-input c-pointer"
                    type="checkbox"
                    id="formSwitchGitHub"
                    defaultChecked=""
                  />
                </div>
              </div>
              <div className="hstack justify-content-between p-4 mb-3 border border-dashed border-gray-3 rounded-1">
                <div className="hstack me-4">
                  <div className="wd-40">
                    <img
                      src="assets/images/brand/gitlab.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="ms-4">
                    <a
                      href="javascript:void(0);"
                      className="fw-bold mb-1 text-truncate-1-line"
                    >
                      GitLab: The One DevOps Platform
                    </a>
                    <div className="fs-12 text-muted text-truncate-1-line">
                      GitLab helps you automate the builds, integration, and
                      verification of your code. With SAST, DAST, code quality
                      analysis, plus pipelines that enable ...
                    </div>
                  </div>
                </div>
                <div className="form-check form-switch form-switch-sm">
                  <label
                    className="form-check-label fw-500 text-dark c-pointer"
                    htmlFor="formSwitchGitLab"
                  />
                  <input
                    className="form-check-input c-pointer"
                    type="checkbox"
                    id="formSwitchGitLab"
                  />
                </div>
              </div>
              <div className="hstack justify-content-between p-4 mb-3 border border-dashed border-gray-3 rounded-1">
                <div className="hstack me-4">
                  <div className="wd-40">
                    <img
                      src="assets/images/brand/shopify.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="ms-4">
                    <a
                      href="javascript:void(0);"
                      className="fw-bold mb-1 text-truncate-1-line"
                    >
                      Shopify: Ecommerce Developers Platform
                    </a>
                    <div className="fs-12 text-muted text-truncate-1-line">
                      Try Shopify free and start a business or grow an existing
                      one. Get more than ecommerce software with tools to manage
                      every part of your business.
                    </div>
                  </div>
                </div>
                <div className="form-check form-switch form-switch-sm">
                  <label
                    className="form-check-label fw-500 text-dark c-pointer"
                    htmlFor="formSwitchShopify"
                  />
                  <input
                    className="form-check-input c-pointer"
                    type="checkbox"
                    id="formSwitchShopify"
                    defaultChecked=""
                  />
                </div>
              </div>
              <div className="hstack justify-content-between p-4 border border-dashed border-gray-3 rounded-1">
                <div className="hstack me-4">
                  <div className="wd-40">
                    <img
                      src="assets/images/brand/whatsapp.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="ms-4">
                    <a
                      href="javascript:void(0);"
                      className="fw-bold mb-1 text-truncate-1-line"
                    >
                      WhatsApp: WhatsApp from Facebook is a FREE messaging and
                      video calling app
                    </a>
                    <div className="fs-12 text-muted text-truncate-1-line">
                      Reliable messaging. With WhatsApp, you'll get fast,
                      simple, secure messaging and calling for free*, available
                      on phones all ...
                    </div>
                  </div>
                </div>
                <div className="form-check form-switch form-switch-sm">
                  <label
                    className="form-check-label fw-500 text-dark c-pointer"
                    htmlFor="formSwitchWhatsApp"
                  />
                  <input
                    className="form-check-input c-pointer"
                    type="checkbox"
                    id="formSwitchWhatsApp"
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="social-connections px-4 mb-4">
              <div className="mb-4 d-flex align-items-center justify-content-between">
                <h5 className="fw-bold">Social Connections:</h5>
                <a
                  href="javascript:void(0);"
                  className="btn btn-sm btn-light-brand"
                >
                  View Alls
                </a>
              </div>
              <div className="hstack justify-content-between p-4 mb-3 border border-dashed border-gray-3 rounded-1">
                <div className="hstack me-4">
                  <div className="wd-40">
                    <img
                      src="assets/images/brand/facebook.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="ms-4">
                    <a
                      href="javascript:void(0);"
                      className="fw-bold mb-1 text-truncate-1-line"
                    >
                      Facebook: The World Most Popular Social Network
                    </a>
                    <div className="fs-12 text-muted text-truncate-1-line">
                      Create an account or log into Facebook. Connect with
                      friends, family and other people you know. Share photos
                      and videos, send messages and get updates.
                    </div>
                  </div>
                </div>
                <div className="form-check form-switch form-switch-sm">
                  <label
                    className="form-check-label fw-500 text-dark c-pointer"
                    htmlFor="formSwitchFacebook"
                  />
                  <input
                    className="form-check-input c-pointer"
                    type="checkbox"
                    id="formSwitchFacebook"
                    defaultChecked=""
                  />
                </div>
              </div>
              <div className="hstack justify-content-between p-4 mb-3 border border-dashed border-gray-3 rounded-1">
                <div className="hstack me-4">
                  <div className="wd-40">
                    <img
                      src="assets/images/brand/instagram.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="ms-4">
                    <a
                      href="javascript:void(0);"
                      className="fw-bold mb-1 text-truncate-1-line"
                    >
                      Instagram: Edit &amp; Share photos, Videos &amp; Dessages
                    </a>
                    <div className="fs-12 text-muted text-truncate-1-line">
                      Create an account or log in to Instagram - A simple, fun
                      &amp; creative way to capture, edit &amp; share photos,
                      videos &amp; messages with friends &amp; family.
                    </div>
                  </div>
                </div>
                <div className="form-check form-switch form-switch-sm">
                  <label
                    className="form-check-label fw-500 text-dark c-pointer"
                    htmlFor="formSwitchInstagram"
                  />
                  <input
                    className="form-check-input c-pointer"
                    type="checkbox"
                    id="formSwitchInstagram"
                  />
                </div>
              </div>
              <div className="hstack justify-content-between p-4 mb-3 border border-dashed border-gray-3 rounded-1">
                <div className="hstack me-4">
                  <div className="wd-40">
                    <img
                      src="assets/images/brand/twitter.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="ms-4">
                    <a
                      href="javascript:void(0);"
                      className="fw-bold mb-1 text-truncate-1-line"
                    >
                      Twitter: It's what's happening / Twitter{" "}
                    </a>
                    <div className="fs-12 text-muted text-truncate-1-line">
                      From breaking news and entertainment to sports and
                      politics, get the full story with all the live commentary.
                    </div>
                  </div>
                </div>
                <div className="form-check form-switch form-switch-sm">
                  <label
                    className="form-check-label fw-500 text-dark c-pointer"
                    htmlFor="formSwitchTwitter"
                  />
                  <input
                    className="form-check-input c-pointer"
                    type="checkbox"
                    id="formSwitchTwitter"
                    defaultChecked=""
                  />
                </div>
              </div>
              <div className="hstack justify-content-between p-4 mb-3 border border-dashed border-gray-3 rounded-1">
                <div className="hstack me-4">
                  <div className="wd-40">
                    <img
                      src="assets/images/brand/spotify.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="ms-4">
                    <a
                      href="javascript:void(0);"
                      className="fw-bold mb-1 text-truncate-1-line"
                    >
                      Spotify: Web Player: Music for everyone{" "}
                    </a>
                    <div className="fs-12 text-muted text-truncate-1-line">
                      Spotify is a digital music service that gives you access
                      to millions of songs.
                    </div>
                  </div>
                </div>
                <div className="form-check form-switch form-switch-sm">
                  <label
                    className="form-check-label fw-500 text-dark c-pointer"
                    htmlFor="formSwitchSpotify"
                  />
                  <input
                    className="form-check-input c-pointer"
                    type="checkbox"
                    id="formSwitchSpotify"
                    defaultChecked=""
                  />
                </div>
              </div>
              <div className="hstack justify-content-between p-4 mb-3 border border-dashed border-gray-3 rounded-1">
                <div className="hstack me-4">
                  <div className="wd-40">
                    <img
                      src="assets/images/brand/youtube.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="ms-4">
                    <a
                      href="javascript:void(0);"
                      className="fw-bold mb-1 text-truncate-1-line"
                    >
                      YouTube: The World Largest Video Sharing Platform
                    </a>
                    <div className="fs-12 text-muted text-truncate-1-line">
                      Enjoy the videos and music you love, upload original
                      content, and share it all with friends, family, and the
                      world on YouTube.
                    </div>
                  </div>
                </div>
                <div className="form-check form-switch form-switch-sm">
                  <label
                    className="form-check-label fw-500 text-dark c-pointer"
                    htmlFor="formSwitchYouTube"
                  />
                  <input
                    className="form-check-input c-pointer"
                    type="checkbox"
                    id="formSwitchYouTube"
                  />
                </div>
              </div>
              <div className="hstack justify-content-between p-4 border border-dashed border-gray-3 rounded-1">
                <div className="hstack me-4">
                  <div className="wd-40">
                    <img
                      src="assets/images/brand/pinterest.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="ms-4">
                    <a
                      href="javascript:void(0);"
                      className="fw-bold mb-1 text-truncate-1-line"
                    >
                      Pinterest: Discover recipes, home ideas, style inspiration
                      and other ideas to try
                    </a>
                    <div className="fs-12 text-muted text-truncate-1-line">
                      Pinterest is an image sharing and social media service
                      designed to enable saving and discovery of information on
                      the internet using images.
                    </div>
                  </div>
                </div>
                <div className="form-check form-switch form-switch-sm">
                  <label
                    className="form-check-label fw-500 text-dark c-pointer"
                    htmlFor="formSwitchPinterest"
                  />
                  <input
                    className="form-check-input c-pointer"
                    type="checkbox"
                    id="formSwitchPinterest"
                    defaultChecked=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade p-4" id="securityTab" role="tabpanel">
            <div className="p-4 mb-4 border border-dashed border-gray-3 rounded-1">
              <h6 className="fw-bolder">
                <a href="javascript:void(0);">Two-factor Authentication</a>
              </h6>
              <div className="fs-12 text-muted text-truncate-3-line mt-2 mb-4">
                Two-factor authentication is an enhanced security meansur. Once
                enabled, you'll be required to give two types of identification
                when you log into Google Authentication and SMS are Supported.
              </div>
              <div className="form-check form-switch form-switch-sm">
                <label
                  className="form-check-label fw-500 text-dark c-pointer"
                  htmlFor="2faVerification"
                >
                  Enable 2FA Verification
                </label>
                <input
                  className="form-check-input c-pointer"
                  type="checkbox"
                  id="2faVerification"
                  defaultChecked=""
                />
              </div>
            </div>
            <div className="p-4 mb-4 border border-dashed border-gray-3 rounded-1">
              <h6 className="fw-bolder">
                <a href="javascript:void(0);">Secondary Verification</a>
              </h6>
              <div className="fs-12 text-muted text-truncate-3-line mt-2 mb-4">
                The first factor is a password and the second commonly includes
                a text with a code sent to your smartphone, or biometrics using
                your fingerprint, face, or retina.
              </div>
              <div className="form-check form-switch form-switch-sm">
                <label
                  className="form-check-label fw-500 text-dark c-pointer"
                  htmlFor="secondaryVerification"
                >
                  Set up secondary method
                </label>
                <input
                  className="form-check-input c-pointer"
                  type="checkbox"
                  id="secondaryVerification"
                  defaultChecked=""
                />
              </div>
            </div>
            <div className="p-4 mb-4 border border-dashed border-gray-3 rounded-1">
              <h6 className="fw-bolder">
                <a href="javascript:void(0);">Backup Codes</a>
              </h6>
              <div className="fs-12 text-muted text-truncate-3-line mt-4 mb-4">
                A backup code is automatically generated for you when you turn
                on two-factor authentication through your iOS or Android Twitter
                app. You can also generate a backup code on twitter.com.
              </div>
              <div className="form-check form-switch form-switch-sm">
                <label
                  className="form-check-label fw-500 text-dark c-pointer"
                  htmlFor="generateBackup"
                >
                  Generate backup codes
                </label>
                <input
                  className="form-check-input c-pointer"
                  type="checkbox"
                  id="generateBackup"
                />
              </div>
            </div>
            <div className="p-4 border border-dashed border-gray-3 rounded-1">
              <h6 className="fw-bolder">
                <a href="javascript:void(0);">Login Verification</a>
              </h6>
              <div className="fs-12 text-muted text-truncate-3-line mt-2 mb-4">
                Login verification is an enhanced security meansur. Once
                enabled, you'll be required to give two types of identification
                when you log into Google Authentication and SMS are Supported.
              </div>
              <div className="form-check form-switch form-switch-sm">
                <label
                  className="form-check-label fw-500 text-dark c-pointer"
                  htmlFor="loginVerification"
                >
                  Enable Login Verification
                </label>
                <input
                  className="form-check-input c-pointer"
                  type="checkbox"
                  id="loginVerification"
                  defaultChecked=""
                />
              </div>
            </div>
            <hr className="my-5" />
            <div
              className="alert alert-dismissible mb-4 p-4 d-flex alert-soft-danger-message"
              role="alert"
            >
              <div className="me-4 d-none d-md-block">
                <i className="feather feather-alert-triangle text-danger fs-1" />
              </div>
              <div>
                <p className="fw-bold mb-0 text-truncate-1-line">
                  You Are Delete or Deactivating Your Account
                </p>
                <p className="text-truncate-3-line mt-2 mb-4">
                  Two-factor authentication adds an additional layer of security
                  to your account by requiring more than just a password to log
                  in.
                </p>
                <a
                  href="javascript:void(0);"
                  className="btn btn-sm btn-danger d-inline-block"
                >
                  Learn more
                </a>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                />
              </div>
            </div>
            <div className="card mt-5">
              <div className="card-body">
                <h6 className="fw-bold">Delete Account</h6>
                <p className="fs-11 text-muted">
                  Go to the Data &amp; Privacy section of your profile Account.
                  Scroll to "Your data &amp; privacy options." Delete your
                  Profile Account. Follow the instructions to delete your
                  account:
                </p>
                <div className="my-4 py-2">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                  />
                  <div className="mt-3">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="acDeleteDeactive"
                      />
                      <label
                        className="custom-control-label c-pointer"
                        htmlFor="acDeleteDeactive"
                      >
                        I confirm my account deletations or deactivation.
                      </label>
                    </div>
                  </div>
                </div>
                <div className="d-sm-flex gap-2">
                  <a
                    href="javascript:void(0);"
                    className="btn btn-danger"
                    data-action-target="#acSecctingsActionMessage"
                  >
                    Delete Account
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="btn btn-warning mt-2 mt-sm-0 successAlertMessage"
                  >
                    Deactiveted Account
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
 

    </>
  );
}
export default EmployeeProfile;