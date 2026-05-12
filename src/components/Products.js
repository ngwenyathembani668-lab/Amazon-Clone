import React from 'react';
import './Products.css';

const products = [
    { id: 1, name: "Headphone Mic Splitter", price: 198, rating: 4.5, image: "https://m.media-amazon.com/images/I/51Myzbn37UL._AC_UL320_.jpg" },
    { id: 2, name: "PCBuilder AMD Ryzen 5 5600G", price: 499, rating: 4.2, image: "https://m.media-amazon.com/images/I/61d9fD9DlwL._AC_UL320_.jpg" },
    { id: 3, name: "PC Cable Management Sleeve Tube", price: 98 , rating: 3.5, image: "https://m.media-amazon.com/images/I/61uE9hHABSL._AC_UL320_.jpg" },
    { id: 4, name: "Astrum HU640 On-Ear Wired USB Headphones ", price: 198 , rating: 4.1, image: "https://m.media-amazon.com/images/I/61gnfC3qgpL._AC_UL320_.jpg" },
    { id: 5, name: "Beelink SER9 Pro AI Mini PC, AMD Ryzen AI 9 HX", price: 330 , rating: 4.5, image: "https://m.media-amazon.com/images/I/51n1pdH5v3L._AC_UL320_.jpg" },
    { id: 6, name: "ORICO 4-Port USB 3.0 Aluminum HUB Portable HUB with 2Ft. USB 3.0 Cable", price: 507 , rating: 4.0, image: "https://m.media-amazon.com/images/I/51UEhyCeEOL._AC_UL320_.jpg" },
    { id: 7, name: "Logitech C270 HD Webcam, HD 720p/30fps", price: 339 , rating: 3.2, image: "https://m.media-amazon.com/images/I/61o69LB9vML._AC_UL320_.jpg" },
    { id: 8, name: "Astrum KB350 USB Mini Slim Wired Keyboard with 78 keys, silent keys", price: 113 , rating: 3.5, image: "https://m.media-amazon.com/images/I/51Sc2182SPL._AC_UL320_.jpg" },
    { id: 9, name: "60 pcs Kids Eye Cotton Eye Patch Fabric Breathable For Pediatric Amblyopia - Pink", price: 559 , rating: 5.0, image: "https://m.media-amazon.com/images/I/81Wk6UsArBL._AC_UL320_.jpg" },
    { id: 10, name: "RGB Monitor Light Bar - Dual Light Source Desk Lamp for PC & Gaming", price: 489 , rating: 4.9, image: "https://m.media-amazon.com/images/I/31Q80dIjaML._AC_UL320_.jpg" },
    // ...at least 8 products
];

const Products = ({ cart, setCart }) => {
    const addToCart = (product) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            setCart(cart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    return (
        <>

            <section className='products-section'>

                <div className='product-title'>
                    <h1>Our Products</h1>
                </div>

                <div className='products-list'>

                    {products.map((product) => (
                        <div key={product.id} className='product'>
                            <div className='product-img'>
                                <img src={product.image} alt='' />
                            </div>
                            <div className='product-description space'>
                                <p>{product.name}</p>
                            </div>
                            <div className='product-price space'>
                                <div className='currency'>
                                    <p>R</p>
                                </div>
                                <div className='price-amount'>
                                    <p>{product.price}</p>
                                </div>
                            </div>
                            <div className='product-rating space'>
                                <p>
                                    {product.rating}
                                </p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" /></svg>
                            </div>
                            <div className='delivery-details space'>
                                <p>FREE delivery <strong>12 &ndash; 15 May</strong></p>
                            </div>
                            <div className='addToCart-btn space'>
                                <button onClick={() => addToCart(product)}>Add to basket</button>
                            </div>
                        </div>

                    ))} 

                </div>

            </section>

        </>
    );
};

export default Products;
