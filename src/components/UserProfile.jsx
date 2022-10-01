import React from 'react'
import style from './css/UserProfile.module.css'
import arrow from '../assets/images/down-arrow-download-svgrepo-com.svg'

function UserProfile() {
  return (
    <div className={style.dropdown}>
    <button className={style.dropbtn}>Mi cuenta <img src={arrow} alt="down-arrow" color='white' width={10} height={10}/></button>
    <div className={style['dropdown-content']}>
      <a href="#">Perfil</a>
      <a href="#">Historial de compras</a>
      <a href="#">Log out</a>
    </div>
    <div className={style.miCompra}>Mi compra</div>
  </div> 
  )
}

export default UserProfile