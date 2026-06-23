import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_columns">
                <div className="footer_col">
                    <h3>Vision College</h3>
                    <p>vision college wow text goes here</p>
                </div>
                <div className="footer_col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                        <li><a href="/enquire">Enquire</a></li>
                        <li><a href="/apply">Apply</a></li>
                    </ul>
                </div>
                <div className="footer_col">
                    <h3>Contact us!</h3>
                    <ul>
                        <li>123 FiDdLe Street</li>
                        <li>Evahaghar Place, New Zealand</li>
                        <li>email@verycooldomainhere.co.nz</li>
                        <li>000 000 0000</li>
                    </ul>
                </div>
            </div>
            <div className="footer_bottom">
                <p>&copy; Vision College Learning Centre. All rights reserved!</p>
            </div>
        </footer>
    );
}

export default Footer;
