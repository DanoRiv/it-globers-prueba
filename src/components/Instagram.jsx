import React from 'react'
import { pufiInstagram } from '../instagramReel'
import style from './css/Instagram.module.css'

function Instagram() {
  return (
    <div className={style.instagramContainer}>
        <small>instagram</small>
        <h3>#espufi</h3>
        <div className={style.photoContainer}>
        {pufiInstagram.map((photo)=>(
            <img src={photo.photo} alt='instagram photos' width={193} height={193}/>
        ))}
        </div>

    </div>
  )
}

export default Instagram