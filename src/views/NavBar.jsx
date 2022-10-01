import React from 'react'
import NavElements from '../components/NavElements'
import UserProfile from '../components/UserProfile'
import style from './css/NavBar.module.css'

function NavBar({data}) {
  return (
    <div className={style.navContainer}>
      <a href="#frontPage">
        <img className={style.logo} src="https://res.cloudinary.com/dannt/image/upload/v1664568378/pufi-app/pufi-logo_bn9hob.png" alt="logo" width={160} height={80}/>
      </a>
      <NavElements products={data}/>
      <UserProfile/>
      
    </div>
  )
}

export default NavBar