import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

import CartItem from "./components-items/CartItem";

import products from "../data/products.json";

function HeaderMenu() {
  const { cartQuantity, cartItems } = useShoppingCart();

  return (
    <header className="clearfix">
      <div className="top-line">
        <div className="nocontainer">
          <div className="left-line">
            {/* <ul className="lang clearfix">
                            <li><span>Language: </span> <a href="/">Eng </a>
                                <ul className="drop-down2">
                                    <li><a href="/">Fra</a></li>
                                    <li><a href="/">Rus</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="curr clearfix">
                            <li><span>Currency: </span><a href="/">Usd</a>
                                <ul className="drop-down2">
                                    <li><a href="/">GPB</a></li>
                                    <li><a href="/">Eur</a></li>
                                </ul>
                            </li>
                        </ul> */}

            <div className="mobile-a">
              <a href="#login-box" className="login-window">
                <i className="fa fa-user"></i>
              </a>
              <a href="/">
                <i className="fa fa-heart"></i>
              </a>
            </div>
          </div>
          <div className="right-line clearfix">
            <ul>
              <li>
                <Link to="/my-account">My Account</Link>
              </li>
              <li>
                <Link to="/my-wishlist">My Wishlist</Link>
              </li>
              <li>
                <Link to="/checkout">Checkout</Link>
              </li>
              <li>
                <a href="#login-box" className="login-window">
                  Login
                </a>
              </li>
            </ul>

            <div id="login-box" className="login-popup">
              <a href="/" className="close">
                <img
                  src="../../images/delete.png"
                  className="btn_close"
                  title="Close Window"
                  alt="Close"
                />
              </a>
              <form method="post" className="signin">
                <fieldset className="textbox">
                  <h4 className="login-title">LOGIN </h4>
                  <input placeholder="Email*" />
                  <input placeholder="Password*" />
                  <input type="checkbox" name="signed" value="Stayin" />{" "}
                  <span className="signed">Remember Me</span>
                  <button className="submit a" type="a">
                    Login
                  </button>
                  <p>
                    <a className="recover" href="/">
                      Sign up
                    </a>
                    <a href="/" className="forgot2">
                      Forgot password?
                    </a>
                  </p>
                  <div className="clear"></div>
                  <div className="log-socials">
                    <h6>LOGIN WITH</h6>
                    <ul>
                      <li>
                        <a href="/">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                    </ul>

                    <div className="clear"></div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </div>

      <div className="upper-header container">
        <div className="nocontainer">
          {/* <div className="search-input">
            <form>
              <input type="text" placeholder="Type and Search" />
              <input type="submit" value="" />
            </form>
          </div> */}

          <div className="logo">
            <Link to="/">
              <img src="images/logo.png" alt="" />
            </Link>
          </div>

          {cartQuantity !== 0 && (
            <div className="cart">
              <a href="/" className="cartmain">
                {" "}
                Cart{" "}
              </a>
              <div className="card-icon">
                <img src="images/cart.png" alt="" />
                <div className="shop-items">{cartQuantity}</div>
              </div>
              <div className="hover-cart">
                {cartItems.map((item) => (
                  <CartItem key={item.id} {...item} products={products} />
                ))}

                <div className="subtotal">
                  Cart Subtotal:{" "}
                  <span>
                    ${" "}
                    {cartItems
                      .map((item) => {
                        const foundItem = products.find(
                          (i) => i.id === item.id
                        );
                        if (foundItem === undefined) return null;
                        return foundItem.price * item.quantity;
                      })
                      .reduce((prevItem, nextItem) => prevItem + nextItem, 0)}
                  </span>
                </div>

                <button className="viewcard"> View Cart</button>
                <button className="proceedcard"> Proceed</button>
              </div>
            </div>
          )}

          <div className="clear"></div>
        </div>
      </div>

      <div className="container">
        <div className="nocontainer bannerborder">
          <nav id="nav">
            <ul id="navlist" className="sf-menu clearfix">
              <li>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/catalog">
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/accesories">
                  Accesories
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/about-us">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/blog">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/contact-us">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default HeaderMenu;
