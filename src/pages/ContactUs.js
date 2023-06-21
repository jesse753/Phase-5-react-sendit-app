import React from "react";
import "../styles/contact.css";

const ContactUs = () => {
    return (
        <div>
            <section id="contact" className="contact-section">
                <h2>Contact Us</h2>
                <p>
                    Have a question or need assistance? Get in touch with our
                    team!
                </p>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <textarea placeholder="Your Message"></textarea>
                    <button type="submit" className="btn-primary">
                        Send Message
                    </button>
                </form>
            </section>
        </div>
    );
};

export default ContactUs;
