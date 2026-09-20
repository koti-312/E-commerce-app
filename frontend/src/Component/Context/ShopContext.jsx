import React, { createContext, useState } from "react"
import all_product from '../../assets/all_product'
import { addToCart as addToCartAPI, removeFromCart as removeFromCartAPI } from '../../services/api'

export const ShopContext = createContext(null)

const getDefaultCart = () => {

  let cart = {}
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0
  }
  return cart
}

const ShopContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(getDefaultCart())

  const addtoCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))

    if (localStorage.getItem('auth-token')) {
      try {
        const data = await addToCartAPI(itemId)
        console.log(data);
      } catch (err) {
        console.error("Failed to sync cart with server:", err)
      }
    }
  }

  const removeFromCart = async (itemId) => {

    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    if (localStorage.getItem('auth-token')) {
      try {
        const data = await removeFromCartAPI(itemId)
        console.log(data)
      }
      catch (err) {
        console.error("Failed to sync cart with server:", err)
      }
    }
  }

  const getTotalCartAmount = () => {

    let totalAmount = 0;
    for (const item in cartItems) {

      if (cartItems[item] > 0) {

        const itemInfo = all_product.find(
          (product) => Number(product.id) === Number(item))
        if (itemInfo) {
          totalAmount += Number(itemInfo.price) * cartItems[item]
        }
      }
    }
    return totalAmount
  }

  const getTotalCartItems = () => {
    let totalItem = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item]
      }
    }
    return totalItem;
  }

  const contextValue = { getTotalCartItems, getTotalCartAmount, all_product, cartItems, addtoCart, removeFromCart, };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider