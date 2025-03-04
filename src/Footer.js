import React from 'react';
import './Footer.css';
import consultlogo from './images/consultlogo.png'
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
 
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <img src={consultlogo} alt="Logo" className="footer-logo" />
                    <p><FaMapMarkerAlt /> Suite No. G05, A 140, Sector 63 Rd, A Block,<br /> Sector 63, Noida, Uttar Pradesh 201301.</p>
                    <p><FaPhoneAlt /> +91 892-980-3352</p>
                    <p className='open'><span className="open-hours"><b>Open Hours:</b></span><br />Mon-Sat: 8 am - 5 pm,<br />Sunday: Non Operational</p>
                </div>
                <div className="footer-right">
                    <h3>Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
 
export default Footer;