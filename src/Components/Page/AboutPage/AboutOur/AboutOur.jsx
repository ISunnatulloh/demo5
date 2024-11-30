import React from 'react'
import './AboutOur.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import foto from '../../../../Assisstest/img/about our.jpg'
export default function AboutOur() {
    return (
        <div className='aboutour'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p className="top">//Our approach</p>
                        <h1 className="top">One of the leaders in textile market</h1>
                        <div className="right-box">
                            <div className="one">
                                <img src={foto} alt="" />
                            </div>
                            <div className="two">
                                <div className="box">
                                    <div className="text">
                                        <CheckCircleIcon />
                                        <p className="title">Portfolio managements</p>
                                    </div>
                                    <p className="bottom">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                    </p>
                                </div>
                                <div className="box">
                                    <div className="text">
                                        <CheckCircleIcon />
                                        <p className="title">Finance & restructuring</p>
                                    </div>
                                    <p className="bottom">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                    </p>
                                </div>
                                <div className="box">
                                    <div className="text">
                                        <CheckCircleIcon />
                                        <p className="title">Technology advisory</p>
                                    </div>
                                    <p className="bottom">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                    </p>
                                </div>
                                <div className="box">
                                    <div className="text">
                                        <CheckCircleIcon />
                                        <p className="title">Project management</p>
                                    </div>
                                    <p className="bottom">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                    </p>
                                </div>
                                <div className="box">
                                    <div className="text">
                                        <CheckCircleIcon />
                                        <p className="title">Capital investments</p>
                                    </div>
                                    <p className="bottom">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
