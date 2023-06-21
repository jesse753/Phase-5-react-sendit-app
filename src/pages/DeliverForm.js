import React, { useState } from "react";
import "../styles/DeliveryForm.css";
import { useNavigate } from "react-router-dom";

const DeliveryForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        senderName: "",
        recipientName: "",
        address: "",
        contactNumber: "",
        itemDescription: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form validation and submission logic here
        console.log(formData);
        // // Store the form data in local storage
        // localStorage.setItem("formData", JSON.stringify(formData));

        const storedDeliveries = localStorage.getItem("deliveries");
        const deliveries = storedDeliveries ? JSON.parse(storedDeliveries) : [];
        const updatedDeliveries = [...deliveries, formData];
        localStorage.setItem("deliveries", JSON.stringify(updatedDeliveries));

        // Redirect to CargoStatus page along with the form data
        navigate("/cargo-status", { state: formData });

        // Reset the form
        setFormData({
            senderName: "",
            recipientName: "",
            address: "",
            contactNumber: "",
            itemDescription: "",
        });
    };

    return (
        <div className="delivery-form-container">
            <h2 className="h2">Delivery Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="senderName">Sender's Name</label>
                    <input
                        type="text"
                        id="senderName"
                        name="senderName"
                        value={formData.senderName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="recipientName">Recipient's Name</label>
                    <input
                        type="text"
                        id="recipientName"
                        name="recipientName"
                        value={formData.recipientName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input
                        type="tel"
                        id="contactNumber"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="itemDescription">Item Description</label>
                    <input
                        type="text"
                        id="itemDescription"
                        name="itemDescription"
                        value={formData.itemDescription}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default DeliveryForm;
