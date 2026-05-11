import React, { useState, useEffect } from 'react';
// import Header from './components/layout/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import { Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Comfirmation from './components/Confirmation';

const App = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home cart={cart} setCart={setCart} />} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />}/>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Comfirmation />} />
      </Routes>
      


    </>
  );
};

export default App;

