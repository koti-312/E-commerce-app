import React from 'react'
import './Navbar.css';
import shop_logo from '../../assets/shop logo.png';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={shop_logo} alt="" className='logo'/>
                <p className='p'>MYSHOP</p>
                <h1 className='h1'>Admin panel</h1>
                <hr />
            </div>
        
        </div>
    )
}

export default Navbar;
