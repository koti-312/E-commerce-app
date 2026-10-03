import React from 'react'
import Error_Page from "../../assets/404_ErrorPage.jpg"
import "./PageNotFound.css"
import Navbar from '../Navbar'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
    <Navbar/>
    <div className='Error_Page'>
      <img src={Error_Page} alt="404 Error Page" />
      <Link to="/">Continue Shopping</Link>
    </div>
    <Footer/>
    </>
    
  )
}

export default PageNotFound