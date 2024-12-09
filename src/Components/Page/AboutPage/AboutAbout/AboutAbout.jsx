import React from 'react'
import './AboutAbout.css'
import foto from '../../../../Assisstest/img/abouticon.png'
export default function AboutAbout() {
  return (
    <section className='aboutabout'>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="top">
                //о нас
            </p>
            <h1 className="top">
            ПРОФЕССИОНАЛИЗМ, КАЧЕСТВО И ИННОВАЦИИ
            </h1>
          </div>
          <div className="col-lg-4">
            <div className="box">
              <p className="number">
                350k+
              </p>
              <p className="title">
                Happy clients
              </p>
              <p className="bottom">
                Lorem ipsum dolor sit amet, consecte turlore sed do eiusmod tempor incididunI
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box">
              <img src={foto} alt="" />
              <p className="title">
                Top fabric materials
              </p>
              <p className="bottom">
                Lorem ipsum dolor sit amet, consecte turlore sed do eiusmod tempor incididunI
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box">
              <p className="number">100%</p>
              <p className="title">Dedication</p>
              <p className="bottom">Lorem ipsum dolor sit amet, consecte turlore sed do eiusmod tempor incididunI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
