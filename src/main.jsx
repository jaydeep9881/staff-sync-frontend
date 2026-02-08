import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import './assets/css/bootstrap.min.css';
import './assets/vendors/css/vendors.min.css';
import './assets/vendors/css/daterangepicker.min.css';
import './assets/css/theme.min.css';

import Home from './components/Home.jsx';
import Menu from './components/Menu.jsx';
import NotFound from './components/NotFound.jsx';
import Employees from './components/Employees.jsx';
import EmployeeProfile from './components/EmployeeProfile.jsx';
import EmployeeUpdate from './components/EmployeeUpdate.jsx';
import AddEmployee from './components/AddEmployee.jsx';
import Department from './components/Department/Department.jsx';
const router = createBrowserRouter([
  {
    path: '/', element: <Home />, children: [{ path: 'employees', element: <Employees /> },
    { path: '/employees/:id', element: <EmployeeProfile /> },
    { path: 'update/:id', element: <EmployeeUpdate /> },
    { path: '/addemployee', element: <AddEmployee /> },
      // { path: '/removeemployee/:id', element: <RemoveEmployee /> }
    ]
  },


  // { path: '/employees', element: <Employees /> },
  {
    path: '/departments', element: <Home />,
    children: [
      {
        path: '',
        element: <Department />

      }

    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
