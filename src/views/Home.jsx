import React from 'react'
import Carrousel from '../components/Carousel'
import ProductCards from '../components/ProductCards'
import NavBar from './NavBar'
import style from './css/Home.module.css'
import { products } from '../products'

function Home() {
  return (
    <div className={style.homeContainer}>
      <NavBar data={products}/>
      <Carrousel/>
      <ProductCards data={products}/>
    </div>
  )
}

export default Home