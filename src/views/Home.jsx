import React from 'react'
import Carrousel from '../components/Carousel'
import ProductCards from '../components/ProductCards'
import NavBar from './NavBar'
import style from './css/Home.module.css'
import { products } from '../products'
import CallToAction from './CallToAction'
import Footer from './Footer'

function Home() {
  return (
    <div className={style.homeContainer}>
      <NavBar data={products}/>
      <Carrousel/>
      <ProductCards data={products}/>
      <CallToAction/>
      <Footer data={products}/>
    </div>
  )
}

export default Home