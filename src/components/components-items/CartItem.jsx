import React from 'react';
import {Link} from 'react-router-dom';

import products from "../../data/products.json";

function CartItem({
  id,
  quantity
}) {

  const item = products.find(i => i.id === id);

  if (item === null) return null;

  return (
    <div className="hover-box">

        <Link href="/"><img src="../../images/hover1.png" alt="" className="left-hover" /></Link>
            <div className="hover-details">
                <p>{item.name}</p>
                <span>$ {item.price}</span>
                    <div className="quantity">Quantity: {quantity}</div>
            </div>

        <a href="/" className="right-hover"><img src="../../images/delete.png" alt="" />X</a>

        <div className="clear"></div>

    </div>
  )
}

export default CartItem