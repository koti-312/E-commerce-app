import React from 'react'
import "../Footer/Footer.css"
import { LiaGithub, LiaInstagram, LiaLinkedin, LiaWhatsapp } from 'react-icons/lia'
import { MdMail } from 'react-icons/md'
import logo from "../../assets/website_logo.png"


const Footer = () => {
    return (
        <footer className='footer-section' id='footer'>
            <div className='footer-container'>
                <div className='footer-logo'>
                    <a href="/">
                        <img src={logo} alt="TrendKart" />
                        <h3>TrendKart</h3>
                    </a>
                    <p>Your one-stop shop for trendy fashion and gadgets, built for
                        quality and speed.</p>
                </div>

                <div className='footer-links'>
                    <h3>Shop by Category</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/mens">Mens</a></li>
                        <li><a href="/womens">Womens</a></li>
                        <li><a href="/gadgets">Gadgets</a></li>
                    </ul>
                </div>

                <div className="footer-socialmedia">
                    <h3>Connect With Us</h3>
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/koteswarsingh" target="_blank" rel="noreferrer">
                                <LiaInstagram size={40} />
                            </a>
                        </li>

                        <li>
                            <a href="https://wa.me/8148780655" target="_blank" rel="noreferrer">
                                <LiaWhatsapp size={40} />
                            </a>
                        </li>
                   
                        <li>
                            <a href="mailto:koteswar31204@gmail.com" target="_blank" rel="noreferrer">
                                <MdMail size={40} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='footer-bottom'>
                <p>&copy; {new Date().getFullYear()} TrendKart. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer