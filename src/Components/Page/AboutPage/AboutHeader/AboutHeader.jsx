import React from 'react'
import './AboutHeader.css'
import foto from '../../../../Assisstest/img/about strelka.png'
export default function AboutHeader() {
  return (
    <div className='aboutheader'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="top">
              Welcome to<br/> Fablio market!
              </h1>
              <div className="box">
                <img src={foto} alt="" />
                <div className="text">
                  <p className="top">Get in touch with our team</p>
                  <a className='number' href="#!">+0 (145) 967 8037</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
