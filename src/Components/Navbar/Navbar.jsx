import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../Assisstest/img/logo.png'
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { Link } from 'react-router-dom';
export default function Navbar() {
    const [show, setShow] = useState(false)

    return (
        <div className="nav-title">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <img src={logo} alt="" />
                        <div className={show ? 'null' : 'box'}>
                            <ul>
                                <li>
                                    <Link className='a-text' to='/'>Главная</Link>
                                </li>
                                <li>
                                    <Link className='a-text' to='/about'>О нас</Link>
                                </li>
                                <li>
                                    <Link className='a-text' to='/contact'>Контакты</Link>
                                </li>
                            </ul>

                            <div className="box-right">
                                <AttachEmailIcon />
                                <div className="text">
                                    <a href="tel:+998941582000" className="number">+998 (94) 158-20-00</a>                                </div>
                            </div>
                            <button className='right'>Cвяжитесь <NorthEastIcon /> </button>
                        </div>
                        <i onClick={() => setShow(!show)} className="bars fa-solid fa-bars"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
