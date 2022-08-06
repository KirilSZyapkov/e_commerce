import React from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";

function HomePageItem({ id, name, price, image, sale, outOfStock, newItem }) {
  const { increaseCartQuantity } = useShoppingCart();

  return (
    <li className="className1">
      <div className="arrival-overlay">
        <img src={image} alt="" />
        {sale && <img src="images/sale.png" alt="" className="sale" />}
        {outOfStock && <img src="images/out.png" alt="" className="out" />}
        {newItem && <img src="images/new.png" alt="" className="new" />}
        <div className="arrival-mask">
          <div className="buttons-group">
            {!outOfStock && (
              <p
                onClick={() => increaseCartQuantity(id)}
                className="medium-button button-red"
              >
                Add to Cart
              </p>
            )}
            <p className="wishlist">
              <i className="fa fa-heart"></i> Add to Wishlist
            </p>
            {/* <a href="#" className="compare"><i className="fa fa-retweet"></i>Add to Compare</a> */}
          </div>
        </div>
      </div>
      <div className="arr-content">
        <Link to={`/catalog/${id}`}>
          <p>{name}</p>
        </Link>
        <ul>
          <li>
            <span className="low-price">${price}</span>
          </li>
        </ul>

        <div className="stars">
          <img src="images/stars.png" alt="" />
        </div>
      </div>
    </li>
  );
}

export default HomePageItem;
