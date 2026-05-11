import React from 'react';
import './Cart.css';
import Header from './layout/Header';
import { Link } from 'react-router-dom';


const Cart = ({ cart, setCart }) => {
  const increaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Header cart={cart} />

      <div className='cart-container'>
        <h1>Shopping Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className='cart-items'>
            {cart.map(item => (
              <div key={item.id} className='cart-item'>
                <div>
                  <img src={item.image} alt={item.name} className='cart-item-image' />
                </div>
                <div className='cart-item-details'>
                  <h3>{item.name}</h3>
                  <p>Price: R{item.price}</p>
                  <div className='quantity-controls'>
                    <button className='control' onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button className='control' onClick={() => increaseQty(item.id)}>+</button>
                  </div>
                  <button onClick={() => removeItem(item.id)} className='remove-btn'>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
        {cart.length > 0 && (
          <div className='cart-total'>
            <h2>Total: R{total}</h2>
          </div>
        )}
      </div>

      <div className='link-to-cart'>
        <Link to={"/checkout"}>Proceed to Checkout</Link>

        <Link to={"/"}>Continue Shopping</Link>
      </div>
    </>
  );
};

export default Cart;
