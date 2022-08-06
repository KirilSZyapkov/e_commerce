import React from "react";
import { Link } from "react-router-dom";

function CartItem({ id, quantity, products }) {
  const item = products.find((i) => i.id === id);

  if (item === null) return null;

  return (
    <div className="hover-box">
      <Link to={`/catalog/${item.id}`}>
        <img src={item.image} alt="" className="left-hover" />
      </Link>
      <div className="hover-details">
        <p>{item.name}</p>
        <span>$ {item.price}</span>
        <div className="quantity">Quantity: {quantity}</div>
      </div>

      <a className="right-hover">
        <img src="../../images/delete.png" alt="" />X
      </a>

      <div className="clear"></div>
    </div>
  );
}

export default CartItem;
