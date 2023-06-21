import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import { CiFacebook, CiTwitter, CiLinkedin } from "react-icons/ci";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
    return (
        <div>
            <footer className="footer-distributed">
                <div className="footer-left">
                    <h3>
                        Send<span>Y</span>
                    </h3>

                    <p className="footer-links">
                        <Link to="/" className="link-1">
                            Home
                        </Link>
                        <Link to="/service">Service</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contactUs">Contact</Link>
                    </p>

                    <p className="footer-company-name">SendY © 2015</p>
                </div>

                <div className="footer-center">
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p>
                            <span>444 S. Moi Ave</span> Solana Beach, Nairobi
                        </p>
                    </div>

                    <div>
                        <i className="fa fa-phone"></i>
                        <p>+1.555.555.5555</p>
                    </div>

                    <div>
                        <i className="fa fa-envelope"></i>
                        <p>
                            <a href="mailto:support@company.com">
                                support@company.com
                            </a>
                        </p>
                    </div>
                </div>

                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>About the company</span>
                        Lorem ipsum dolor sit amet, consectateur adispicing
                        elit. Fusce euismod convallis velit, eu auctor lacus
                        vehicula sit amet.
                    </p>

                    <div className="footer-icons">
                        <a href="www.facebook.com">
                            <i className="fa fa-facebook">
                                <CiFacebook size={30} />
                            </i>
                        </a>
                        <a href="www.twitter.com">
                            <i className="fa fa-twitter">
                                <CiTwitter size={30} />
                            </i>
                        </a>
                        <a href="www.linkedIn.com">
                            <i className="fa fa-linkedin">
                                <CiLinkedin size={30} />
                            </i>
                        </a>
                        <a href="www.github.com">
                            <i className="fa fa-github">
                                <BsGithub size={30} />
                            </i>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
