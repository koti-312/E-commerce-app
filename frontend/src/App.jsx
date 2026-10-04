import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './pages/Product'
import Login from './pages/Login'
import Register from "./pages/Register"
import Cart from './pages/Cart'
import ShopCategory from './pages/ShopCategory'
import womens_banner from './assets/womens banner.jpg'
import mens_banner from './assets/mens banner.jpg'
import phones_banner from './assets/phones banners.jpg'
import Home from './pages/Home'
import PopularProduct from './Component/PopularProduct'
import { useEffect, useState } from 'react'
import "./App.css"
import logo from "./assets/website_logo.png"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PageNotFound from './Component/PageNotFound/PageNotFound'
import ScrollToTop from "./Component/ScrollToTop"

function App() {
  
  const [showSplash, setShowSplash] = useState(() => {
    return !sessionStorage.getItem('splashShown')
  })

  useEffect(() => {
    if (showSplash) {
      const timer = setTimeout(() => {
        setShowSplash(false)
        sessionStorage.setItem('splashShown', 'true')
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [showSplash])

  if (showSplash) {
    return (
      <div className="website-name">
        <img src={logo} alt="logo" />
        <span className="trend">Trend</span>
        <span className="kart">Kart</span>
      </div>
    )
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<ShopCategory banner={mens_banner} category="mens" />} />
          <Route path="/womens" element={<ShopCategory banner={womens_banner} category="womens" />} />
          <Route path="/gadgets" element={<ShopCategory banner={phones_banner} category="gadgets" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/home-product/:productId" element={<PopularProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        <ToastContainer position='top-right' autoClose={2500} />
        <ScrollToTop/>
      </BrowserRouter>
    </>
  )
}

export default App
