import React from 'react';
// import Header from './layout/Header';
import './Home.css';
import './Products.css';
import { Link } from 'react-router-dom';

// import Products from './Products';
// import products from './Products';

const products = [
  { id: 1, name: "Headphone Mic Splitter", price: 198, rating: 4.5, image: "https://m.media-amazon.com/images/I/51Myzbn37UL._AC_UL320_.jpg" },
  { id: 2, name: "PCBuilder AMD Ryzen 5 5600G", price: 499, rating: 4.2, image: "https://m.media-amazon.com/images/I/61d9fD9DlwL._AC_UL320_.jpg" },
  { id: 3, name: "PC Cable Management Sleeve Tube", price: 98, rating: 3.5, image: "https://m.media-amazon.com/images/I/61uE9hHABSL._AC_UL320_.jpg" },
  { id: 4, name: "Astrum HU640 On-Ear Wired USB Headphones ", price: 198, rating: 4.1, image: "https://m.media-amazon.com/images/I/61gnfC3qgpL._AC_UL320_.jpg" },
  { id: 5, name: "Beelink SER9 Pro AI Mini PC, AMD Ryzen AI 9 HX", price: 330, rating: 4.5, image: "https://m.media-amazon.com/images/I/51n1pdH5v3L._AC_UL320_.jpg" },
  { id: 6, name: "ORICO 4-Port USB 3.0 Aluminum HUB Portable HUB with 2Ft. USB 3.0 Cable", price: 507, rating: 4.0, image: "https://m.media-amazon.com/images/I/51UEhyCeEOL._AC_UL320_.jpg" },
  { id: 7, name: "Logitech C270 HD Webcam, HD 720p/30fps", price: 339, rating: 3.2, image: "https://m.media-amazon.com/images/I/61o69LB9vML._AC_UL320_.jpg" },
  { id: 8, name: "Astrum KB350 USB Mini Slim Wired Keyboard with 78 keys, silent keys", price: 113, rating: 3.5, image: "https://m.media-amazon.com/images/I/51Sc2182SPL._AC_UL320_.jpg" },
  { id: 9, name: "60 pcs Kids Eye Cotton Eye Patch Fabric Breathable For Pediatric Amblyopia - Pink", price: 559, rating: 5.0, image: "https://m.media-amazon.com/images/I/81Wk6UsArBL._AC_UL320_.jpg" },
  { id: 10, name: "RGB Monitor Light Bar - Dual Light Source Desk Lamp for PC & Gaming", price: 489, rating: 4.9, image: "https://m.media-amazon.com/images/I/31Q80dIjaML._AC_UL320_.jpg" },
  // ...at least 8 products
];


