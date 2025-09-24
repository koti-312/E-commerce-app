import React from 'react'
import './Navbar.css';
import shop_logo from '../../assets/shop logo.png';

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={shop_logo} alt="" className="nav-logo" />
            <h2 className='h2'>MY SHOP</h2>
            <h2 className='h2'>Admin Panel</h2>
            <hr />
        </div>
    )
}

export default Navbar;