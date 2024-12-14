import React from 'react'
import './Services.css'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import foto1 from '../../Assisstest/img/foto1.jpg'
import foto2 from '../../Assisstest/img/foto2.jpg'
import foto3 from '../../Assisstest/img/foto3.jpg'
import foto4 from '../../Assisstest/img/foto4.jpg'
import { Link } from 'react-router-dom';
export default function Services() {
  return (
    <section className="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="top">//Тканевый стиль</p>
            <h1 className="top">Открой для себя, как текстиль может изменить стиль!</h1>
          </div>
        </div>
      </div>
      <div className="title">
        <Link to='/fabric' className="box">
          <div className="foto">
            <img src={foto1} alt="" />
          </div>
          <p className="one">01 - Швейный<br />цех</p>
          <div className="bottom">
            <p className="two">
              Передовое оборудование и <br />инновационные методы производства.
            </p>
            <NorthEastIcon />
          </div>
        </Link>
        <Link to='/fabric' className="box">
          <div className="foto">
            <img src={foto2} alt="" />
          </div>
          <p className="one">02 - Раскройный<br />цех</p>
          <div className="bottom">
            <p className="two">
              От повседневной одежды <br />до эксклюзивных коллекций.
            </p>
            <NorthEastIcon />
          </div>
        </Link>
        <Link to='/fabric' className="box">
          <div className="foto">
            <img src={foto3} alt="" />
          </div>
          <p className="one">03 - Гладильно<br />упаковочный цех</p>
          <div className="bottom">
            <p className="two">
              Только лучшие материалы и<br /> тщательный контроль на каждом этапе.
            </p>
            <NorthEastIcon />
          </div>
        </Link>
        <Link to='/fabric' className="box">
          <div className="foto">
            <img src={foto4} alt="" />
          </div>
          <p className="one">04 - Контроль<br />качества</p>
          <div className="bottom">
            <p className="two">
              Учёт потребностей каждого клиента<br /> и персонализированные решения для <br />создания уникальной продукции.
            </p>
            <NorthEastIcon />
          </div>
        </Link>
      </div>
    </section>
  )
}
