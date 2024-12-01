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
                        Let’s work <br />together
                    </h1>
                    <form action="">
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Email address' />
                        <input type="text" placeholder='Phone number' />
                        <textarea name="" id="" cols="" rows="5"></textarea>
                        <button className='contact'>Submit</button>
                    </form>
                    <h1 className="top">
                        Get in touch
                    </h1>
                    <p className="top">Contact with email</p>
                    <a href="#!" className="email">support@example.com</a>
                    <p className="title">Let your work speak for itself</p>
                    <a href="#!" className="number">+0(145) 967 8037</a>
                    <p className="bottom">19 Ellenvale Lane, Hotan Gate2, New South<br /> Wales, 3008 New york</p>
                    <p className="media">Social media</p>
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
