import React, { useEffect, useState, useRef } from 'react'
import './Why.css'
import star from '../../Assisstest/img/star.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

// Optional Swiper modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export default function Why() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    // Create ref to the section you want to track
    const sectionRef = useRef(null);

    // 1st number counting animation
    useEffect(() => {
       const tim1 = setInterval(() => {
            const timer1 = setInterval(() => {
                setCount1((prevCount) => {
                    if (prevCount < 70) {
                        return prevCount + 1;
                    } else {
                        clearInterval(timer1);
                        return prevCount;
                    }
                });
            }, 140);
            return () => clearInterval(timer1);
        }, 7000);
        return () => clearInterval(tim1)
    }, []);

    // 2nd number counting animation
    useEffect(() => {
        const tim2 = setInterval(() => {
            const timer2 = setInterval(() => {
                setCount2((prevCount) => {
                    if (prevCount < 96) {
                        return prevCount + 1;
                    } else {
                        clearInterval(timer2);
                        return prevCount;
                    }
                });
            }, 100);
            return () => clearInterval(timer2);
        }, 7000);
        return () => clearInterval(tim2)
    }, []);

    // 3rd number counting animation
    useEffect(() => {
        const tim3 = setInterval(() => {
            const timer3 = setInterval(() => {
                setCount3((prevCount) => {
                    if (prevCount < 92) {
                        return prevCount + 1;
                    } else {
                        clearInterval(timer3);
                        return prevCount;
                    }
                });
            }, 100);
            return () => clearInterval(timer3);
        }, 7000);
        return () => clearInterval(tim3)
    }, []);
    return (
        <section className='why'>
            <div ref={sectionRef} className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p className="top">//Why us</p>
                        <h1 className="top">Why choose us</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="box">
                            <p className="number">{count1}%</p>
                            <p className="title">Strategy</p>
                            <p className="bottom">Impact the success of a textile business. It also implies adaptability to the evolving landscape of the industry and a commitment to long-term success through strategic planning and execution</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box">
                            <p className="number">{count2}%</p>
                            <p className="title">Trust us</p>
                            <p className="bottom">Focus on building and maintaining strong relationships with level, understand client's needs an adapting the strategies accordingly. social responsibility goals, response to growing textile market</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box">
                            <p className="number">{count3}%</p>
                            <p className="title">Positive feedbacks</p>
                            <p className="bottom">Clients may provide feedback on the quality of the textiles received. This could include considerations like durability, a color fastness, texture & adherence to specifications to positive client experience</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="corusel">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        delay: 500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>Pigment Printing <img src={star} alt="" /></SwiperSlide>
                    <SwiperSlide>Flexography <img src={star} alt="" /></SwiperSlide>
                    <SwiperSlide>Offset Printing <img src={star} alt="" /></SwiperSlide>
                    <SwiperSlide>Transfer Printing <img src={star} alt="" /></SwiperSlide>
                    <SwiperSlide>Pigment Printing <img src={star} alt="" /></SwiperSlide>
                    <SwiperSlide>Flexography <img src={star} alt="" /></SwiperSlide>
                    <SwiperSlide>Offset Printing <img src={star} alt="" /></SwiperSlide>
                    <SwiperSlide>Transfer Printing <img src={star} alt="" /></SwiperSlide>
                    <SwiperSlide>Pigment Printing <img src={star} alt="" /></SwiperSlide>
                    <SwiperSlide>Flexography <img src={star} alt="" /></SwiperSlide>
                    <SwiperSlide>Offset Printing <img src={star} alt="" /></SwiperSlide>
                    <SwiperSlide>Transfer Printing <img src={star} alt="" /></SwiperSlide>
                    <SwiperSlide>Pigment Printing <img src={star} alt="" /></SwiperSlide>
                    <SwiperSlide>Flexography <img src={star} alt="" /></SwiperSlide>
                    <SwiperSlide>Offset Printing <img src={star} alt="" /></SwiperSlide>
                    <SwiperSlide>Pigment Printing <img src={star} alt="" /></SwiperSlide>
                    <SwiperSlide>Transfer Printing <img src={star} alt="" /></SwiperSlide>
                    <SwiperSlide>Flexography <img src={star} alt="" /></SwiperSlide>
                    <SwiperSlide>Offset Printing <img src={star} alt="" /></SwiperSlide>
                    <SwiperSlide>Transfer Printing <img src={star} alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}
