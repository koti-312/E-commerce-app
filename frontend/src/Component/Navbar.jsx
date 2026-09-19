import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import shop_logo from '../assets/shop logo.png'
import cart_icon from '../assets/cart.png'
import { ShopContext } from './Context/ShopContext'

const Navbar = () => {

  const [menu, setMenu] = useState("shop")
  const { getTotalCartItems } = useContext(ShopContext)

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <Link to="/">
          <img src={shop_logo} alt="MyShop logo" />
        </Link>
        <p>MYSHOP</p>
      </div>

      <ul className="nav-menu">
        <li>
          <Link className={menu === "home" ? "active" : ""}
            onClick={() => { setMenu("home"); window.scroll({ top: 0, behavior: "smooth" }) }} to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className={menu === "mens" ? "active" : ""}
            onClick={() => setMenu("mens")} to='/mens'>
            Mens
          </Link>
        </li>

        <li>
          <Link className={menu === "womens" ? "active" : ""}
            onClick={() => setMenu("womens")} to='/womens'>
            Womens
          </Link>
        </li>

        <li>
          <Link className={menu === "gadgets" ? "active" : ""}
            onClick={() => setMenu("gadgets")} to='/gadgets'>
            Gadgets
          </Link>
        </li>
      </ul>

      <div className="nav-login-cart">
        {localStorage.getItem('auth-token') ?
          <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>
            Logout
          </button>
          :
          <Link to='/login'>
            <button className='login-button'>Login</button>
          </Link>
        }

        <div className="nav-cart-wrapper">
          <Link to='/cart'>
            <img src={cart_icon} alt="Cart" className='click' />
          </Link>
          <div className="nav-cart-count">
            {getTotalCartItems()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar