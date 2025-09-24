import React from 'react'
import './Sidebar.css';
import { Link } from 'react-router-dom';
import add_product from '../../assets/add-product.png';
import list_product from '../../assets/text.png'


const Sidebar = () => {

    return (
        <div className='sidebar'>
            <Link to={'/addproduct'} style={{ textDecoration: "none" }}>
                <div className="sidebar-item">
                <img src={add_product} alt="" className='product'/>
                    <p>Add Product</p>
                </div>
            </Link>
            <Link to={'/listproduct'} style={{ textDecoration: "none" }}>
                <div className="sidebar-item">
                <img src={list_product} alt="" className='product'/>
                    <p>Product List</p>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar;