import React from 'react'
import './Footer.css'
import logo from '../../Assisstest/img/logo.svg'
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <img src={logo} alt="" />
                        <div className="box">
                            <ul>
                                <li>
                                    <Link className='a-text' to='/'>Home</Link>
                                </li>

                                <li>
                                    <Link className='a-text' to='/about'>About us</Link>
                                </li>
                                <li>
                                    <Link className='a-text' to='/contact'>Contact us</Link>
                                </li>
                            </ul>

                            <div className="box-right">
                                <AttachEmailIcon />
                                <div className="text">
                                    <a href="#!" className="number">+18-2222-3555</a>
                                    <a href="" className="email">support12@fablio.com</a>
                                </div>
                            </div>
                            <button className='right'>Let's talk <NorthEastIcon /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
