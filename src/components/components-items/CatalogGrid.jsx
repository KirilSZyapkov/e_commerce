import React from 'react';

function CatalogGrid() {
  return (
	<>

		<div class="col-md-4 grid-item mb30">
			<div class="arrival-overlay">
				<img src="upload/arrival1.jpg" alt=""/>
				<img src="images/sale.png" alt="" className="sale"/>
				<img src="images/out.png" alt="" className="out"/>
				<img src="images/new.png" alt="" className="new"/>
					<div class="arrival-mask">
						<a href="#" class="medium-button button-red add-cart">Add to Cart</a>
						<a href="#" class="wishlist"><i class="fa fa-heart"></i> Add to Wishlist</a>
						<a href="#" class="compare"><i class="fa fa-retweet"></i>Add to Compare</a>
					</div>
			</div>
			<div class="arr-content">
				<p>Brown Coat</p>
					<ul>
						<li><span class="high-price">$1899.00</span></li>
						<li><span class="low-price">$899.00</span></li>
					</ul>
			</div>
		</div>

	</>
  )
}

export default CatalogGrid;