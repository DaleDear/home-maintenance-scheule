import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return <ul className="navbar">
        <li className="navbar-item">
            <Link to="/inspections">Inspections</Link>
        </li>
        <li className="navbar-item">
            <Link to="/properties">Properties</Link>
        </li>
    </ul>
}