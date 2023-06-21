import React, { useEffect, useState } from "react";
import "../styles/cargoStatusPage.css";
import { Link } from "react-router-dom";

const CargoStatusPage = () => {
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        // Retrieve the form data from local storage
        const storedFormData = localStorage.getItem("deliveries");
        if (storedFormData) {
            const parsedFormData = JSON.parse(storedFormData);
            setFormData(parsedFormData);
        }
    }, []);

    if (!formData || formData.length === 0) {
        return <p>No cargo data available.</p>;
    }

    return (
        <div className="cargo-status-container">
            <h2>Cargo Status</h2>
            <div className="deailts-flex">
                {formData.map((data, index) => (
                    <div className="cargo-details" key={index}>
                        <div className="cargo-detail-item">
                            <span className="cargo-detail-label">
                                Sender's Name:
                            </span>
                            <span className="cargo-detail-value">
                                {data.senderName}
                            </span>
                        </div>
                        <div className="cargo-detail-item">
                            <span className="cargo-detail-label">
                                Recipient's Name:
                            </span>
                            <span className="cargo-detail-value">
                                {data.recipientName}
                            </span>
                        </div>
                        <div className="cargo-detail-item">
                            <span className="cargo-detail-label">Address:</span>
                            <span className="cargo-detail-value">
                                {data.address}
                            </span>
                        </div>
                        <div className="cargo-detail-item">
                            <span className="cargo-detail-label">
                                Contact Number:
                            </span>
                            <span className="cargo-detail-value">
                                {data.contactNumber}
                            </span>
                        </div>
                        <div className="cargo-detail-item">
                            <span className="cargo-detail-label">
                                Item Description:
                            </span>
                            <span className="cargo-detail-value">
                                {data.itemDescription}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <button>
                <Link to="/deliver" className="btn-status">
                    Back To Delivery Form
                </Link>
            </button>
        </div>
    );
};

export default CargoStatusPage;
