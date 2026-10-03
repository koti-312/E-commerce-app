import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../Context/ShopContext'
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems,addToCart, removeFromCart, removeFromOneCart } = useContext(ShopContext)

  const cartEmpty = () => {
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        return false
      }
    }
    return true
  }

  if (cartEmpty()) {
    return (
      <div className="cartitems-empty">
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="continue-shopping-btn">Continue Shopping</Link>
      </div>
    )
  }

  const subtotal = getTotalCartAmount()
  const tax = subtotal * 0.05
  const total = subtotal + tax

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
          return (

            <div key={product.id}>
              <div className='cartitems-format  cartitems-format-main'>
                <img src={product.image} alt="" className="carticon-product-icon" />
                <p>{product.name} </p>
                <p>${product.price}</p>

                <div className='cartitems-quantity'>
                  <button onClick={() => removeFromOneCart(product.id)}>-</button>
                  <span>{cartItems[product.id]}</span>
                  <button onClick={() => addToCart(product.id)}>+</button>
                </div>

                <p>${product.price * cartItems[product.id]}</p>
                <FaTrash onClick={() => { removeFromCart(product.id) }} alt="" className="delete-cart" />
              </div>
              <hr />
            </div>
          )
        }
        return null
      })}
      <Link to="/" className="continue-shopping-link">Continue Shopping</Link>

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className='cartitems-total-item'>
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <hr />

            <div className="cartitems-total-item">
              <p>Tax (5%)</p>
              <p>${tax.toFixed(2)}</p>
            </div>
            <hr />

            <div className="cartitems-total-item">
              <p>Shipping fees</p>
              <p>Free</p>
            </div>
            <hr />

            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${total.toFixed(2)}</h3>
            </div>
          </div>

          <button>proceed to checkout</button>
        </div>

        <div className="cartitem-promo">
          <p>If you have a promo code,Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promo' className='promoholder' />
            <button type='submit'>Submit</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CartItems
