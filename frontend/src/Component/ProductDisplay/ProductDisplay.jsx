import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../Context/ShopContext'
import { toast } from 'react-toastify'

const ProductDisplay = (props) => {
    const { product } = props
    const { addtoCart } = useContext(ShopContext)

    const [selectedSize, setSelectedSize] = useState(null)
    const [sizeError, setSizeError] = useState("")

    const sizes = ["S", "L", "M", "XL","XXL"]
    const cartDress = product.category === "mens" || product.category === "womens"
    const Gadgets = product.category === "gadgets"

    const handleAddtocart = () => {
        if (cartDress && !selectedSize) {
            setSizeError("Please select a size")
            return
        }
        setSizeError("")
        addtoCart(product.id)
        toast.success(`${product.name} added to cart!`)
    }

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

                <main className="productdisplay-right">
                    <div className='product-display'>
                        <h1 className="prod-name">{product.name}</h1>

                        <ul className="gadget-features">
                            <li>📦 Free Shipping</li>
                            <li>🔄 7-Day Easy Returns</li>
                            <li>🛡️ 1 Year Warranty</li>
                        </ul>

                        <span className="productdisplay-right-prices">Price: ${product.price}</span>

                        {cartDress && (
                            <p className='productdisplay-right-description'>
                                {product.description}
                            </p>
                        )}

                        {Gadgets && (
                            <p className='gadgets-descryption'>
                                {product.description}
                            </p>
                        )}
                        {cartDress && (
                            <div className="size-selector">
                                {sizeError && (<p className='dress-sizeError'>{sizeError}</p>)}
                                <p className="selector-label">Select Size:</p>
                                <div className="size-options">
                                    {sizes.map((size) => (
                                        <button type="button" key={size}
                                            className={`size-btn ${selectedSize === size ? "active" : ""}`}
                                            onClick={() => {setSelectedSize(size)
                                                setSizeError("")
                                            }}>
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {Gadgets && (
                            <p className='stock-item'>✓ In Stock</p>
                        )}

                        <button onClick={handleAddtocart} className='cart-btn'>ADD TO CART</button>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default ProductDisplay