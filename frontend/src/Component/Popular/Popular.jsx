import React, { useEffect, useState } from 'react'
import './Popular.css'
import Item from '../Item/Item'
import home_product from '../../assets/product_home'

const Popular = () => {

  return (
    <div className='popular'>
      <h1>Popular in Mens & Womens</h1>
      <div className="popular-item">
        {home_product.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default Popular