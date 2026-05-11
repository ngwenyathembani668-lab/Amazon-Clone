import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Checkout.css';


const Checkout = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        city: "",
        postalCode: "",
        delivery: "standard"
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const placeOrder = () => {
        // Save order info in localStorage (optional)
        localStorage.setItem("order", JSON.stringify(formData));
        // Navigate to confirmation page
        navigate("/confirmation");
    };



    return (
        <div className='background'>

            <div className="checkout">
                <h2>Checkout</h2>
                <form>
                    <input name="name" placeholder="Name" onChange={handleChange} />
                    <input name="address" placeholder="Address" onChange={handleChange} />
                    <input name="city" placeholder="City" onChange={handleChange} />
                    <input name="postalCode" placeholder="Postal Code" onChange={handleChange} />
                    <select name="delivery" onChange={handleChange}>
                        <option value="standard">Standard Delivery</option>
                        <option value="express">Express Delivery</option>
                    </select>
                    <button className='remove-btn' onClick={placeOrder}>Place Order</button>
                </form>
            </div>

        </div>
    );
};

export default Checkout;
