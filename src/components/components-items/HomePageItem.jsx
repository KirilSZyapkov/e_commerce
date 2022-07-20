import React from 'react';

function HomePageItem() {
  return (
        <li className="className1">
            <div className="arrival-overlay">
                                            
                <img src="images/arrival1.jpg" alt=""/>
                <img src="images/sale.png" alt="" className="sale"/>
                <img src="images/out.png" alt="" className="out"/>
                <img src="images/new.png" alt="" className="new"/>
                    <div className="arrival-mask">
                        <a href="#" className="medium-button button-red add-cart">Add to Cart</a>
                        <a href="#" className="wishlist"><i className="fa fa-heart"></i> Add to Wishlist</a>
                        {/* <a href="#" className="compare"><i className="fa fa-retweet"></i>Add to Compare</a> */}
                    </div>
            </div>
            <div className="arr-content">
                <Link to='/catalog/id'><p>Brown Coat</p></Link>
                    <ul>
                        <li><span className="low-price">$899.00</span></li>
                    </ul>
                                            
                    <div className="stars"><img src="images/stars.png" alt=""/></div>
            </div>
        </li>
  )
}

export default HomePageItem;