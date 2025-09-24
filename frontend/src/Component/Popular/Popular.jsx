import React, { useEffect, useState } from 'react'
import './Popular.css';
import Item from '../Item/Item';
import data_product  from '../../assets/data';
import { data } from 'react-router-dom';

 const Popular = () => {

  const [popularProducts,setPopularProducts] =useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/popular')
    .then((response)=>response.json())
    .then((data)=>setPopularProducts(data));
  },[])

  return (
    <div className='popular'>
        <h1>Popular in Mens & Womens</h1>

        <div className="popular-item">
            {popularProducts.map((item,i)=>{
            return <Item key={i} id={item.id}name={item.name} category={item.category} image={item.image} quality={item.quality} price={item.price}/>
            })}
        </div>

    </div>
  )
}

export default Popular;