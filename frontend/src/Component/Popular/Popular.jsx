import React, { useEffect, useState } from 'react'
import './Popular.css'
import Item from '../Item/Item'
import home_product from '../../assets/product_home'
import { getPopularProducts, getImageUrl } from '../../services/api'

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([])

  useEffect(() => {
    getPopularProducts()
      .then((data) => setPopularProducts(data))
  }, [])

  const allProducts = [...home_product, ...popularProducts]

  const getImage = (item) => {
    if (!item.image) return home_product[0].image
    return getImageUrl(item.image)
  }

  return (
    <div className='popular'>
      <h1>Popular in Mens & Womens</h1>
      <div className="popular-item">
        {allProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={getImage(item)}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default Popular