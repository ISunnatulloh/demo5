import React from 'react'
import './TextTitle.css'
import textile from '../../Assisstest/img/textitle.jpg'
export default function TextTitle() {
  return (
    <section className="textile">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h5>//Textile Industry</h5>
                        <h1>Dynamic team of <br />
                             crafting textile</h1>
                        <div className="bigcard">
                            <div className="cardin">
                                <div className="top">
                                    <h3>20+ Years of experience</h3>
                                    <p className="text">
                                        A wealth of experience likely means that you have witnessed and adapted to various changes and developments within the textile industry.</p>
                                </div>
                                <div className="center">
                                    <h3>1500+ Project</h3>
                                    <p className="text">
                                        Handling such a large number of projects implies a diverse and extensive range of experiences. Each project likely presented unique challenges.</p>
                                </div>
                                <div className="bottom">
                                    <div className="center">
                                        <h3>90+ Project</h3>
                                        <p className="text">
                                            90+  members in a textile company is a substantial responsibility that requires effective leadership, communication, and organizational skills. </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={textile} alt="" />
                    </div>
                </div>
            </div>
        </section>

  )
}
