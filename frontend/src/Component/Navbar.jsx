import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import shop_logo from '../assets/shop logo.png';
import cart_icon from '../assets/cart.png';
import { ShopContext } from './Context/ShopContext';


const Navbar = () => {

  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);


return (
  <div className='navbar'>
    <div className='nav-logo'>
      <img src={shop_logo} alt="" />
      <p> MYSHOP</p>
    </div>
    <ul className="nav-menu">
      <li onClick={() => { setMenu("mens") }} ><Link style={{ textDecoration: 'none' }} to='/mens'>Mens</Link>{menu === "mens" ? <hr /> : <></>}</li>
      <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: 'none' }} to='/womens'>Womens</Link>{menu === "womens" ? <hr /> : <></>}</li>
      <li onClick={() => { setMenu("gadgets") }}><Link style={{ textDecoration: 'none' }} to='/gadgets'>Gadgets</Link>{menu === "gadgets" ? <hr /> : <></>}</li>
    </ul>
    
    <div className="nav-login-cart">
      {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
      :<Link to='/login'><button>Login </button></Link>}
    
    <Link to='/cart' > <img src={cart_icon} alt=""  className='click'/></Link></div>
    <div className="nav-cart-count">{getTotalCartItems()}</div>
   </div>

)
}

export default Navbar;

