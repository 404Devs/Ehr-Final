import React, { useState } from 'react';
import './Navbar.css'; // Importing the CSS file
// import Login from '../Home/Login'
import '../Data'
// import logo
import logoimg from '../assets/images/logo-hospital.png';
import { Link } from 'react-router-dom';
function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className='container-fluid g-0'>
            <div className='container'>
                <nav className="navbar">
                    <div className="navbar-container">
                        {/* Logo */}
                        <div className="logo">
                            {/* <img src={logoimg} alt="Hospital Logo" /> */}
                            
                            <span class="smart">SMAART</span> <span class="healthcare"> HEALTHCARE</span>           
                    </div>

                        {/* Nav Links */}
                        <ul className={isOpen ? "nav-links active" : "nav-links"}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/About">About us</Link></li>
                            <li><Link to="/AllDoctors">Services</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                        </ul>
                        {/* Create Account Button */}
                        <div className=" rounded-pill login-btn ">
                            <Link to="/Login" className="btn text-white fs-6">Log-in</Link>
                        </div>

                        {/* Toggle Button for Mobile */}
                        <div className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    );
};

export default Navbar;

