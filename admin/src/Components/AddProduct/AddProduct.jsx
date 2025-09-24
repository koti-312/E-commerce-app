import React, { useState } from 'react'
import './AddProduct.css';
import upload_image from '../../assets/upload.png'

const AddProduct = () => {

    const[image,setImage]=useState(null);
    const[productDetails,setProductDetails]=useState({
        name:"",
        image:"",
        category:"mens",
        quality:"premium",
        price:"",
    })
    const imageHandler=(e)=>{
        setImage(e.target.files[0]);
    }
    const changeHandler =(e)=>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }

    const Add_Product = async() =>{
        console.log(productDetails);
        let responseData;
        let product=productDetails;

        let formData= new FormData();
        formData.append('product',image);
        
        await fetch("http://localhost:4000/upload",{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
             body:formData,

        }).then((resp)=>resp.json())
          .then((data)=>{responseData=data});

        if(responseData.success)
            {
            product.image=responseData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert("Product Added"):alert("Failed")
            })
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
                        <img src={image?URL.createObjectURL(image):upload_image} alt="" className='upload-img' />
                    </label>
                    <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />

                </div>
                <br />
                <br />
                <button onClick={()=>{Add_Product()}} className='addproduct-bt'>Add</button>
            </div>
        </div>
    )
}

export default AddProduct; 