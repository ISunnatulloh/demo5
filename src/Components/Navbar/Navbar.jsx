import React from 'react'
import './Navbar.css'
import logo from '../../Assisstest/img/logo.svg'
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { Link } from 'react-router-dom';
export default function Navbar() {
    const Handle = () => {
        let li1 = document.querySelector('.li1');
        let box = document.querySelector('.bo');
        let box2 = document.querySelector('.bo2');
        let box3 = document.querySelector('.bo3');
        li1.addEventListener('click', function () {
            if (box2.style.display == 'flex' || box3.style.display == 'flex' || box2.style.display == '' || box3.style.display == '') {
                box2.style.display = 'none'
                box3.style.display = 'none'
            }
        })
        if (box.style.display == '' || box.style.display == 'none') {
            box.style.display = 'flex'
            box.style.transition = '1s'
        } else {
            box.style.display = 'none'
        }

    }
    const Handle2 = () => {
        let li2 = document.querySelector('.li2');
        let box = document.querySelector('.bo');
        let box2 = document.querySelector('.bo2');
        let box3 = document.querySelector('.bo3');
        li2.addEventListener('click', function () {
            if (box.style.display == 'flex' || box3.style.display == 'flex' || box.style.display == '' || box3.style.display == '') {
                box.style.display = 'none'
                box3.style.display = 'none'
            }
        })
        if (box2.style.display == '' || box2.style.display == 'none') {
            box2.style.display = 'flex'
            box2.style.transition = '1s'
        } else {
            box2.style.display = 'none'
        }
        console.log(box2, li2);
    }
    const Handle3 = () => {
        let li3 = document.querySelector('.li3');
        let box = document.querySelector('.bo');
        let box2 = document.querySelector('.bo2');
        let box3 = document.querySelector('.bo3');
        li3.addEventListener('click', function () {
            if (box2.style.display == 'flex' || box.style.display == 'flex' || box2.style.display == '' || box.style.display == '') {
                box2.style.display = 'none'
                box.style.display = 'none'
            }
        })
        if (box3.style.display == '' || box3.style.display == 'none') {
            box3.style.display = 'flex'
            box3.style.transition = '1s'
        } else {
            box3.style.display = 'none'
        }
        console.log(box3, li3);
    }
    return (
        <div className="nav-title">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <img src={logo} alt="" />
                        <div className="box">
                            <ul>
                                <li>
                                    <Link className='a-text' to='/'>Home</Link>
                                </li>
                                <li className='li1'>
                                    <a className='a-text' onClick={Handle} href="#!">Pages</a>
                                    <div className="bo">
                                        <Link className='bo-text' to='/about'>About us</Link>
                                        <a className='bo-text' href='#!'>Services</a>
                                        <a className='bo-text' href='#!'>Our team</a>
                                        <a className='bo-text' href='#!'>Team details</a>
                                        <Link className='bo-text' to='/contact'>Contact us</Link>
                                    </div>
                                </li>
                                <li className='li2' >
                                    <a className='a-text' onClick={Handle2} href="#!">Services</a>
                                    <div className="bo2">
                                        <a className='bo-text' href='#!'>Fabric print</a>
                                        <a className='bo-text' href='#!'>Fab dyeing</a>
                                        <a className='bo-text' href='#!'>Engineering</a>
                                        <a className='bo-text' href='#!'>Microfiber print</a>
                                        <a className='bo-text' href='#!'>Stich fabric</a>
                                        <a className='bo-text' href='#!'>Stitching fab</a>
                                    </div>
                                </li>
                                <li className='li3' >
                                    <a className='a-text' onClick={Handle3} href="#!">Projects</a>
                                    <div className="bo3">
                                        <a className='bo-text' href='#!'>Project layout</a>
                                        <a className='bo-text' href='#!'>Project details</a>
                                    </div>
                                </li>
                                <li>
                                    <a className='a-text' href="#!">Blog</a>
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
        </div>
    )
}
