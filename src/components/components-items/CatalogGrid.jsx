import React from "react";

function CatalogGrid({
  id,
  name,
  sizes,
  color,
  material,
  price,
  image,
  category,
  sale,
  outOfStock,
  brands,
  newItem,
}) {
  console.log(outOfStock);
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
                <p className="medium-button button-red">Add to Cart</p>
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
          <p>{name}</p>
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
