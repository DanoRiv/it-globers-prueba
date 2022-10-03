import React from 'react'
import style from './css/Footer.module.css'


function Footer({data}) {
  return (
    <>
    <footer className={style.footerContainer}>
      <div className={style.column1}>
        <img alt='logo' src={'https://res.cloudinary.com/dannt/image/upload/v1664781482/pufi-app/pufi-logo-black_iyflye.png'} width={100} height={48}/>
      </div>
      <div className={`${style.column2} ${style.separator}`}>
        <ul>
        {data.map(product=> (
          <li>{product.name}</li>
          )
          )} 
        </ul>
      </div>
      <div className={`${style.column3} ${style.separator}`}>
        <ul>
          <li>Contacto</li>
          <li>Ayuda</li>
          <li>Cómo comprar</li>
          <li>Términos & condiciones</li>
        </ul>
      </div>
      <div className={`${style.column4} ${style.separator}`}>
        <div className={style.row1}>
          <p>compra 100% segura </p>
        </div>
        <div className={style.row2}>
          <img width={30} height={40} src="https://res.cloudinary.com/dannt/image/upload/v1664780406/pufi-app/zbuxxqmkladteuy4i7r8.png" alt="data fiscal" />
          <img width={40} height={40} src="https://res.cloudinary.com/dannt/image/upload/v1664780543/pufi-app/asesoria-y-certificacion-en-calidad-pymes-on-line-cali_edykzi.png" alt="garantía" />
          <div className={style.row2Text}><p>Comprá con la garantía de pufi</p></div>
        </div>
      </div>
      <div className={style.column5}>
        <p>seguinos en </p>
        <img width={25} height={25} src="https://res.cloudinary.com/dannt/image/upload/v1664780711/pufi-app/59439_bqqy6x.png" alt="faceboook logo" />
        <img width={25} height={25} src="https://res.cloudinary.com/dannt/image/upload/v1664780805/pufi-app/twitter-social-logotype_ezzpcn.png" alt="twitter logo" />
        <img width={25} height={25} src="https://res.cloudinary.com/dannt/image/upload/v1664780848/pufi-app/25425_q9crxn.png" alt="instagram logo" />
      </div>
    </footer>
    <div className={style.copyright}>
      <p>PUFI Copyright 2017 - Todos los derechos reservados </p>
      <img height={50} width={75} src="https://res.cloudinary.com/dannt/image/upload/v1664817547/pufi-app/Brandlive-1_wwm4py.png" alt="brandlive logo" />
    </div>
    </>
  )
}

export default Footer