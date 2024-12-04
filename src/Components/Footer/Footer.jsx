import React from 'react'
import './Footer.css'
import logo from '../../Assisstest/img/logo.svg'
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
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
                        <h1 className="top">Have an amazing layout?Let’s talk <CommentIcon /></h1>
                        <button className="right">Contact us <NorthEastIcon /></button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-auto">
                        <p className="menu">Quicks links</p>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-auto">
                        <p className="menu">Social info</p>
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
                        <p className="menu">Sign up here for regular updates</p>
                        <form action="">
                            <MailOutlineIcon />
                            <input type="text" placeholder='Your email' />
                            <button className="bottom">Send now <NorthEastIcon /></button>
                        </form>
                        <div className="text-top">
                            <a href='#!' className="email">support12@gmail.com</a>
                            <a href="#!" className="number">+123 456 7890 12</a>
                        </div>
                    </div>
                    <div className="col-auto">
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
