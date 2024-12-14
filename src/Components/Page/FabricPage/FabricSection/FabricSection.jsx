import React from 'react'
import './FabricSection.css'
import fabricSection from '../../../../Assisstest/img/fabricsection.jpg'
import foto1 from '../../../../Assisstest/img/fabric1.jpg'
import foto2 from '../../../../Assisstest/img/fabric2.jpg'
import foto3 from '../../../../Assisstest/img/fabric3.jpg'
import CheckIcon from '@mui/icons-material/Check';
export default function FabricSection() {
    return (
        <div className='fabricSection'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <img className='top-foto' src={fabricSection} alt="" />
                    </div>
                    <div className="col-lg-12">
                        <div className="left-text">
                            <h1 className="top">Finishing treatments</h1>
                            <p className="top"><span>Consectetur adipisicing elit,</span> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lvbaboris nisi ut aliquip <span>ex ea commodo consequat.</span> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatvbn cupidatat non proident, sunt in culpa qui officia natus error sit</p>
                        </div>
                        <img className='foto-1' src={foto1} alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="title">Detailed description :</h1>
                    </div>
                    <div className="col-lg-5">
                        <img className='foto-2' src={foto2} alt="" />
                    </div>
                    <div className="col-lg-7">
                        <p className="title">
                            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lvbaboris nisi ut aliquip ex ea commodo consequat Duis aute irure
                        </p>
                        <div className="box">
                            <div className="one">
                                <p className="bottom"><CheckIcon />Cotton fabrics is first</p>
                                <p className="bottom"><CheckIcon />Machine Harvests</p>
                                <p className="bottom"><CheckIcon />Weaving & woven</p>
                                <p className="bottom"><CheckIcon />Machine Harvests</p>
                            </div>
                            <div className="one">
                                <p className="bottom"><CheckIcon />Cotton fabrics is first</p>
                                <p className="bottom"><CheckIcon />Machine Harvests</p>
                                <p className="bottom"><CheckIcon />Weaving & woven</p>
                                <p className="bottom"><CheckIcon />Machine Harvests</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5">
                        <h1 className="bottom">
                            The challenge :
                        </h1>
                        <p className="last">
                            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labor dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita ullamco laboris nisi ut aliquip ex ea commodo
                        </p>
                        <h1 className="bottom">The solution:</h1>
                        <p className="last">
                            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labor dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita ullamco laboris nisi ut aliquip ex ea commodo
                        </p>
                    </div>
                    <div className="col-lg-7">
                        <img className='foto-3' src={foto3} alt="" />
                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="bottom">The way we work:</h1>
                        <p className="last">
                            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labor dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita ullamco laboris nisi ut aliquip ex ea commodoConsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labor dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita ullamco laboris nisi ut aliquip ex ea commodo
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
