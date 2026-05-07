import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <>

            <nav>

                <div className='nav-left'>
                    <div className='logo'>
                        {/* img */}
                    </div>
                    <div className='delivery'>
                        <div className='delivery-svg'>
                            {/* svg */}
                        </div>
                        <div className='delivery-text'>
                            <div>
                                <sapn>Delivering to Johannesburg 2188</sapn>
                            </div>
                            <div>
                                <span>Update location</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='nav-middle'>

                    <div>
                        <select>
                            <option>
                                All
                                {/* svg */}
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
                        <input type='text' placeholder='Search Amazon.co.za'></input>
                        <button>
                            {/* svg */}
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

                    <div className='cart-btn'>
                        <div>
                            {/* svg */}
                            <span>0</span>
                        </div>
                        <div>
                            <span>Basket</span>
                        </div>
                    </div>

                </div>

            </nav>

        </>
    );
};

export default Header;
