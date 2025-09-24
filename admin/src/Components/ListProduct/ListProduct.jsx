import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import remove from '../../assets/remove.png';

const ListProduct = () => {

  const[allproducts,setAllProducts]=useState([]);

  const fetchInfo= async()=>{
    await fetch('http://localhost:4000/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllProducts(data)});
  }

  useEffect(()=>{
    fetchInfo();

  },[])

  const remove_product = async(id)=>{
    await fetch('http://localhost:4000/removeproduct',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'content-Type':'application/json',
      },
      body:JSON.stringify({id:id})

    })
    await fetchInfo();
  }

  return (
    <div className='list-product'>
      <h1>All Product List</h1>
      <div className="listproduct-format">
        <p>Prodcts</p>
        <p>Title</p>
        <p>Price</p>
        <p>Category</p>
        <p>Quality</p>
        <p>Remove</p>
      </div>
      <div className="list-allproduct">
        <hr />

        {allproducts.map((product,index)=>{

          return <>
          <div key={index} className="listproduct-format  listproduct">
            <img src={product.image} alt="" className="listproduct-icon" />
            <p>{product.name}</p>
            <p>${product.price}</p>
            <p>{product.category}</p>
            <p>{product.quality}</p>
            <img onClick={()=>{remove_product(product.id)}} src={remove} alt="" className="listproduct-remove" />
          
          </div>
          <hr />
          </>
        })}
      </div>
    </div>
  )
}

export default ListProduct;