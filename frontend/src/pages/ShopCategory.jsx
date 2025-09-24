import React, { useContext } from 'react'
import './ShopCategory.css';
import { ShopContext } from '../Component/Context/ShopContext';
import Item from '../Component/Item/Item';

const ShopCategory = (props) => {

  const {all_product} =useContext(ShopContext);
  return (
    <div className='Shopcategory'>
      <img src={props.banner} alt="" className='shopcategory-banner'/>
      <div className="shopcategory-indexsort"></div>
      <p>
        <span>Showing 1-12</span> out of 25 products
      </p>
      <div className="shopcategory-sort">
        
      </div>
      <div className="shopcategory-product">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return<Item key={i} id={item.id}name={item.name} category={item.category} quality={item.quality}image={item.image} price={item.price}/>
          }
          else{
            return null; 
          }
        })}
      </div>
    </div>
  
  )
}

export default ShopCategory;