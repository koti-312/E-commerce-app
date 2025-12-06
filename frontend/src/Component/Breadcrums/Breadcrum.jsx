import React from 'react';
import './Breadcrum.css';

const Breadcrum = ({ product }) => {

  if (!product) {
    return <div className="breadcrum"><b>HOME | SHOP</b></div>;
  }

  return (
    <div className="breadcrum">
      <b>
        HOME | SHOP | {product.category} | {product.name}
      </b>
    </div>
  );
}

export default Breadcrum;
