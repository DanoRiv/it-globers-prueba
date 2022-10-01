import React from 'react'
import style from './css/ProductCards.module.css'
import rightArrow from '../assets/images/right-arrow-svgrepo-com.svg'

function ProductCards({data}) {
  return data && data.map((product, index)=>(
    <div className={index % 2 === 0 ? style.cardsContainer : style.cardsContainerInverse}>
      <div className={style.bigImage}>
        <img src={product.previewImage} alt={product.name} />
      </div>
      <div className={style.details}>
        <img src={product.productImage} alt={product.name} width={100} height={100}/>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <button> <img src={rightArrow} alt="right arrow" width={10} height={10}/> VER MAS</button>
      </div>
    </div>
  ))
}

export default ProductCards