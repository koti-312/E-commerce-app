import React from 'react'
import './Footer.css';
import shop_logo from '../../assets/carts.png';
import  insta_icon from "../../assets/instagram.png"
import whatsapp_icon from "../../assets/social.png"
import mail_icon from "../../assets/gmail.png"

const Footer = () => {
    return (
        <div className='footer'>
            
            <div className="footer-logo">
                <img src={shop_logo} alt="Myshop"/>
                <p className='logo-name'>MYSHOP</p>
            </div>
            <div className="footer-link">
                <li>Company</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
            </div>
            <div className='footer-icon'>
                <div className="footer-container">
                 <img src={insta_icon} alt="" />
            </div>
            <div className="footer-container">
                <img src={whatsapp_icon} alt="" />
            </div>
            <div className="footer-container">
                <img src={mail_icon} alt="" />

            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright@2025</p>
            </div>
        </div>
        </div>
    )
}

export default Footer;