import React from "react";

function Footer() {
  return (
    <footer>
      <div className="inner-footer">
        <div className="container">
          <div className="row">
            <div className="grid">
              <div className="col-md-3-footer">
                <div className="f-about">
                  <h1>ABOUT SHOP</h1>
                  <p className="mb20">
                    We possess within us two minds. So far I have written only
                    of the conscious mind.We further know that the subconscious
                    has recorded every event. This is just perfect theme.
                  </p>
                  <h1>NEWSLETTER</h1>
                  <form action="#">
                    <input type="text" placeholder="Your e-mail" />
                    <input type="submit" value="" />
                  </form>
                </div>
              </div>

              <div className="col-md-3-footer">
                <div className="gettouch">
                  <h1>Get in Touch with us</h1>
                  <p>
                    <i className="fa fa-home"></i> Philippines, PO Box 6200
                    Talay st. 65, SweetPick inc.
                  </p>
                  <p>
                    <i className="fa fa-phone"></i> +63 918 4084 694
                  </p>
                  <p className="mb20">
                    <i className="fa fa-envelope"></i> samokhinteam@gmail.com
                  </p>
                  <h1>FIND US ON</h1>
                  <ul className="footer-socials">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="last-div">
          <div className="row">
            <div className="copyright">© SweetPick Elegant Shop</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
