import React from 'react'
import './Footer.css'
import logo from '../../Assisstest/img/logo.svg'
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { Link } from 'react-router-dom';
import footer_msg from "../../Assisstest/img/footer_msg.png"

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="box">
                            <div className="footer_title">Have an amazing layout?Let’s talk <img src={footer_msg} alt=""/></div>
                            <button className='right'>Contact Us <NorthEastIcon /> </button>
                        </div>
                    </div>
                    <div className="row footer_sections">
                        <div className="col-lg-3">
                            <div className="footer_section">
                                <div className="footer_section_title">Quicks links</div>
                                <ul>
                                    <li><Link to={""}>Home</Link></li>
                                    <li><Link to={""}>About us</Link></li>
                                    <li><Link to={""}>Contact</Link></li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-lg-3">
                            <div className="footer_section">
                                <div className="footer_section_title">Social info</div>
                                <ul>
                                    <li><Link to={""}>Facebook</Link></li>
                                    <li><Link to={""}>Instagram</Link></li>
                                    <li><Link to={""}>Twitter</Link></li>
                                    <li><Link to={""}>Dribble</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="footer_section">
                                <div className="footer_section_title">Sign up here for regular updates</div>
                                <a href="#">SEND</a>

                                <a href="#">support12@gmail.com</a>
                                <a href="#">+123 456 7890 12</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
