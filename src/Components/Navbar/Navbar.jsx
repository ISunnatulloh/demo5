import React from 'react'
import './Navbar.css'
import logo from '../../Assisstest/img/logo top.svg'
export default function Navbar() {
    return (
        <nav className='top'>
            <div className="col-lg-12">
                <img src={logo} alt="" />
                <button className='nav-top'>Buy now</button>
            </div>
        </nav>
    )
}
