import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const UserNavBar = () => {
const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar-item">
                <Link className="navbar-link" to="/inspections">
                    Inspections
                </Link>
            </li>
            <li className="navbar-item">
                <Link className="navbar-link" to="/properties">
                    Properties
                </Link>
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
)}