import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; // Import Navigation and Autoplay modules
import 'swiper/css';
import 'swiper/css/navigation'; // Import Navigation styles
import 'swiper/css/autoplay';

import PrimeDealsSection from '../PrimeDealsSection'
import Categories from '../Categories'
import Header from '../Header'
import FiltersSection from '../FiltersSection';

import './index.css'

const Products = () => (
  <>
    <Header />
    <div className="carousel-container">
        <Swiper
          modules={[Navigation, Autoplay]} // Include Navigation and Autoplay modules
          spaceBetween={50}
          slidesPerView={1}
          navigation={{ nextEl: null, prevEl: null }} // Enable navigation buttons
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Enable autoplay with a delay
        >
          <SwiperSlide>
            <div className="banner">
              <img src='https://static.vecteezy.com/system/resources/previews/002/217/686/non_2x/accessories-banner-vector.jpg' alt='banner1' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner">
              <img src='https://th.bing.com/th/id/OIP.W22nVYRW6B4Gs2ZXuoqISgHaCx?w=1200&h=450&rs=1&pid=ImgDetMain' alt='banner2' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner">
              <img src='https://static.vecteezy.com/system/resources/previews/007/827/704/non_2x/sewing-tools-border-banner-with-hand-drawn-elements-tailoring-accessories-threads-scissors-needles-pins-buttons-template-for-seamstress-atelier-fashion-design-vector.jpg' alt='banner3' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner">
              <img src='https://static.vecteezy.com/system/resources/previews/018/943/054/non_2x/3d-banner-realistic-accessories-for-mobile-game-console-controller-headphones-joystick-smart-watches-illustration-vector.jpg' alt='banner4' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner">
              <img src='https://th.bing.com/th/id/OIP.hPGkJsV01WDsY8SEULElEAHaCz?rs=1&pid=ImgDetMain' alt='banner5' />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    <div className="product-sections">
      <Categories />
      <PrimeDealsSection />
    </div>
  </>
)

export default Products
