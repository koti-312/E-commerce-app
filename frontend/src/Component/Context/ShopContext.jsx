import React, { createContext, useEffect, useState } from "react";
import all_product from '../../assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {

  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }

  return cart;

};

const ShopContextProvider = (props) => {

  const url="https://e-commerce-app-backend-31uv.onrender.com"
  const [cartItems, setCartItems] = useState(getDefaultCart());


  const addtoCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (localStorage.getItem('auth-token')) {
      fetch('https://e-commerce-app-backend-31uv.onrender.com/addtocart', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "itemId": itemId }),

      })
        .then((response) => response.json())
        .then((data) => console.log(data));

    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem('auth-token')) {
      fetch('https://e-commerce-app-backend-31uv.onrender.com/removefromcart', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "itemId": itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };

  const getTotalCartAmount = () => {

    let totalAmount = 0;
    for (const item in cartItems) {

      if (cartItems[item] > 0) {

        const itemInfo = all_product.find(
          (product) => Number(product.id) === Number(item));
        if (itemInfo) {
          totalAmount += Number(itemInfo.price) * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }

  const contextValue = { getTotalCartItems, getTotalCartAmount, all_product, cartItems, addtoCart, removeFromCart, };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
