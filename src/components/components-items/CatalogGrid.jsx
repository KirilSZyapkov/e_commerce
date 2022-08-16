import React from "react";
import { Link } from "react-router-dom";

import { useShoppingCart } from "../../context/ShoppingCartContext";

function CatalogGrid({ id, name, price, image, sale, outOfStock, newItem }) {
  const { increaseCartQuantity } = useShoppingCart();

  return (
    <>
      <div className="col-md-4 grid-item mb30">
        <div className="arrival-overlay">
          <img src={image} alt={name} />
          {outOfStock ? (
            ""
          ) : (
            <>{sale && <img src="images/sale.png" alt="" className="sale" />}</>
          )}
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
              {/* <a href="#" className="compare">
              <i className="fa fa-retweet"></i>Add to Compare
            </a> */}
            </div>
          </div>
        </div>
        <div className="arr-content">
          <Link to={`/catalog/${id}`}>{name}</Link>
          <ul>
            <li>
              <span className="low-price">${price}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CatalogGrid;
