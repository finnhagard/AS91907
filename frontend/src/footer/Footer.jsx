import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_columns">
                <div className="footer_col footer_blurb" id="footer_blurb">
                    <h3>Vision College Learning Centre</h3>
                    <p>The Learning Centre is an initiative of Vision College to assist
                    secondary school students on their learning pathways, initially in English
                    and Chinese but with more programmes to be added over time.</p>
                    <p><a href="https://visioncollege.ac.nz" target="_blank">visioncollege.ac.nz</a></p>
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
                        <li><a href="mailto:info@visionlearningcentre.ac.nz">info@visionlearningcentre.ac.nz</a></li>
                        <li>0800 847 236</li>
                    </ul>
                </div>
            </div>
            <div className="footer_bottom">
                <p>&copy; Vision College Learning Centre. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
