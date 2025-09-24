import React, { useContext } from 'react'
import './ProductDisplay.css';
import { ShopContext } from '../Context/ShopContext';

const ProductDisplay = (props) => {

    const { product } = props;
    const {addtoCart} = useContext(ShopContext);
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
                    <img src={product.image} alt="" className="productdisplay-main-img" /></div>
                    <div className="product-details">

                <h1 className="name">{product.name}</h1>
                <h1 className="quality">{product.quality}</h1>
                <h3 className='head'>p(144)</h3>
                <h3 className="productdisplay-right-prices">${product.price}</h3>
                <br/>
                <h3 className='productdisplay-right-description'>A lightweight cotton dress with soft pastel floral prints. Designed for comfort during warm days, it features a flowing silhouette and breathable fabric. Perfect for beach outings, picnics, or casual evening wear.</h3>
                <br/>
                <button onClick={()=>{addtoCart(product.id)}} className='cart'> Add to cart</button>
                <br/>
                <p className='head'>category: {product.category}</p>
                <p className='head'>handpicked Style | Assured quality</p>

                </div>
            </div>
        </div>



    )
}

export default ProductDisplay;