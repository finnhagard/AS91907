import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_columns">
                <div className="footer_col">
                    <h3>Vision College</h3>
                    <p>info goes here</p>
                </div>
                <div className="footer_col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/enquire">Enquire</Link></li>
                        <li><Link to="/apply">Apply</Link></li>
                    </ul>
                </div>
                <div className="footer_col">
                    <h3>Contact us!</h3>
                    <ul>
                        <li>21 Ruakura Road</li>
                        <li>Hamilton East, Hamilton 3216</li>
                        <li>info@visionlearningcentre.ac.nz</li>
                        <li>0800 847 236</li>
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
