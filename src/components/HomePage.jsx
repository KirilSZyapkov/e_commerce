import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import HomePageItem from './components-items/HomePageItem';

const slide = [
	"images/slider2.jpg",
	"images/slider3.jpg",
	"images/slider5.jpg"
];

const homePageProducts = require('../homePageProducts.json');



function HomePage() {

	console.log(homePageProducts);

	const [curSlide, setCurSlide] = useState(0);

	useEffect(()=>{

		const setTimeOut = setTimeout(()=>{
			setCurSlide(prevCurSlide => {
				prevCurSlide = prevCurSlide + 1;
				if(prevCurSlide > slide.length - 1) {
					prevCurSlide = 0;
				}
				return prevCurSlide;
			})
		}, 8000);

		return ()=>clearTimeout(setTimeOut);

	},[curSlide]);


  return (
    <>

      <div id="content" className="container">
        <div className="slider">
          <div className="fullwidthbanner-container mb30">
            <div style={{"height": "490.2px"}} className="fullwidthbanner" id="intro">
                <img style={{"width": "100%"}} src={slide[curSlide]} data-fullwidthcentering="on" alt="slide" />

				<div className='sliderBaner'></div>
            </div>
          </div>
        </div>

        <div id="content">
						
			<div className="arrivals">
				<div className="container">


					<div className="filters">
						<div className="filter clearfix">
							<div className="holder">
								<ul>
									<li><a href="#" className="active" data-filter="*">All</a></li>
									<li><a href="#" data-filter=".className1"><i className="fa fa-star"></i> NEW ARRIVALS</a></li>
									<li><a href="#" data-filter=".className2"><i className="fa fa-star"></i> BESTSELLERS</a></li>
									<li><a href="#" data-filter=".className3"><i className="fa fa-star"></i> FEATURED <i className="fa fa-star"></i></a></li>
								</ul>
								<div className="holder-border"></div>
							</div>
						</div>
						<div className="clear"></div>

						<div className="demo1 clearfix">
							<ul className="filter-container clearfix">
								{homePageProducts.map(i=><HomePageItem {...i}/>)}
							</ul>
						</div>
					</div>	
				

				</div>

			</div>
			

			<div className="middle-content">
				<div className="container">
					<h1>FREE SHIPPING <span>ALL ORDERS OVER $150</span></h1>
					<div className="middle-shipp">
						<p>We will ship your item within 3 days</p>
						<div className="mid-border"></div>
					</div>
				</div>
			</div>

		
			<div className="blog">
				<div className="container">
					<div className="title">
						<h1><i className="fa fa-star"></i> FROM BLOG <i className="fa fa-star"></i></h1>
						<div className="title-border"></div>
					</div>

					<div className="row">
						<div className="col-md-4">
							<div className="blog-item">
								<div className="blog-img">
									<a href="#"><img src="images/blog1.jpg" alt=""/></a>
									<div className="calendar">
										<p>02</p>
										<span>dec</span>	
									</div>
									<a href="#"><h3>This is blog post title. You can edit.</h3></a>
									<div className="blog-border"></div>
									<p>We possess within us two minds. So far I have written only of the conscious mind.</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="blog-item">
								<div className="blog-img">
									<a href="#"><img src="images/blog2.jpg" alt=""/></a>
									<div className="calendar">
										<p>12</p>
										<span>jan</span>	
									</div>
									<a href="#"><h3>This is blog post with a gallery.</h3></a>
									<div className="blog-border"></div>
									<p>We possess within us two minds. So far I have written only of the conscious mind.</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="blog-item">
								<div className="blog-img">
									<a href="#"><img src="images/blog3.jpg" alt=""/></a>
									<div className="calendar">
										<p>18</p>
										<span>MAr</span>	
									</div>
									<a href="#"><h3>5 reasons to buy this Gorgeous theme.</h3></a>
									<div className="blog-border"></div>
									<p>We possess within us two minds. So far I have written only of the conscious mind.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

      <div class="call-to-action">
			<h1>You will find more items in our store.</h1>
			<p>You can put any important text for your customer here. This is call to action area.</p>
			<Link to="/catalog" class="medium-button button-red">go shopping</Link>
		</div>

		</div>

      

        <div className="banners1 clearfix">

          <div className="row">

            <div className="col-md-8">

              <div className="banner-item clearfix">

                <div className="banner-box mb30">

                  <img src="images/banners1.jpg" alt="" />
                  <div className="coll-text coll-text2">
                    <span>Fit your style</span>
                    <p>Men Suits</p>
                    <Link to='/catalog'>shop now</Link>
                  </div>

                </div>

                <div className="row">

                  <div className="col-sm-6">

                    <div className="banner-box mb30">

                      <img src="images/banners2.jpg" alt="" />
                      <div className="coll-text">
                        <span>Latest Trends</span>
                        <p>Elegant Shoes</p>
                        <Link to='/catalog'>shop now</Link>
                      </div>

                    </div>

                  </div>

                  <div className="col-sm-6">

                    <div className="banner-box mb30">

                      <img src="images/banners3.jpg" alt="" />
                      <div className="coll-text">
                        <span>Comfy & stylish</span>
                        <p>Leather Bags</p>
						<Link to='/catalog'>shop now</Link>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            <div className="col-md-4">
              <div className="banner-item">
                <div className="banner-box mb30">

                  <img src="images/banners4.jpg" alt="" />
                  <div className="coll-text">
                    <span>New Arrivals</span>
                    <p>Women Dresses</p>
                    <Link to='/catalog'>shop now</Link>
                  </div>

                </div>
              </div>
            </div>


          </div>

          <div className="row">
            <div className="col-md-6">

              <div className="banner-item">
                <div className="banner-box mb30">

                  <img src="images/banners5.jpg" alt="" />
                  <div className="coll-text">
                    <span>New Collection</span>
                    <p>Accesories</p>
                    <Link to='/catalog'>shop now</Link>
                  </div>

                </div>
              </div>

            </div>
            <div className="col-md-6">

              <div className="banner-item">
                <div className="banner-box mb30">

                  <img src="images/banners6.jpg" alt="" />
                  <div className="coll-text">
                    <span>Summer Collection</span>
                    <p>Denim Jeans</p>
                    <Link to='/catalog'>shop now</Link>
                  </div>

                </div>
              </div>

            </div>
          </div>


        </div>



        <div className="discount">
          <div className="clearfix">
            <div className="row">
              <div className="col-md-4">
                <div className="red-box">
                  <span>Mega Winter Sales</span>
                  <p>40% off</p>
                  <a href="/" className="learn-more">Learn More</a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="brown-box">
                  <span className="mb20">Get Our Free Updates</span>
                  <input type="text" placeholder="Your e-mail" />
                  <a href="/" className="learn-more">Subscribe</a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="blue-box">
                  <span>All Orders Over $150</span>
                  <p>Free Shipping</p>
                  <a href="/" className="learn-more">Sing Up Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="partners">
          <div className="nocontainer">
            <div className="row">
              <div className="col-sm-2">
                <a href="/"><img src="images/partners1.png" alt="" /></a>
              </div>
              <div className="col-sm-2">
                <a href="/"><img src="images/partners2.png" alt="" /></a>
              </div>
              <div className="col-sm-2">
                <a href="/"><img src="images/partners3.png" alt="" /></a>
              </div>
              <div className="col-sm-2">
                <a href="/"><img src="images/partners4.png" alt="" /></a>
              </div>
              <div className="col-sm-2">
                <a href="/"><img src="images/partners5.png" alt="" /></a>
              </div>
              <div className="col-sm-2">
                <a href="/"><img src="images/partners6.png" alt="" /></a>
              </div>
            </div>
          </div>
        </div>


      </div>

    </>
  )
}

export default HomePage