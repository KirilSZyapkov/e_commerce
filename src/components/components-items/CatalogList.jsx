import React from "react";

function CatalogList() {
  return (
    <div className="grid-item2 mb30">
      <div className="row">
        <div className="arrival-overlay col-md-4">
          <img src="images/arrival1.jpg" alt="" />
        </div>

        <div className="col-md-8">
          <div className="list-content">
            <h1>Yellow sweater</h1>

            <div className="list-midrow">
              <ul>
                <li>
                  <span className="high-price">$1899.00</span>
                </li>
                <li>
                  <span className="low-price">$899.00</span>
                </li>
              </ul>

              <img src="images/stars.png" alt="" />

              {/* <div className="reviews">
                <a href="#">21 Rewiew(s)</a> / <a href="#">Add a Review</a>
              </div> */}
              <div className="clear"></div>
            </div>

            <p className="list-desc">
              We possess within us two minds. So far I have written only of the
              conscious mind.. Our subconscious mind contains such power and
              complexity that it literally staggers the imagination.
            </p>

            <div className="list-downrow">
              <p href="#" className="medium-button button-red add-cart">
                Add to Cart
              </p>

              <ul>
                <li>
                  <p
                    href="#"
                    className="medium-button button-red add-cart wishlist"
                  >
                    <i className="fa fa-heart"></i> Add to Wishlist
                  </p>
                </li>
                {/* <li>
                  <a href="#" className="compare">
                    <i className="fa fa-retweet"></i>Add to Compare
                  </a>
                </li> */}
              </ul>
              <div className="clear"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatalogList;
