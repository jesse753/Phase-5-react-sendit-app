// import React from "react";
// import "../styles/service.css";

// const Services = () => {
//     return (
//         <div>
//             <section id="services" className="services-section">
//                 <h2>Our Services</h2>
//                 <div className="service">
//                     <h3>Express Delivery</h3>
//                     <p>
//                         Get your items delivered to your doorstep within 24
//                         hours.
//                     </p>
//                 </div>
//                 <div className="service">
//                     <h3>Parcel Tracking</h3>
//                     <p>
//                         Track the progress of your delivery with our real-time
//                         tracking system.
//                     </p>
//                 </div>
//                 <div className="service">
//                     <h3>Secure Packaging</h3>
//                     <p>
//                         We ensure that your items are securely packaged for safe
//                         transportation.
//                     </p>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Services;

import React from "react";
import "../styles/service.css";

const Services = () => {
    return (
        <div className="main-service">
            <h2>Our Services</h2>
            <section id="services" className="services-section">
                <div className="service">
                    <div className="service-card">
                        <img
                            src="https://localleafletdistributor.com.au/wp-content/uploads/2015/02/Front-image-picture-for-flyer.png"
                            alt="Parcel Tracking"
                            className="service-image"
                        />
                        <div className="service-content">
                            <h3>Express Delivery</h3>
                            <p>
                                Get your items delivered to your doorstep within
                                24 hours.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="service">
                    <div className="service-card">
                        <img
                            src="https://matomo.org/wp-content/uploads/2020/02/campaign-tracking-web-ready-1.png"
                            alt="Parcel Tracking"
                            className="service-image"
                        />
                        <div className="service-content">
                            <h3>Parcel Tracking</h3>
                            <p>
                                Track the progress of your delivery with our
                                real-time tracking system.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="service">
                    <div className="service-card">
                        <img
                            src="https://img.freepik.com/premium-vector/character-warehouse-worker-checking-goods-illustration-vector_64478-301.jpg"
                            alt="Secure Packaging"
                            className="service-image"
                        />
                        <div className="service-content">
                            <h3>Secure Packaging</h3>
                            <p>
                                We ensure that your items are securely packaged
                                for safe transportation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
