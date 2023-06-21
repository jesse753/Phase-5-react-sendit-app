import React from "react";
import "../styles/about.css";

const AboutSection = () => {
    const members = [
        {
            name: "John Doe",
            role: "Co-founder",
            image: "https://st4.depositphotos.com/4157265/41100/i/450/depositphotos_411005388-stock-photo-profile-picture-of-smiling-30s.jpg",
        },
        {
            name: "Jane Smith",
            role: "Operations Manager",
            image: "https://t4.ftcdn.net/jpg/04/44/53/99/360_F_444539901_2GSnvmTX14LELJ6edPudUsarbcytOEgj.jpg",
        },
        {
            name: "Michael Johnson",
            role: "Logistics Coordinator",
            image: "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg",
        },
    ];

    return (
        <section className="about-section">
            <div className="container">
                <h2 className="section-title">About Us</h2>
                <div className="section-content">
                    <div className="about-image">
                        <img
                            src="https://img.freepik.com/premium-vector/truck-delivery-service-food-package-online-shopping-delivery-service_1375-3052.jpg"
                            alt="About"
                        />
                    </div>
                    <div className="about-text">
                        <h3 className="about-title">Our Story</h3>
                        <p className="about-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris convallis dui eu dui aliquet, vel
                            lacinia risus dignissim. Ut non fringilla odio.
                            Nulla id quam sit amet arcu euismod aliquet. Proin
                            bibendum nisi et ante commodo viverra. Nulla non
                            pellentesque magna. Aenean at pellentesque nisl, nec
                            tincidunt justo. Proin porttitor enim vitae
                            facilisis aliquam. Fusce eget massa sed justo
                            euismod lobortis sed et mauris. Vivamus nec leo id
                            ligula maximus dictum. In porttitor ex nec metus
                            auctor scelerisque.
                        </p>
                        <p className="about-description">
                            Phasellus eget velit dictum, cursus velit nec,
                            tempus ipsum. Suspendisse ut metus nunc. Donec
                            scelerisque nunc orci, at vestibulum risus malesuada
                            vel. Maecenas gravida varius velit, eu hendrerit
                            turpis vestibulum sed. Aliquam mattis nulla in
                            lacinia bibendum. Morbi efficitur faucibus mi, at
                            consectetur metus lobortis id. Nulla sit amet
                            scelerisque ligula. Fusce a odio in ligula rhoncus
                            feugiat. Suspendisse vestibulum fermentum tellus, et
                            rutrum lacus tempor id. Curabitur euismod eleifend
                            facilisis. Fusce in tincidunt tortor. Suspendisse
                            potenti.
                        </p>
                    </div>
                </div>

                <div className="team-members">
                    {members.map((member, index) => (
                        <div className="member" key={index}>
                            <img src={member.image} alt={member.name} />
                            <h4>{member.name}</h4>
                            <p>{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
