import './App.css';
import Navbar from './Component/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
import Login from './pages/Login';
import Cart from './pages/Cart';
import ShopCategory from './pages/ShopCategory';
import womens_banner from './assets/womens banner.jpg';
import mens_banner from './assets/mens banner.jpg';
import phones_banner from './assets/phones banners.jpg';
import Shop from './pages/Shop';
import Footer from './Component/Footer/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={mens_banner} category="mens" />} />
          <Route path="/womens" element={<ShopCategory banner={womens_banner} category="womens" />} />
          <Route path="/gadgets" element={<ShopCategory banner={phones_banner} category="gadgets" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
