import React, { useContext } from 'react'
import { ShopContext } from '../Component/Context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer/Footer'

const Product = () => {

  const {all_product}= useContext(ShopContext)
  const {productId} =useParams()
  const product =all_product.find((e)=> e.id === Number(productId))

  return (
    <>
      <Navbar/>
      <ProductDisplay product={product}/>
      <Footer/>
    </>
  )
}

export default Product
