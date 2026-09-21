import React from 'react'
import { useParams } from 'react-router-dom'
import home_product from '../assets/product_home'
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay'
import Breadcrum from './Breadcrums/Breadcrum'

const PopularProduct = () => {
  const { productId } = useParams()

  const product = home_product.find(
    (item) => item.id === Number(productId)
  )

  return (
    <div>
        <Breadcrum product={product}/>
      <ProductDisplay product={product} />
    </div>
  )
}

export default PopularProduct