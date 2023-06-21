import React from "react";
import "../styles/test.css";

const Testimonals = () => {
    return (
        <>
            <h1 className="text">testimonals</h1>
            <div className="figure-container">
                <figure className="snip1390">
                    <img
                        src="https://blog.hubspot.com/hubfs/Testimonial-lead-gen-1.jpg"
                        alt="profile-sample3"
                        className="profile"
                    />
                    <figcaption>
                        <h2>Eleanor Crisp</h2>
                        <h4>UX Design</h4>
                        <blockquote>
                            I absolutely love this delivery app! It has made my
                            life so much easier. The interface is user-friendly,
                            and I can easily track my deliveries in real-time.
                            Highly recommended!
                        </blockquote>
                    </figcaption>
                </figure>
                <figure className="snip1390">
                    <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg"
                        alt="profile-sample3"
                        className="profile"
                    />
                    <figcaption>
                        <h2>Eleanor Crisp</h2>
                        <h4>UX Design</h4>
                        <blockquote>
                            I've tried several delivery apps, but this one
                            stands out from the rest. The app is fast, reliable,
                            and the customer service is exceptional. I've never
                            had any issues with my deliveries. A must-have app
                            for anyone who values convenience.
                        </blockquote>
                    </figcaption>
                </figure>

                <figure className="snip1390 hover">
                    <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg"
                        alt="profile-sample5"
                        className="profile"
                    />
                    <figcaption>
                        <h2>Gordon Norman</h2>
                        <h4>Accountant</h4>
                        <blockquote>
                            This delivery app has simplified my business
                            operations. With its seamless integration and
                            efficient delivery tracking, I can focus on other
                            aspects of my business while ensuring my customers
                            receive their orders promptly. Thank you for making
                            my life easier!
                        </blockquote>
                    </figcaption>
                </figure>
                <figure className="snip1390">
                    <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg"
                        alt="profile-sample6"
                        className="profile"
                    />
                    <figcaption>
                        <h2>Sue Shei</h2>
                        <h4>Public Relations</h4>
                        <blockquote>
                            I travel frequently, and this delivery app has
                            become my go-to solution for getting essentials
                            delivered to my hotel. It's convenient, reliable,
                            and the wide range of available services makes it
                            extremely versatile. I no longer have to worry about
                            finding local stores or carrying heavy bags
                        </blockquote>
                    </figcaption>
                </figure>
            </div>
        </>
    );
};

export default Testimonals;
