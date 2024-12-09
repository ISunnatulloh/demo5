import React from 'react'
import './ContactUs.css'
import foto from '../../../../Assisstest/img/contact.jpg'
export default function ContactUs() {
    return (
        <div className='contactus'>
            <div className="box">
                <div className="one">
                    <img src={foto} alt="" />
                </div>
                <div className="two">
                    <h1 className="top">
                    Мы всегда рады <br/>вашим вопросам!
                    </h1>
                    <form action="">
                        <input type="text" placeholder='Имя' />
                        <input type="email" placeholder='Mail' />
                        <input type="text" placeholder='Телефон' />
                        <textarea name="" id="" cols="" rows="5" placeholder='Почта'></textarea>
                        <a className='contact' href="https://maps.app.goo.gl/i6uGKFHJbpeTyzXPA">Submit</a>
                    </form>
                    <h1 className="top">
                    Наши координаты
                    </h1>
                    <p className="top">Электронная почта</p>
                    <a href="#!" className="email">atlestextile@gmail.com</a>
                    <p className="title">Свяжитесь с нами</p>
                    <a href="tel:+998941582000" className="number">+998(94)158-20-00</a>
                    <p className="bottom">ул. Афросиаб,16 100031, <br/>г.Ташкент Узбекистан</p>
                    <p className="media">Мы в социальных сетях</p>
                    <div className="icon">
                        <div className="i"><i class="fa-brands fa-twitter"></i></div>
                        <div className="i"><i class="fa-brands fa-facebook-f"></i></div>
                        <div className="i"><i class="fa-brands fa-linkedin-in"></i></div>
                        <div className="i"><i class="fa-brands fa-instagram"></i></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
