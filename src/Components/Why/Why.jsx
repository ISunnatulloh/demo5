import React, { useEffect, useState, useRef } from 'react'
import './Why.css'
import star from '../../Assisstest/img/star.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

// Optional Swiper modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export default function Why() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    // Create ref to the section you want to track
    const sectionRef = useRef(null);

    // Intersection Observer to detect when the section is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Check if the section is in view
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsScrolled(true); // Trigger the animations when in view
                } else {
                    setIsScrolled(false); // Reset when not in view
                }
            },
            { threshold: 0.1 } // Trigger when 50% of the section is visible
        );

        // Start observing the section
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Clean up the observer
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    // 1st number counting animation
    useEffect(() => {
        if (!isScrolled) return;
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
    }, [isScrolled]);

    // 2nd number counting animation
    useEffect(() => {
        if (!isScrolled) return;
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
    }, [isScrolled]);

    // 3rd number counting animation
    useEffect(() => {
        if (!isScrolled) return;
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
    }, [isScrolled]);
    return (
        <section className='why'>
            <div ref={sectionRef} className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p className="top">//Why us</p>
                        <h1 className="top">Why choose us</h1>
                    </div>
                </div>
                {isScrolled && (
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
                )}
            </div>
            <div className="corusel">
                            <Swiper
                                slidesPerView={5}
                                spaceBetween={50}
                                loop={true}
                                   autoplay={{
                                     delay: 100,
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
