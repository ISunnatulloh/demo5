import React from 'react'
import './Header.css'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import foto from '../../Assisstest/img/header title.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import starp from '../../Assisstest/img/starp.png'
import morgip from '../../Assisstest/img/margib.png'
import desion from '../../Assisstest/img/desion.png'
import creation from '../../Assisstest/img/creation.png'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export default function Header() {
  return (
    <header>
      <div className="header-title">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="top">
                Quality is <img src={foto} alt="" /> <br />
                our first priority
              </h1>
              <div className="box-bottom">
                <a href="#!"><NorthEastIcon /> Explore <br /> more</a>
                <p className="bottom">We are delivering next-generation textile production processes that will be radically efficient & sustainable manufacturer. Fablio weavers of designer of furnishing fabrics is a textile manufacturer. Fabrics are designed & woven at our own weaving mill & home textile sector’s.</p>
              </div>

              <div className="corusel">
                <Swiper
                  slidesPerView={6}
                  spaceBetween={50}
                  loop={true}
                  autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide><img src={starp} alt="" /></SwiperSlide>
                  <SwiperSlide><img src={starp} alt="" /></SwiperSlide>
                  <SwiperSlide><img src={morgip} alt="" /></SwiperSlide>
                  <SwiperSlide><img src={starp} alt="" /></SwiperSlide>
                  <SwiperSlide><img src={desion} alt="" /></SwiperSlide>
                  <SwiperSlide><img src={creation} alt="" /></SwiperSlide>
                  <SwiperSlide><img src={morgip} alt="" /></SwiperSlide>
                  <SwiperSlide><img src={starp} alt="" /></SwiperSlide>
                  <SwiperSlide><img src={desion} alt="" /></SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
