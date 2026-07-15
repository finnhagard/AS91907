import {Link, NavLink} from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <Link to="/"><img src="/vision-college.svg" alt="Vision College" className="header_logo" /></Link>
            <nav className="header_nav">
                <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About Us</NavLink>
                <NavLink to="/courses" className={({ isActive }) => isActive ? "active" : ""}>Courses</NavLink>
                <NavLink to="/enquire" className={({ isActive }) => isActive ? "active" : ""}>Enquire</NavLink>
                <NavLink to="/apply" className={({ isActive }) => isActive ? "active" : ""}>Apply</NavLink>
            </nav>
        </header>
    );
}

export default Header;