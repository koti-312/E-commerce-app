import React, { createContext, useEffect, useState } from "react"
import all_product from '../../assets/all_product'
import home_product from '../../assets/product_home'
import { addToCart as addToCartAPI, removeFromCart as removeFromCartAPI, getCart } from '../../services/api'

export const ShopContext = createContext(null)

const combined_products_for_cart = [...all_product, ...home_product]

const getDefaultCart = () => {
  let cart = {}
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0
  }
  return cart
}

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())

  useEffect(() => {
    const loadCart = async () => {
      if (localStorage.getItem('auth-token')) {
        try {
          const data = await getCart()
          console.log("Get cart response:", data)
          
          if (data.success) {
            setCartItems((prev) => ({ ...prev, ...data.cartData }))
          }
        }
        catch (error) {
          console.error("Failed to load cart:", error)
        }
      }
    }

    loadCart()
  }, [])

  const addtoCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))

    if (localStorage.getItem('auth-token')) {
      try {
        const data = await addToCartAPI(itemId)
        console.log(data)
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

  const removeFromOneCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev }
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1
      }
      else {
        updatedCart[itemId] = 0
      }
      return updatedCart
    })
  }

  const getTotalCartAmount = () => {

    let totalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = combined_products_for_cart.find(
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
    return totalItem
  }

  const getProductById = (id) => {
    return combined_products_for_cart.find((product) => Number(product.id) === Number(id))
  }

  const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,getProductById,cartItems,
    addtoCart,removeFromCart,removeFromOneCart
  }

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider