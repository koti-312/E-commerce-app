import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import { FaTrash } from 'react-icons/fa'


const ListProduct = () => {

  const API_URL = import.meta.env.VITE_API_URL

  const [allproducts, setAllProducts] = useState([])

  const fetchInfo = async () => {
    try {
      const response = await fetch(`${API_URL}/products/allproducts`)
      const data = await response.json()
      setAllProducts(data)
    }
    catch (error) {
      console.log("Error:", error)
    }
  }

  useEffect(() => {
    fetchInfo()
  }, [])

  const remove_product = async (id) => {
    try {
      const response = await fetch(`${API_URL}/products/removeproduct`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: id })
      })
      const data = await response.json()

      if (data.success) {
        alert("Product Removed")
        await fetchInfo()
      }
      else {
        alert("Failed to remove product")
      }
    }
    catch (error) {
      console.log("Error:", error)
    }
  }

  return (

    <div className='list-product'>
      <h1>All Product List</h1>
      <div className="listproduct-format">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Category</p>
        <p>Quality</p>
        <p>Remove</p>
      </div>
      <div className="list-allproduct">
        <hr />
        {allproducts.map((product, index) => {
          return (

            <React.Fragment key={product.id || index}>
              <div className="listproduct-format listproduct">
                <img src={product.image} alt={product.name} className="listproduct-icon" />
                <p>{product.name}</p>
                <p>${product.price}</p>
                <p>{product.category}</p>
                <p>{product.quality}</p>
                <FaTrash onClick={() => remove_product(product.id)} className="listproduct-remove" />
              </div>
              <hr />
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}
export default ListProduct