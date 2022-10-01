import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from './css/Carousel.module.css'

function Carrousel() {
  return (
    <div className={style.carouselContainer} id='frontPage'>
      <div className={style.text}>
        <h1>Estar cómodo, nunca fue tan fácil.</h1>
        <button>Shop</button>
      </div>
      <Carousel showThumbs={false} showStatus={false} width='100%'>
        <div>
          <img alt='pufi product' src="http://res.cloudinary.com/dannt/image/upload/v1664553271/pufi-app/frontpage-PhotoRoom_u4cfzn.png" height='800'/>
        </div>
        <div>
          <img alt='pufi product' src="https://res.cloudinary.com/dannt/image/upload/v1664553437/pufi-app/inflatable-chairs-1500x825_rqdlrj.png" height='800'/>
        </div>
        <div>
          <img alt='pufi product' src="https://res.cloudinary.com/dannt/image/upload/v1664523318/pufi-app/QQ_20171017224735_800x_tijcgm.jpg" height='800'/>
        </div>
      </Carousel>
    </div>
  );
}

export default Carrousel;
