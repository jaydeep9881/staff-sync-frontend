import Menu from "./Menu"
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext.jsx";
function Home(){
        const { user } = useAuth();
    return(<>
    
    <Menu/>
    <main className="nxl-container">
        <div className="nxl-content">
            <h1>Welcome {user?.username || "Guest"}!</h1>
          <Outlet />
        </div>
    </main>
    </>)
}
export default Home