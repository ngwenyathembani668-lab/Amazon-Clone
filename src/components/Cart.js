import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
// import { Link } from 'react-router-dom/cjs/react-router-dom';
// import { Router, Route, Switch, } from "react-router-dom";


const Cart = ({ cart, setCart }) => {

  const increaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);


  return (
    <>

      <div className="cart">
        <h2>Your Cart</h2>
        {cart.length === 0 ? <p>No items in cart</p> : (
          cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} width="50" />
              <h4>{item.name}</h4>
              <p>${item.price}</p>
              <p>Qty: {item.quantity}</p>
              <button onClick={() => increaseQty(item.id)}>+</button>
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))
        )}
        <h3>Total: R{total.toFixed(2)}</h3>

        <Link to="/">home</Link>
      </div>

    </>
  );
};

export default Cart;
