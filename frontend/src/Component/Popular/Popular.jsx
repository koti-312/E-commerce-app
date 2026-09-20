import React, { useEffect, useState } from 'react'
import './Popular.css'
import Item from '../Item/Item'
import { getPopularProducts, getImageUrl } from '../../services/api'

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([])

  useEffect(() => {
    getPopularProducts()
      .then((data) => setPopularProducts(data))
  }, [])

  return (
    <div className='popular'>
      <h1>Popular in Mens & Womens</h1>
      <div className="popular-item">
        {popularProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={getImageUrl(item.image)}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default Popular