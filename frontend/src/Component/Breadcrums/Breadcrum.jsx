import React from 'react';
import './Breadcrum.css';

const Breadcrum = (props) => {

    const {product}=props;

  return (
    <div className="breadcrum">
    <b>HOME | SHOP | {product.category} | {product.name} </b></div>
  )
}

export default Breadcrum;