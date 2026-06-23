import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <Link to="/"><img src="/vision-college.svg" alt="Vision College" className="header_logo" /></Link>
            <nav className="header_nav">
                <Link to="/about">About Us</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/enquire">Enquire</Link>
                <Link to="/apply">Apply</Link>
            </nav>
        </header>
    );
}

export default Header;