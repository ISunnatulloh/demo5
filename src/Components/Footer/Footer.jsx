import React from 'react'
import './Footer.css'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { Link } from 'react-router-dom';
import CommentIcon from '@mui/icons-material/Comment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import foto1 from '../../Assisstest/img/footer1.jpg'
import foto2 from '../../Assisstest/img/footer2.jpg'
export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="top">Пишите, Задавайте Вопросы, Делитесь Идеями!<CommentIcon /></h1>
                        <button className="right">Контакты <NorthEastIcon /></button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-auto">
                        <p className="menu">Страницы</p>
                        <ul>
                            <li>
                                <Link to='/'>Главная</Link>
                            </li>
                            <li>
                                <Link to='/about'>О нас</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Контакты</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-auto">
                        <p className="menu">Интернет ресурсы</p>
                        <ul>
                            <li>
                                <a href="#!">Facebook</a>
                            </li>
                            <li>
                                <a href="#!">Instagram</a>
                            </li>
                            <li>
                                <a href="#!">Twitter</a>
                            </li>
                            <li>
                                <a href="#!">Dribble</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-auto">
                        <p className="menu">Контакты</p>
                        <button className="bottom">Отправит сообщение <MailOutlineIcon /> </button>
                        <div className="text-top">
                            <a href='#!' className="email">atlestextile@gmail.com</a>
                            <a href="tel:+998940287200" className="number">+998(94)028-72-00</a>
                            <a href="tel:+998941387200" className="number">+998(94)138-72-00</a>
                            <a href="tel:+998941582000" className="number">+998(94)158-20-00</a>
                            <a href="tel:+998951204111" className="number">+998(95)120-41-11</a>
                        </div>
                    </div>
                    {/* <div className="col-auto">
                        <p className="menu">Popular updates</p>
                        <div className="box-bottom">
                            <div className="box">
                                <img src={foto1} alt="" />
                                <div className="text">
                                    <a href='#!' className="right">Can textiles lead the way<br />during the pandemic?</a>
                                    <p className="right">March 18, 2021</p>
                                </div>
                            </div>
                            <div className="box">
                                <img src={foto2} alt="" />
                                <div className="text">
                                    <a href="#!" className="right">The Story of a Silk Lends<br />Cotton like...</a>
                                    <p className="right">March 9, 2021</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="col-auto">
                        <p className="menu">Адрес</p>
                        <p className="adres">
                            ул. Афросиаб,16 100031,
                        </p>
                        <p className="adres">г.Ташкент Узбекистан</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <p className="last-left">
                            Copyright © 2024 <span>ThemetechMount.</span> All rights reserved. Powered by <span> Preyan Technosys Pvt. Ltd.</span>
                        </p>
                        <p className="last-right">
                            Term & condition / Privacy policy / Support
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
