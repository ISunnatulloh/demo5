import React, { useEffect, useState, useRef } from 'react'
import './Why.css'
import star from '../../Assisstest/img/star.png'
export default function Why() {
    // const [count1, setCount1] = useState(0);
    // const [count2, setCount2] = useState(0);
    // const [count3, setCount3] = useState(0);

    // // Create ref to the section you want to track
    // const sectionRef = useRef(null);

    // // 1st number counting animation
    // useEffect(() => {
    //    const tim1 = setInterval(() => {
    //         const timer1 = setInterval(() => {
    //             setCount1((prevCount) => {
    //                 if (prevCount < 70) {
    //                     return prevCount + 1;
    //                 } else {
    //                     clearInterval(timer1);
    //                     return prevCount;
    //                 }
    //             });
    //         }, 140);
    //         return () => clearInterval(timer1);
    //     }, 7000);
    //     return () => clearInterval(tim1)
    // }, []);

    // // 2nd number counting animation
    // useEffect(() => {
    //     const tim2 = setInterval(() => {
    //         const timer2 = setInterval(() => {
    //             setCount2((prevCount) => {
    //                 if (prevCount < 96) {
    //                     return prevCount + 1;
    //                 } else {
    //                     clearInterval(timer2);
    //                     return prevCount;
    //                 }
    //             });
    //         }, 100);
    //         return () => clearInterval(timer2);
    //     }, 7000);
    //     return () => clearInterval(tim2)
    // }, []);

    // // 3rd number counting animation
    // useEffect(() => {
    //     const tim3 = setInterval(() => {
    //         const timer3 = setInterval(() => {
    //             setCount3((prevCount) => {
    //                 if (prevCount < 92) {
    //                     return prevCount + 1;
    //                 } else {
    //                     clearInterval(timer3);
    //                     return prevCount;
    //                 }
    //             });
    //         }, 100);
    //         return () => clearInterval(timer3);
    //     }, 7000);
    //     return () => clearInterval(tim3)
    // }, []);
    return (
        <section className='why'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* <p className="top">//Бизнес-бустWhy us</p> */}
                        <h1 className="top">ОБЪЁМ ПРОИЗВОДСТВА И ЭКСПОРТ</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="box">
                            <p className="number">2500-8000</p>
                            <p className="title">Единиц в день</p>
                            <p className="bottom">Разнообразие продукции и производственные объемы</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box">
                            <p className="number">98,7%</p>
                            <p className="title">Экспортная направленность</p>
                            <p className="bottom">Мы обеспечиваем международные поставки и стремимся расширять географию наших клиентов, предлагая конкурентоспособную продукцию</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box">
                            <p className="number">2 миллиарда</p>
                            <p className="title">сум Ежемесячный объем производства</p>
                            <p className="bottom">Это подтверждает высокий уровень <br/>нашей производственной мощности и стабильность финансовых показателей</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="carousel">
                <div className="logo-slider">
                    <div className="logos-slide">
                        <div className="logos-slide_item">Pigment Printing <img src={star} alt=""/></div>
                        <div className="logos-slide_item">Flexography <img src={star} alt=""/></div>
                        <div className="logos-slide_item">Offset Printing <img src={star} alt=""/></div>
                        <div className="logos-slide_item">Transfer Printing <img src={star} alt=""/></div>
                        <div className="logos-slide_item">Pigment Printing <img src={star} alt=""/></div>
                        <div className="logos-slide_item">Flexography <img src={star} alt=""/></div>
                        <div className="logos-slide_item">Offset Printing <img src={star} alt=""/></div>
                        <div className="logos-slide_item">Transfer Printing <img src={star} alt=""/></div>
                        <div className="logos-slide_item">Pigment Printing <img src={star} alt=""/></div>
                        <div className="logos-slide_item">Flexography <img src={star} alt=""/></div>
                        <div className="logos-slide_item">Offset Printing <img src={star} alt=""/></div>
                        <div className="logos-slide_item">Transfer Printing <img src={star} alt=""/></div>
                        <div className="logos-slide_item">Pigment Printing <img src={star} alt=""/></div>
                        <div className="logos-slide_item">Flexography <img src={star} alt=""/></div>
                        <div className="logos-slide_item">Offset Printing <img src={star} alt=""/></div>
                        <div className="logos-slide_item">Transfer Printing <img src={star} alt=""/></div>
                    </div>
                </div>
            </div>

        </section>
    )
}
