import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  const productLink = props.homeProduct? `/home-product/${props.id}`: `/product/${props.id}`

  return (

    <div className='item'>
      <Link to={productLink}>
        <img onClick={() => window.scroll({ top: 0, behavior: "smooth" })} src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>

      <div className="item-prices">
        ${props.price}
      </div>
    </div>
  )
}

export default Item