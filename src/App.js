import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
// import { Link } from 'react-router-dom';

// import Header from './components/layout/Header';
import Home from './components/Home';
import '../src/components/layout/Header.css'
import Cart from './components/Cart';

const App = () => {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);


  return (
    <>

      <nav>

        <div className='nav-left'>
          <div className='logo'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWxIDzAMMwzV0vK950cB3s7sO1hFJn40KgyQ&s' alt='logo' />
          </div>
          <div className='delivery'>
            <div className='delivery-svg'>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>
            </div>
            <div className='delivery-text'>
              <div>
                <span className='address'>Delivering to Johannesburg 2188</span>
              </div>
              <div>
                <span className='update-location'>Update location</span>
              </div>
            </div>
          </div>
        </div>

        <div className='nav-middle'>

          <div>
            <select>
              <option>
                All
              </option>
              <option>
                All Departments
              </option>
              <option>
                Arts & Crafts
              </option>
              <option>
                Baby
              </option>
              <option>
                Beauty
              </option>
              <option>
                Home & Kitchen
              </option>
            </select>
            <input className='search-input' type='text' placeholder='Search Amazon.co.za'></input>
            <button className='search-btn'>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
            </button>
          </div>

        </div>

        <div className='nav-right'>

          <div className='sign-in-btn'>
            <div className='name'>
              <span>Hello, Sign in</span>
            </div>
            <div className='account'>
              <span>
                Account & Lists
                {/* svg */}
              </span>
            </div>
          </div>

          <div className='orders'>
            <div className='name'>
              <span>Returns</span>
            </div>
            <div className='account'>
              <span>& Orders</span>
            </div>
          </div>

          {/* <Link to="/cart"> */}
          <div className='cart-btn'>
            <div className='name'>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
              <span>{cartCount}</span>
            </div>
            <div className='basket'>
              <span>Basket</span>
            </div>
          </div>
          {/* </Link> */}


        </div>

      </nav>

      <div className='sub-nav'>

        <div className='sub-nav-left'>

          <div>
            <span>
              {/* svg */}
              All
            </span>
          </div>

          <div>
            <span>
              {/* svg */}
              Customer Service
            </span>
          </div>

          <div>
            <span>
              {/* svg */}
              Today's Deals
            </span>
          </div>

          <div>
            <span>
              {/* svg */}
              Keep Shopping for
            </span>
          </div>

          <div>
            <span>
              {/* svg */}
              Everyday Essentials
            </span>
          </div>

          <div>
            <span>
              {/* svg */}
              Best Sellers
            </span>
          </div>

          <div>
            <span>
              {/* svg */}
              Welcome to Amazon
            </span>
          </div>

        </div>

        <div className='sub-nav-right'>
          <span>15% off Everyday Essentials</span>
        </div>

      </div>

      <Router>
        <Switch>
          <Route
            exact path="/"
            render={(props) => <Home {...props} cart={cart} setCart={setCart} />}
          />

          <Route
            path="/cart"
            render={(props) => <Cart {...props} cart={cart} setCart={setCart} />}
          />
        </Switch>


      </Router>


    </>
  );
};

export default App;

