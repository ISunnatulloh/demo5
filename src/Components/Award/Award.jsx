import React from 'react'
import './Award.css'
import star from '../../Assisstest/img/star1.png'
export default function Award() {
    return (
        <section className='award'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p className="top">//Award winning</p>
                        <h1 className="top">Our achievement</h1>
                    </div>
                    <div className="col-lg-3">
                        <div className="box">
                            <img src={star} alt="" />
                            <p className="bottom">Best designer</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="box">
                            <img src={star} alt="" />
                            <p className="bottom">Site of the day</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="box">
                            <img src={star} alt="" />
                            <p className="bottom">Satisfy Clients</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="box">
                            <img src={star} alt="" />
                            <p className="bottom">Classic theme</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
