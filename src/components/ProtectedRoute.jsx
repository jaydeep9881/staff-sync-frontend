import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRoles }) {
  const { user } = useAuth();

  // Not logged in → go to login page
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Logged in but wrong role → go to unauthorized page
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }

  // All good → show the page
  return children;
}

export default ProtectedRoute;