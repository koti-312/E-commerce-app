import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../Context/ShopContext'
import { FaTrash } from 'react-icons/fa'


const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext)

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          return(

          <div key={product.id}>
            <div className='cartitems-format  cartitems-format-main'>
              <img src={product.image} alt="" className="carticon-product-icon" />
              <p>{product.name} </p>
              <p>${product.price}</p>
              <button className='cartitems-quantity'>{cartItems[product.id]}</button>
              <p>${product.price * cartItems[product.id]}</p>
              <FaTrash onClick={() => { removeFromCart(product.id) }} alt="" className="delete-cart" />
            </div>
            <hr />
          </div>
          )

        }
        return null
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className='cartitems-total-item'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping fees</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>proceed to checkout</button>
        </div>
        
        <div className="cartitem-promo">
          <p>if you have a promo code,Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promo' className='promoholder' />
            <button>Submit</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CartItems
