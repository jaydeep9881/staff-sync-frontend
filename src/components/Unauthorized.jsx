import { useNavigate } from "react-router-dom";

function Unauthorized() {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h2 className="text-danger">Access Denied!</h2>
      <p>You do not have permission to view this page.</p>
      <button className="btn btn-primary" onClick={() => navigate("/")}>
        Go Back
      </button>
    </div>
  );
}

export default Unauthorized;