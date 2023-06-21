import React from "react";
import "../styles/nav.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navigation">
            <Link to="/" className="brand-name">
                <h3>
                    Send<span>Y</span>
                </h3>
            </Link>

            <div className="navigation-menu">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Service">Services</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/ContactUs">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
