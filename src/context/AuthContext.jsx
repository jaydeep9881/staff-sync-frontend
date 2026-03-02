import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  // Helper to check if token is expired
  const isTokenExpired = (token) => {
    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000; // convert to seconds
      return decoded.exp < currentTime; // true if expired
    } catch {
      return true; // if token is invalid treat as expired
    }
  };

  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        // Check if token is already expired on page load
        if (isTokenExpired(token)) {
          localStorage.clear(); // clean up
          return null;
        }
        const decoded = jwtDecode(token);
        return {
          username: decoded.sub,
          role: decoded.role,
          employeeId: decoded.employeeId,
          token: token,
          exp: decoded.exp, // ← store expiry time
        };
      } catch {
        return null;
      }
    }
    return null;
  });

  // Auto logout when token expires
  useEffect(() => {
    if (!user) return;

    const currentTime = Date.now() / 1000;
    const timeUntilExpiry = user.exp - currentTime; // seconds remaining

    console.log(`Token expires in ${Math.round(timeUntilExpiry)} seconds`);

    if (timeUntilExpiry <= 0) {
      logout(); // already expired
      return;
    }

    // Set a timer to auto logout exactly when token expires
    const timer = setTimeout(() => {
      console.log("Token expired! Logging out...");
      logout();
      alert("Your session has expired. Please login again."); 
    }, timeUntilExpiry * 1000); // convert to milliseconds

    // Cleanup timer if user logs out manually before expiry
    return () => clearTimeout(timer);

  }, [user]); // runs whenever user state changes

  const login = (token) => {
    const decoded = jwtDecode(token);
    const userData = {
      username: decoded.sub,
      role: decoded.role,
      employeeId: decoded.employeeId,
      token: token,
      exp: decoded.exp, // ← save expiry
    };
    localStorage.setItem("token", token);
    localStorage.setItem("role", decoded.role);
    localStorage.setItem("username", decoded.sub);
    localStorage.setItem("employeeId", decoded.employeeId);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    localStorage.removeItem("employeeId");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
 
 

 // How it works
// ```
// User logs in
//     ↓
// Token saved with exp time e.g exp = 1000 seconds from now
//     ↓
// useEffect starts a timer for 1000 seconds
//     ↓
// After 1000 seconds timer fires
//     ↓
// logout() is called automatically
//     ↓
// localStorage cleared, user = null
//     ↓
// ProtectedRoute sees user = null → redirects to /login