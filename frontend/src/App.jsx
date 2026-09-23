import './App.css'
import Navbar from './Component/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './pages/Product'
import Login from './pages/Login'
import Cart from './pages/Cart'
import ShopCategory from './pages/ShopCategory'
import womens_banner from './assets/womens banner.jpg'
import mens_banner from './assets/mens banner.jpg'
import phones_banner from './assets/phones banners.jpg'
import Home from './pages/Home'
import Footer from './Component/Footer/Footer'
import PopularProduct from './Component/PopularProduct'
import { useEffect, useState } from 'react'
import "./App.css"
import shop_website from "./assets/shop_website.png"


function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className='website-name'>
        <img src={shop_website} alt="TrendKart" />
        <h1>TrendKart</h1>
      </div>

    )
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<ShopCategory banner={mens_banner} category="mens" />} />
          <Route path="/womens" element={<ShopCategory banner={womens_banner} category="womens" />} />
          <Route path="/gadgets" element={<ShopCategory banner={phones_banner} category="gadgets" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/home-product/:productId" element={<PopularProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App
