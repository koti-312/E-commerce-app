import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Admin from './Pages/Admin/Admin'
import AddProduct from './Components/AddProduct/AddProduct'
import ListProduct from './Components/ListProduct/ListProduct'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/addproduct" element={<Admin><AddProduct /></Admin>} />
        <Route path="/listproduct" element={<Admin><ListProduct /></Admin>} />
      </Routes>
    </div>
  )
}

export default App