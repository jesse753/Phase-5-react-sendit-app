import React from "react";
import "../styles/hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero-section-2">
            <div className="hero-content">
                <h1>Efficient Logistic Solutions</h1>
                <p>
                    From small packages to large shipments,we ensure your goods
                    reach their destination safely and on time.
                </p>
                <p>Experience hassle-free shipping and reliable service,</p>
                <h2>backed by our commitment to excellence.</h2>
                <button className="cta-button">
                    <Link to="/deliver" className="cta-button-1">
                        Click to Deliver
                    </Link>
                </button>
            </div>
            <div className="animation-container">
                <div className="animation-item"></div>
            </div>
        </div>
    );
};

export default Hero;
