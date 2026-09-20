import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../Context/ShopContext'

const ProductDisplay = (props) => {

    const { product } = props
    const { addtoCart } = useContext(ShopContext)

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>

                <div className="productdisplay-img">
                    <img src={product.image} alt="" className="productdisplay-main-img" />
                </div>

                <div className="product-details">

                    <div className='product-display'>
                        <h1 className="prod-name">{product.name} </h1>
                        <span>{product.quality}</span>
                        <span>p(144)</span>
                        <span className="productdisplay-right-prices">${product.price}</span>
                        <p className='productdisplay-right-description'>A lightweight cotton dress with soft pastel floral prints. Designed for comfort during warm days, it features a flowing silhouette and breathable fabric. Perfect for beach outings, picnics, or casual evening wear.</p>
                        <button onClick={() => { addtoCart(product.id) }} className='cart'> Add to cart</button>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductDisplay