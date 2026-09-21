import React, { useState } from 'react'
import './AddProduct.css'
import upload_image from '../../assets/upload.png'

const AddProduct = () => {

  const API_URL = import.meta.env.VITE_API_URL

  const [image, setImage] = useState(null)
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "mens",
        quality: "premium",
        price: ""
    })

    const imageHandler = (e) => {
        setImage(e.target.files[0])
    }
    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
    }
    const Add_Product = async () => {
        if (!image) {
            alert("Please select an image")
            return
        }

        try {
            const formData = new FormData()
            formData.append('product', image)

            const uploadResponse = await fetch(`${API_URL}/products/upload`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json'
                },
                body: formData
            })
            const responseData = await uploadResponse.json()
            if (responseData.success) {
                const product = {...productDetails,image: responseData.image_url}
                console.log(product)

                const addProductResponse = await fetch(`${API_URL}/products/addproduct`, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(product)
                })

                const data = await addProductResponse.json()
                if (data.success) {
                    alert("Product Added")
                    setProductDetails({
                        name: "",
                        image: "",
                        category: "mens",
                        quality: "premium",
                        price: ""
                    })
                    setImage(null)
                }
                else {
                    alert("Failed")
                }
            }
            else {
                alert("Image upload failed")
            }
        }
        catch (error) {
            console.log("Error:", error)
            alert("Something went wrong")
        }
    }

    return (
        <div className='add-product'>
            <div className="addproduct-itemfield">
                <p>Product Title</p>
                <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='type here' />
            </div>
            <br />
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input value={productDetails.price} onChange={changeHandler} type="text" name="price" placeholder='type here' />
                </div>
                <br />
                <div className="addproduct-itemfield">
                    <p>Product category</p>
                    <select value={productDetails.category} onChange={changeHandler} name="category" className="addproduct-select">
                        <option value="mens">Mens</option>
                        <option value="womens">Womens</option>
                        <option value="gadgets">Gadgets</option>
                    </select>
                </div>
                <br />
                <div className="addproduct-itemfield">
                    <label htmlFor="file-input">
                        <img src={image ? URL.createObjectURL(image) : upload_image} alt="" className='upload-img' />
                    </label>
                    <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
                </div>
                <br />
                <br />
                <button onClick={Add_Product} className='addproduct-bt'>Add</button>
            </div>
        </div>
    )
}
export default AddProduct