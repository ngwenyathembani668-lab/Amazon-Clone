import React from 'react';
import Header from './layout/Header';
import './Home.css';
import Products from './Products';


const Home = () => {
  return (
    <>
      <Header />

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

      <Products />

    </>
  );
};

export default Home;
