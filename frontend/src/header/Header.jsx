import "./Header.css";

function Header() {
    return (
        <header className="header">
            <img src="/vision-college.svg" alt="Vision College" className="header_logo" />
            <nav className="header_nav">
                <a href="#about">About Us</a>
                <a href="#courses">Courses</a>
                <a href="#enquire">Enquire</a>
                <a href="#apply">Apply</a>
            </nav>
        </header>
);
}

export default Header;