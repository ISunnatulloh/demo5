import React from 'react'
import './Services.css'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import foto1 from '../../Assisstest/img/foto1.jpg'
import foto2 from '../../Assisstest/img/foto2.jpg'
import foto3 from '../../Assisstest/img/foto3.jpg'
import foto4 from '../../Assisstest/img/foto4.jpg'
export default function Services() {
  return (
    <section className="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="top">//services</p>
            <h1 className="top">Our creative services</h1>
          </div>
        </div>
      </div>
      <div className="title">
        <div className="box">
          <p className="one">01 - Dyeing and <br />printing</p>
          <div className="bottom">
            <p className="two">
              Fablio is the largest industries peer-to<br />peer comparison initiative in the textile <br />industry. It tracks the apparel material<br /> and home textile sector’s progress.
            </p>
            <NorthEastIcon />
          </div>
          <div className="foto">
            <img src={foto1} alt="" />
          </div>
        </div>
        <div className="box">
          <p className="one">02 - Finishing <br/>treatments</p>
          <div className="bottom">
            <p className="two">
              Fablio is the largest industries peer-to<br />peer comparison initiative in the textile <br />industry. It tracks the apparel material<br /> and home textile sector’s progress.
            </p>
            <NorthEastIcon />
          </div>
          <div className="foto">
            <img src={foto2} alt="" />
          </div>
        </div>
        <div className="box">
          <p className="one">03 - Fabric<br/> production</p>
          <div className="bottom">
            <p className="two">
              Fablio is the largest industries peer-to<br />peer comparison initiative in the textile <br />industry. It tracks the apparel material<br /> and home textile sector’s progress.
            </p>
            <NorthEastIcon />
          </div>
          <div className="foto">
            <img src={foto3} alt="" />
          </div>
        </div>
        <div className="box">
          <p className="one">04 - Stitching <br/>Fab</p>
          <div className="bottom">
            <p className="two">
              Fablio is the largest industries peer-to<br />peer comparison initiative in the textile <br />industry. It tracks the apparel material<br /> and home textile sector’s progress.
            </p>
            <NorthEastIcon />
          </div>
          <div className="foto">
            <img src={foto4} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
