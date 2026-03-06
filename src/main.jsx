import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import "./assets/css/bootstrap.min.css";
import "./assets/vendors/css/vendors.min.css";
import "./assets/vendors/css/daterangepicker.min.css";
import "./assets/css/theme.min.css";

import Home from "./components/Home.jsx";
import Menu from "./components/Menu.jsx";
import NotFound from "./components/NotFound.jsx";
import Employees from "./components/employee/Employees.jsx";
import EmployeeProfile from "./components/employee/EmployeeProfile.jsx";
import EmployeeUpdate from "./components/employee/EmployeeUpdate.jsx";
import AddEmployee from "./components/employee/AddEmployee.jsx";
import Department from "./components/Department/Department.jsx";
import Login from "./components/Login.jsx";
import { AuthProvider } from "./context/AuthContext.jsx"; // ← ADD THIS
import AdminDashbord from "./components/admin/AdminDashbord.jsx";
import Unauthorized from "./components/Unauthorized.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { useAuth } from "./context/AuthContext.jsx"; // ← ADD THIS
import UsersList from "./components/user/UsersList.jsx";
const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/unauthorized", element: <Unauthorized /> },
  {
    path: "/",
    element:  <ProtectedRoute allowedRoles={["ROLE_ADMIN", "ROLE_USER"]}>
            <Home />
          </ProtectedRoute>,
    children: [
      {
        path: "employees",
        element: (
          <ProtectedRoute allowedRoles={["ROLE_ADMIN"]}>
            <Employees />
          </ProtectedRoute>
        ),
      },
      {
        path: "/employees/:id",
        element: (
          <ProtectedRoute allowedRoles={["ROLE_ADMIN"]}>
            <EmployeeProfile />
          </ProtectedRoute>
        ),
      },
      { path: "update/:id", element:
         <ProtectedRoute allowedRoles={["ROLE_ADMIN"]}>
            <EmployeeUpdate />
          </ProtectedRoute>  },
      { path: "/addemployee", element: <ProtectedRoute allowedRoles={["ROLE_ADMIN"]}>
           <AddEmployee />
          </ProtectedRoute> },
          {
            path:"/users",
            element:<ProtectedRoute allowedRoles={["ROLE_ADMIN"]}>
           <UsersList />
          </ProtectedRoute>
          }
    ],
  },
  {
    path: "/departments",
    element:<ProtectedRoute allowedRoles={["ROLE_ADMIN"]}>
           <Home />
          </ProtectedRoute> ,
    children: [{ path: "", element: <ProtectedRoute allowedRoles={["ROLE_ADMIN"]}>
           <Department />
          </ProtectedRoute> }],
  },

  {
    path: "/admin/",
    element: <ProtectedRoute allowedRoles={["ROLE_ADMIN"]}><Home /></ProtectedRoute>,
    children: [{ path: "dashboard", element: <ProtectedRoute allowedRoles={["ROLE_ADMIN"]}>
            <h1>Admin Dashboard </h1>
          </ProtectedRoute> }],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      {" "}
      {/* ← ADD THIS */}
      <RouterProvider router={router} />
    </AuthProvider>{" "}
    {/* ← ADD THIS */}
  </StrictMode>,
);
