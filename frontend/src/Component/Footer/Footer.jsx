import React from 'react'
import './Footer.css';
import shop_logo from "../../assets/shop logo.png"
import  insta_icon from "../../assets/insta.png"
import whatsapp_icon from "../../assets/whatsapp.png"
import mail_icon from "../../assets/mail.jpg"

const Footer = () => {
    return (
        <div className='footer'>
            
            <div className="footer-logo">
                <img src={shop_logo} alt="" />
                <p>MYSHOP</p>
            </div>
            <div className="footer-link">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
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