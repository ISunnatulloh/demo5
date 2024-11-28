import React from 'react'
import './Footer.css'
import CommentIcon from '@mui/icons-material/Comment';
import NorthEastIcon from '@mui/icons-material/NorthEast';
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
                        <button className='right'>Contact us <NorthEastIcon /></button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-auto">
                        <p className="menu">Quicks links</p>
                        <ul>
                            <li>
                                <a href="#!">About</a>
                            </li>
                            <li>
                                <a href="#!">Department</a>
                            </li>
                            <li>
                                <a href="#!">Price plans</a>
                            </li>
                            <li>
                                <a href="#!">Fabric printing</a>
                            </li>
                            <li>
                                <a href="#!">Business growth</a>
                            </li>
                            <li>
                                <a href="#!">Customer services</a>
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
                        <p className="title">
                            support12@gmail.com
                        </p>
                            <span className='one'>+123 456 7890 12</span>
                    </div>
                    <div className="col-auto">
                        <p className="menu">Popular updates</p>
                        <div className="box-bottom">
                            <div className="box-right">
                                <img src={foto1} alt="" />
                                <div className="text">
                                    <a href="#!">Can textiles lead the way<br /> during the pandemic?
                                    </a>
                                    <span>March 18, 2021</span>
                                </div>
                            </div>
                            <div className="box-right">
                                <img src={foto2} alt="" />
                                <div className="text">
                                    <a href="#!">The Story of a Silk Lends<br /> Cotton like ComfortRayon
                                    </a>
                                    <span>March 9, 2021</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <p className="late-left">
                            Copyright © 2024 <span>ThemetechMount.</span> All rights reserved. Powered by <span>Preyan Technosys Pvt. Ltd.</span>
                        </p>
                        <p className="late-right">
                        Term & condition / Privacy policy / Support
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
