import React from 'react';
import { Link } from 'react-router-dom';
import './Confirmation.css';
// import Header from './layout/Header';

const Comfirmation = () => {

    const order = JSON.parse(localStorage.getItem("order"));

    return (
        <>
            {/* <Header /> */}

            <div className="confirmation">
                <h2>Order placed successfully!</h2>
                <p>Thank you, {order?.name}. Your order will be shipped to:</p>
                <p>{order?.address}, {order?.city}, {order?.postalCode}</p>
                <p><strong>Delivery option:</strong> {order?.delivery}</p>
                <div className='home-btn'>
                    <Link className='remove-btn' to={"/"}>
                        Return Home
                    </Link>
                </div>

            </div>

        </>
    );
};

export default Comfirmation;
