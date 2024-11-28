import React from 'react'
import './Our.css'
import hand from '../../Assisstest/img/hand.png'
import foto from '../../Assisstest/img/header title.png'
import foto1 from '../../Assisstest/img/our.png'
export default function Our() {
  return (
    <section className='our'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <p className="top">
                        //Our approach
                    </p>
                    <h1 className="top">
                    Together,<img src={hand} alt="" />  empowered by our<br/> very own <img src={foto} alt="" /> brand dials <br/>process we deliver <img src={foto1} alt="" />
                    </h1>
                </div>
            </div>
        </div>
    </section>
  )
}
