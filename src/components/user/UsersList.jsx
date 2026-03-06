import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [employee, setEmployee] = useState([]);

  // Separate state for new user form
  const [newUser, setNewUser] = useState({
    username: "",
    role: "",
    password: "",
    employeeId: ""
  });

   
  const [editData, setEditData] = useState({});
  
  useEffect(() => {
    axios.get("/users")
      .then((res) => {
        setUsers(res.data);
      
        const initialEditData = {};
        res.data.forEach((u) => {
          initialEditData[u.id] = {
            username: u.username,
            role: u.role,
            password: "",
            employeeId: u.employeeId || ""
          };
        });
        setEditData(initialEditData); // ← each row has its own state
      })
      .catch((error) => console.log(error));
  }, []);

   
  useEffect(() => {
    axios.get("/employees")
      .then((res) => setEmployee(res.data))
      .catch((error) => console.log(error));
  }, []);

    
  const handleEditChange = (id, field, value) => {
    setEditData((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value
      }
    }));
  };

  // Add new user
  const handleAdd = () => {
    axios.post("/register", {
      username: newUser.username,
      role: newUser.role,
      password: newUser.password,
      employeeId: Number(newUser.employeeId)
    })
      .then((res) => {
        setUsers([...users, res.data]);
        // Add new user to editData
        setEditData((prev) => ({
          ...prev,
          [res.data.id]: {
            username: res.data.username,
            role: res.data.role,
            password: "",
            employeeId: res.data.employeeId || ""
          }
        }));
        setShow(false);
        setNewUser({ username: "", role: "", password: "", employeeId: "" });
      })
      .catch((error) => console.log(error));
  };

  // Update user using that row's editData
  const updateUser = (id) => {
    const data = editData[id]; // ← get this specific row's data
    axios.put(`/users/${id}`, {
      username: data.username,
      role: data.role,
      password: data.password,
      employeeId: Number(data.employeeId)
    })
      .then((res) => {
        setUsers(users.map((u) => u.id === id ? res.data : u));
        alert("User updated successfully");
      })
      .catch((error) => console.log(error));
  };

  // Delete user
  const deleteUser = (id) => {
    if (confirm("Are you sure you want to delete this user?")) {
      axios.delete(`/users/${id}`)
        .then(() => {
          setUsers(users.filter((u) => u.id !== id));
          // Remove from editData too
          setEditData((prev) => {
            const updated = { ...prev };
            delete updated[id];
            return updated;
          });
        })
        .catch((error) => console.log(error));
    }
  };

  // Helper to get employee name
  const getEmployeeName = (employeeId) => {
    const emp = employee.find((e) => e.id === employeeId);
    return emp ? `${emp.firstName} ${emp.lastName}` : "No Employee";
  };

  return (
    <>
      <div className="page-header d-flex fixed-header">
        <div className="page-header-left d-flex align-items-center">
          <div className="page-header-title">
            <h5 className="m-b-10">Users</h5>
          </div>
          <ul className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item">Users list</li>
          </ul>
        </div>
      </div>

      <div className="main-content">
        <div className="row">
          <div className="col-xxl-12">
            <div className="card stretch stretch-full">
              <div className="card-header">
                <h5 className="card-title">
                  <button
                    onClick={() => setShow((show) => !show)}
                    className="btn btn-success d-flex align-items-center gap-2"
                  >
                    <span className="fs-5">+</span>
                    <span>Add User</span>
                  </button>
                </h5>
              </div>

              <div className="card-body custom-card-action p-0">
                <div className="table-responsive">
                  <table className="table table-hover table-bordered mb-0">
                    <thead className="table-dark">
                      <tr>
                        <th>Username</th>
                        <th>Role</th>
                        <th>Employee</th>
                        <th>Password</th>
                        <th className="text-end">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Add new user row */}
                      {show && (
                        <tr className="align-middle">
                          <td>
                            <input
                              type="text"
                              className="form-control form-control-sm bg-transparent border-secondary text-body"
                              placeholder="Username"
                              value={newUser.username}
                              onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                              required
                            />
                          </td>
                          <td>
                            <select
                              className="form-select form-select-sm bg-transparent border-secondary text-body"
                              value={newUser.role}
                              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                              required
                            >
                              <option value="">Select Role</option>
                              <option value="ADMIN">ADMIN</option>
                              <option value="USER">USER</option>
                            </select>
                          </td>
                          <td>
                            <select
                              className="form-select form-select-sm bg-transparent border-secondary text-body"
                              value={newUser.employeeId}
                              onChange={(e) => setNewUser({ ...newUser, employeeId: e.target.value })}
                            >
                              <option value="">Select Employee</option>
                              {employee.map((emp) => (
                                <option key={emp.id} value={emp.id}>
                                  {emp.firstName} {emp.lastName}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <input
                              type="password"
                              className="form-control form-control-sm bg-transparent border-secondary text-body"
                              placeholder="Password"
                              value={newUser.password}
                              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                              required
                            />
                          </td>
                          <td>
                            <div className="d-flex gap-2 justify-content-end">
                              <button onClick={handleAdd} className="btn btn-success btn-sm">
                                Save
                              </button>
                            </div>
                          </td>
                        </tr>
                      )}

                      {/* Users list */}
                      {users.map((u) => (
                        <tr key={u.id} className="align-middle">
                          <td>
                            <input
                              type="text"
                              className="form-control form-control-sm bg-transparent border-secondary text-body"
                              value={editData[u.id]?.username || ""}
                              onChange={(e) => handleEditChange(u.id, "username", e.target.value)}
                            />
                          </td>
                          <td>
                            <select
                              className="form-select form-select-sm bg-transparent border-secondary text-body"
                              value={editData[u.id]?.role || ""}
                              onChange={(e) => handleEditChange(u.id, "role", e.target.value)}
                            >
                              <option value="">Select Role</option>
                              <option value="ADMIN">ADMIN</option>
                              <option value="USER">USER</option>
                            </select>
                          </td>
                          <td>
                            <select
                              className="form-select form-select-sm bg-transparent border-secondary text-body"
                              value={editData[u.id]?.employeeId || ""}
                              onChange={(e) => handleEditChange(u.id, "employeeId", e.target.value)}
                            >
                              <option value="">Select Employee</option>
                              {employee.map((emp) => (
                                <option key={emp.id} value={emp.id}>
                                  {emp.firstName} {emp.lastName}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <input
                              type="password"
                              className="form-control form-control-sm bg-transparent border-secondary text-body"
                              placeholder="New password"
                              value={editData[u.id]?.password || ""}
                              onChange={(e) => handleEditChange(u.id, "password", e.target.value)}
                            />
                          </td>
                          <td>
                            <div className="d-flex gap-2 justify-content-end">
                              <button
                                onClick={() => updateUser(u.id)}
                                className="btn btn-primary btn-sm"
                              >
                                <i className="feather-edit" /> Update
                              </button>
                              <button
                                onClick={() => deleteUser(u.id)}
                                className="btn btn-danger btn-sm"
                              >
                                <i className="feather-trash-2" /> Delete
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

export default UsersList;