const Home = ({ cart, setCart }) => {

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };


  return (
    <>

      <section className='hero-section'>

        <div className='hero-box'>


          <div className='category-row'>

            {/* box no.1 */}
            <div className='category-box'>

              <div className='category-title'>
                <h1>Mothers Day gifting</h1>
              </div>

              <div className='product-links'>

                {/* product no.1 */}
                <div className='category-preview'>

                  <div className='category-image'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/53/Amazon.za/Events/2026/Mothers_day/Mothers_days_186x116_Beauty._SY116_CB780402600_.jpg' alt='' />
                  </div>
                  <div className='category-name'>
                    <p>Beauty gifts</p>
                  </div>

                </div>

                {/* product no.2 */}
                <div className='category-preview'>

                  <div className='category-image'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/53/Amazon.za/Events/2026/Mothers_day/Mothers_days_186x116_Cozy._SY116_CB780402600_.jpg' alt='' />
                  </div>
                  <div className='category-name'>
                    <p>Cozy gifts</p>
                  </div>

                </div>

                {/* product no.3 */}
                <div className='category-preview'>

                  <div className='category-image'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/53/Amazon.za/Events/2026/Mothers_day/Mothers_days_186x116_Present._SY116_CB780402600_.jpg' alt='' />
                  </div>
                  <div className='category-name'>
                    <p>Home gifts</p>
                  </div>

                </div>

                {/* product no.4 */}
                <div className='category-preview'>

                  <div className='category-image'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/53/Amazon.za/Events/2026/Mothers_day/Mothers_days_186x116_Books._SY116_CB780402600_.jpg' alt='' />
                  </div>
                  <div className='category-name'>
                    <p>Precious reading</p>
                  </div>

                </div>


              </div>

              <div className='category-cta'>
                <p>Shop now</p>
              </div>

            </div>


            {/* box no.2 */}
            <div className='category-box'>

              <div className='category-title'>
                <h1>Mothers Day gifting</h1>
              </div>

              <div className='product-links'>

                {/* product no.1 */}
                <div className='category-preview'>

                  <div className='category-image'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/headphones_0.5x._SY116_CB546936069_.jpg' alt='' />
                  </div>
                  <div className='category-name'>
                    <p>Headphones</p>
                  </div>

                </div>

                {/* product no.2 */}
                <div className='category-preview'>

                  <div className='category-image'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/Portable_speaker_0.5x._SY116_CB546936069_.jpg' alt='' />
                  </div>
                  <div className='category-name'>
                    <p>Portable Speakers</p>
                  </div>

                </div>

                {/* product no.3 */}
                <div className='category-preview'>

                  <div className='category-image'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/Home_speake_0.5x._SY116_CB546936069_.jpg' alt='' />
                  </div>
                  <div className='category-name'>
                    <p>Home Audio</p>
                  </div>

                </div>

                {/* product no.4 */}
                <div className='category-preview'>

                  <div className='category-image'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/Earbuds_0.5x._SY116_CB546936069_.jpg' alt='' />
                  </div>
                  <div className='category-name'>
                    <p>Earbuds</p>
                  </div>

                </div>


              </div>

              <div className='category-cta'>
                <p>Discover more</p>
              </div>

            </div>


            {/* box no.3 */}
            <div className='category-box'>

              <div className='category-title'>
                <h1>Welcome to Amazon</h1>
              </div>

              <div className='product-links'>

                {/* product no.1 */}
                <div className='category-preview'>

                  <div className='category-image'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/Welcome0.5x._SY116_CB789560036_.jpg' alt='' />
                  </div>
                  <div className='category-name'>
                    <p>Welcome</p>
                  </div>

                </div>

                {/* product no.2 */}
                <div className='category-preview'>

                  <div className='category-image'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/Toydays_Deals0.5x._SY116_CB789560036_.jpg' alt='' />
                  </div>
                  <div className='category-name'>
                    <p>Today's Deal</p>
                  </div>

                </div>

                {/* product no.3 */}
                <div className='category-preview'>

                  <div className='category-image'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/Best_sellers0.5x._SY116_CB789560036_.jpg' alt='' />
                  </div>
                  <div className='category-name'>
                    <p>Best Sellers</p>
                  </div>

                </div>

                {/* product no.4 */}
                <div className='category-preview'>

                  <div className='category-image'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/New_releases0.5x._SY116_CB789560036_.jpg' alt='' />
                  </div>
                  <div className='category-name'>
                    <p>New Realeses</p>
                  </div>

                </div>


              </div>

              <div className='category-cta'>
                <p>See more</p>
              </div>

            </div>


            {/* box no.4 */}
            <div className='category-box'>

              <div className='category-title'>
                <h1>15% off Everyday Essentials</h1>
              </div>

              <div className='product-links'>

                {/* product no.1 */}
                <div className='category-preview'>

                  <div className='category-image'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/53/BFCM2024/beauty_dt_qcc0.5x._SY116_CB780426444_.jpg' alt='' />
                  </div>
                  <div className='category-name'>
                    <p>Beauty</p>
                  </div>

                </div>

                {/* product no.2 */}
                <div className='category-preview'>

                  <div className='category-image'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/53/BFCM2024/grocery_dt_qc0.5x._SY116_CB780426444_.jpg' alt='' />
                  </div>
                  <div className='category-name'>
                    <p>Grocery</p>
                  </div>

                </div>

                {/* product no.3 */}
                <div className='category-preview'>

                  <div className='category-image'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/53/BFCM2024/HPC_dt_qc0.5x._SY116_CB780426444_.jpg' alt='' />
                  </div>
                  <div className='category-name'>
                    <p>Health &amp; Wellness</p>
                  </div>

                </div>

                {/* product no.4 */}
                <div className='category-preview'>

                  <div className='category-image'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/53/BFCM2024/Baby__dt_qc0.5x._SY116_CB780426444_.jpg' alt='' />
                  </div>
                  <div className='category-name'>
                    <p>Baby</p>
                  </div>

                </div>


              </div>

              <div className='category-cta'>
                <p>Shop now</p>
              </div>

            </div>



          </div>

        </div>

      </section>

      {/* <Products /> */}

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
              <div className='product-description'>
                <p>{product.name}</p>
              </div>
              <div className='product-price'>
                <div className='currency'>
                  <p>R</p>
                </div>
                <div className='price-amount'>
                  <p>{product.price}</p>
                </div>
              </div>
              <div className='product-rating'>
                <p>
                  {product.rating}
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" /></svg>
              </div>
              <div className='delivery-details'>
                <p>FREE delivery <strong>12 &ndash; 15 May</strong></p>
              </div>
              <div className='addToCart-btn'>
                <button onClick={() => addToCart(product)}>Add to basket</button>
              </div>
            </div>

          ))};

        </div>

        <Link to="/cart">
          cart
        </Link>

      </section>

    </>
  );
};

export default Home;
