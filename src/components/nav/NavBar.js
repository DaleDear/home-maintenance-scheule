import { Link } from "react-router-dom"
import "./NavBar.css"
import { useNavigate } from "react-router-dom"

export const NavBar = () => {
const navigate = useNavigate()

    return <ul className="navbar">
        <li className="navbar-item">
            <Link to="/inspections">Inspections</Link>
        </li>
        <li className="navbar-item">
            <Link to="/properties">Properties</Link>
        </li>
         <li className="navbar-item">
            <Link to="/users">Users</Link>
        </li>
        {localStorage.getItem("honey_user") ? (
  <li className="navbar-item navbar-logout">
    <Link
      className="navbar-link"
      to=""
      onClick={() => {
        localStorage.removeItem("honey_user")
        navigate("/", { replace: true })
      }}
    >
      Logout
    </Link>
  </li>
) : (
  ""
)}
    </ul>
}