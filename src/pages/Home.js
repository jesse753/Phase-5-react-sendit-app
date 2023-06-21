import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { TbTruckDelivery, TbViewportWide } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";
import Testimonals from "./Testimonals";

const Home = () => {
    return (
        <div className="landing-container">
            <main className="main-content">
                <section id="hero" className="hero-section">
                    <div className="hero-text">
                        <h1>Delivering Goods and Items</h1>
                        <p>
                            We don't just deliver, we also pick, store, pack and
                            offer payment processing
                        </p>
                        <p>Efficient and Reliable Delivery Services</p>
                        <Link to="register" className="btn-primary">
                            Get Started
                        </Link>
                    </div>
                </section>

                <section id="features" className="features-section">
                    <div className="feature">
                        <TbTruckDelivery size={100} />
                        <h2>Fast Delivery</h2>
                        <p>
                            Our delivery service ensures your items arrive
                            quickly and securely.
                        </p>
                    </div>
                    <div className="feature">
                        <TbViewportWide size={100} />
                        <h2>Wide Coverage</h2>
                        <p>
                            We offer delivery services to various locations,
                            reaching customers nationwide.
                        </p>
                    </div>
                    <div className="feature">
                        <MdSupportAgent size={100} />
                        <h2>24/7 Support</h2>
                        <p>
                            Our dedicated support team is available round the
                            clock to assist you with any queries.
                        </p>
                    </div>
                </section>
            </main>
            <Testimonals />
        </div>
    );
};

export default Home;
