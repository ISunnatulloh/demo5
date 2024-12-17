import React from 'react'
import './AboutPeople.css'
import foto1 from '../../../../Assisstest/img/about rasm 1.jpg'
import foto2 from '../../../../Assisstest/img/about rasm 2.jpg'
import foto3 from '../../../../Assisstest/img/about rasm 3.jpg'
import foto4 from '../../../../Assisstest/img/about rasm 4.jpg'
import foto5 from '../../../../Assisstest/img/about rasm 5.jpg'
import foto6 from '../../../../Assisstest/img/about rasm 6.jpeg'
import foto7 from '../../../../Assisstest/img/about rasm 7.jpg'
import foto8 from '../../../../Assisstest/img/about rasm 8.jpg'
export default function AboutPeople() {
    // <i class="fa-brands fa-google-plus-g"></i>
    return (
        <div className='aboutpeople'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="box">
                            <img src={foto1} alt="" />
                            <div className="box-hover">
                                <p className="hover-name">
                                    Футболка
                                </p>
                                <p className="bottom">
                                    Карде супрем- состав: 100% хлопок
                                    Лайкра- состав: 95% хлопок, 5% лайкра
                                    Пенье-состав: 92% хлопок, 8% лайкра
                                    Меланж- состав 75% хлопок, 25% полиэстр
                                    Расцветок 20
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="box">
                            <img src={foto2} alt="" />
                            <div className="box-hover">
                                <p className="hover-name">
                                    Поло футболка
                                </p>
                                <p className="bottom">
                                    Пике<br/>
                                    Состав 100% хлопок<br/>
                                    Расцветок 10<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="box">
                            <img src={foto3} alt="" />
                            <div className="box-hover">
                                <p className="hover-name">
                                    Майки
                                </p>
                                <p className="bottom">
                                    Карде супрем<br/>
                                    Состав: 100% хлопок<br/>
                                    Расцветки 3<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="box">
                            <img src={foto4} alt="" />
                            <div className="box-hover">
                                <p className="hover-name">
                                    Шорты
                                </p>
                                <p className="bottom">
                                    Меланж<br/>
                                    Состав: 55% хлопок, 45%<br/> полиэстр
                                    Расцветок 10<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="box">
                            <img src={foto5} alt="" />
                            <div className="box-hover">
                                <p className="hover-name">
                                    Джогеры
                                </p>
                                <p className="bottom">
                                    Меланж<br/>
                                    Состав: 55% хлопок, 45%<br/> полиэстр
                                    Расцветок 10<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="box">
                            <img src={foto6} alt="" />
                            <div className="box-hover">
                                <p className="hover-name">
                                    Худи
                                </p>
                                <p className="bottom">
                                    Трёхнитка<br/>
                                    Состав: 100% хлопок<br/>
                                    Расцветок 10<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="box">
                            <img src={foto7} alt="" />
                            <div className="box-hover">
                                <p className="hover-name">
                                    Пижама женская
                                </p>
                                <p className="bottom">
                                    Карде супрем<br/>
                                    Состав: 100% хлопок<br/>
                                    Расцветок 10<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="box">
                            <img src={foto8} alt="" />
                            <div className="box-hover">
                                <p className="hover-name">Пижама мужская</p>
                                <p className="bottom">Карде супрем<br/>
                                    Состав: 100% хлопок<br/>
                                    Расцветок 10<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
