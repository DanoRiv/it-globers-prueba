import React from 'react'
import style from './css/NavElements.module.css'

function NavElements({products}) {
  return (
    <div className={style.navElements}>
      {products.map((product, index)=> (
        <ul key={index} className={style.products}>
          <li className={index === 0 ? `${style.individualProduct}` : `${style.individualProduct} ${style.separator}`}>
            <a href={`#${product.name}`} className={style.productBtn}>
              <img src={product.logo} alt={product.name} width={40} height={30}/>
              <h3>{product.name}</h3>
            </a> 
          </li>
        </ul>
      ))}
        
    </div>
  )
}

export default NavElements