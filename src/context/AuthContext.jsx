import { createContext, useContext, useState } from "react";
import { jwtDecode } from "jwt-decode";

// Create the context
const AuthContext = createContext();

// Provider component - wraps your entire app
export function AuthProvider({ children }) {
  // Initialize state from localStorage so login persists on page refresh
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        return {
          username: decoded.sub,
          role: decoded.role,
          token: token,
        };
      } catch {
        return null;
      }
    }
    return null;
  });

  const login = (token) => {
    const decoded = jwtDecode(token);
    const userData = {
      username: decoded.sub,
      role: decoded.role,
      token: token,
    };
    localStorage.setItem("token", token);
    localStorage.setItem("role", decoded.role);
    localStorage.setItem("username", decoded.sub);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth anywhere in the app
export function useAuth() {
  return useContext(AuthContext);
}