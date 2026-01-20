import Menu from "./Menu"
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
function Home(){
    return(<>
    <Menu/>
    <main className="nxl-container">
        <div className="nxl-content">
          <Outlet />
        </div>
    </main>
    </>)
}
export default Home