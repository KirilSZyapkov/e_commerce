import React, { useState, useEffect } from "react";
import CatalogGrid from "./components-items/CatalogGrid";
import CatalogList from "./components-items/CatalogList";

import products from "../data/products.json";

function Catalog() {
  const [productsList, setProductsList] = useState(products);
  const [displayProducts, setDisplayProducts] = useState("grid");
  const [activeDisplay, setActiveDisplay] = useState("grid");
  const [productsPerPage, setProductsPerPage] = useState(12);
  const [startIndex, setStartIndex] = useState(0);
  const [itemToShow, setItemToShow] = useState(
    products.slice(startIndex, productsPerPage)
  );
  const [selectedPage, setSelectedPage] = useState(1);
  const [sortType, setSortType] = useState("");
  const [categories, setCategories] = useState("all");
  const [totalPages, setTotalPages] = useState(
    Math.ceil(products.length / productsPerPage)
  );
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const endIndex = productsPerPage * selectedPage;
    let items = products.slice();

    if (categories === "women") {
      items = products.filter((i) => i.category === "women");
      if (items.length >= productsPerPage) {
        setTotalPages(Math.ceil(items.length / productsPerPage));
      } else {
        setTotalPages(1);
      }
    } else if (categories === "men") {
      items = products.filter((i) => i.category === "men");
      if (items.length >= productsPerPage) {
        setTotalPages(Math.ceil(items.length / productsPerPage));
      } else {
        setTotalPages(1);
      }
    }
    setProductsList(items);

    const list = items.slice(startIndex, endIndex);
    if (sortType === "By Name") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === "High To Low") {
      list.sort((a, b) => Number(b.price) - Number(a.price));
    } else if (sortType === "Low To High") {
      list.sort((a, b) => Number(a.price) - Number(b.price));
    }
    setItemToShow(list);
  }, [startIndex, selectedPage, sortType, productsPerPage, categories]);

  // to Fix filtering prages....
  useEffect(() => {
    setTotalPages(Math.ceil(productsList.length / productsPerPage));
  }, [productsPerPage, productsList]);

  useEffect(() => {
    let pages = [];
    for (let a = 1; a <= totalPages; a++) {
      pages.push(a);
    }
    setPages(pages);
  }, [totalPages, productsPerPage]);

  function chageView(e) {
    const target = e.target.parentElement.id;

    if (target === "grid") {
      setActiveDisplay("grid");
      setDisplayProducts("grid");
    } else {
      setActiveDisplay("list");
      setDisplayProducts("list");
    }
  }

  function changePage(e) {
    const num = Number(e.target.textContent);

    if (num === 1) {
      setSelectedPage(1);
      setStartIndex(0);
    } else {
      setSelectedPage(num);
      setStartIndex((num - 1) * productsPerPage);
    }
  }

  function changeProductPerPage(e) {
    setSelectedPage(1);
    setStartIndex(0);
    changePage(e);
  }

  return (
    <div id="content">
      <div className="shop-main container">
        <div className="row">
          <div className="col-md-3">
            <aside className="left-shop">
              <div className="shop-categories mb30">
                <h1 className="asidetitle">Categories</h1>

                <ul>
                  <li>
                    <p
                      onClick={(e) => {
                        setCategories(e.target.firstChild.data.toLowerCase());
                        changeProductPerPage();
                      }}
                      className="categories-type"
                    >
                      All <span>({products.length})</span>
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={(e) => {
                        setCategories(e.target.firstChild.data.toLowerCase());
                        changeProductPerPage();
                      }}
                      className="categories-type"
                    >
                      Women{" "}
                      <span>
                        ({products.filter((i) => i.category === "women").length}
                        )
                      </span>
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={(e) => {
                        setCategories(e.target.firstChild.data.toLowerCase());
                        changeProductPerPage();
                      }}
                      className="categories-type"
                    >
                      Men{" "}
                      <span>
                        ({products.filter((i) => i.category === "men").length})
                      </span>
                    </p>
                  </li>
                </ul>
              </div>

              <div className="shop-price mb30">
                <h1 className="asidetitle">Price</h1>

                <p>
                  <input
                    type="range"
                    min="10"
                    max="5000"
                    defaultValue="100"
                    id="amount"
                  />
                </p>

                <div id="slider-range">100</div>
              </div>

              <div className="brands mb30">
                <h1 className="asidetitle">Colors</h1>

                <form action="#">
                  <ul>
                    <li>
                      <input type="checkbox" value="Brand" />
                      White <span>(15)</span>
                    </li>
                    <li>
                      <input type="checkbox" value="Brand" />
                      Black <span>(31)</span>
                    </li>
                    <li>
                      <input type="checkbox" value="Brand" />
                      Grey <span>(89)</span>
                    </li>
                    <li>
                      <input type="checkbox" value="Brand" />
                      Red <span>(95)</span>
                    </li>
                    <li>
                      <input type="checkbox" value="Brand" />
                      Blue <span>(26)</span>
                    </li>
                  </ul>
                </form>
              </div>

              <div className="brands mb30">
                <h1 className="asidetitle">Sizes</h1>

                <form action="#">
                  <ul>
                    <li>
                      <input type="checkbox" value="Brand" />S <span>(15)</span>
                    </li>
                    <li>
                      <input type="checkbox" value="Brand" />M <span>(31)</span>
                    </li>
                    <li>
                      <input type="checkbox" value="Brand" />L <span>(89)</span>
                    </li>
                    <li>
                      <input type="checkbox" value="Brand" />
                      XL <span>(95)</span>
                    </li>
                  </ul>
                </form>
              </div>

              <div className="brands mb30">
                <h1 className="asidetitle">Brands</h1>

                <form action="#">
                  <ul>
                    <li>
                      <input type="checkbox" value="Brand" />
                      Adidas <span>(15)</span>
                    </li>
                    <li>
                      <input type="checkbox" value="Brand" />
                      Nike <span>(31)</span>
                    </li>
                    <li>
                      <input type="checkbox" value="Brand" />
                      Puma <span>(89)</span>
                    </li>
                    <li>
                      <input type="checkbox" value="Brand" />
                      Armani <span>(95)</span>
                    </li>
                  </ul>
                </form>
              </div>

              <div className="tags mb10">
                <h1 className="asidetitle">Tags</h1>

                <ul>
                  <li>
                    <a href="#">E-commerce</a>
                  </li>
                  <li>
                    <a href="#">Elegant</a>
                  </li>
                  <li>
                    <a href="#">Store</a>
                  </li>
                  <li>
                    <a href="#">Clean</a>
                  </li>
                  <li>
                    <a href="#">Modern</a>
                  </li>
                </ul>
                <div className="clear"></div>
              </div>
            </aside>
          </div>

          <div className="col-md-9">
            <div className="shop-content">
              <div className="toolbar">
                <div className="sort-select">
                  <label>Sort by</label>
                  <select className="selectBox">
                    <option
                      onClick={(e) => {
                        setSortType(e.target.textContent);
                      }}
                    >
                      Default Sorting
                    </option>
                    <option
                      onClick={(e) => {
                        setSortType(e.target.textContent);
                      }}
                    >
                      By Name
                    </option>
                    <option
                      onClick={(e) => {
                        setSortType(e.target.textContent);
                      }}
                    >
                      High To Low
                    </option>
                    <option
                      onClick={(e) => {
                        setSortType(e.target.textContent);
                      }}
                    >
                      Low To High
                    </option>
                  </select>
                </div>
                <div className="sort-select">
                  <label>Show</label>
                  <select className="selectBox">
                    <option
                      onClick={() => {
                        setProductsPerPage(12);
                        changeProductPerPage();
                      }}
                    >
                      12
                    </option>
                    <option
                      onClick={() => {
                        setProductsPerPage(16);
                        changeProductPerPage();
                      }}
                    >
                      16
                    </option>
                    <option
                      onClick={() => {
                        setProductsPerPage(18);
                        changeProductPerPage();
                      }}
                    >
                      18
                    </option>
                  </select>
                </div>
                <div className="lg-panel htabs">
                  <span>View</span>
                  <button
                    onClick={(e) => chageView(e)}
                    id="grid"
                    className={`grid-btn ${
                      activeDisplay === "grid" ? "active" : ""
                    }`}
                  >
                    <i className="fa fa-th"></i>
                  </button>
                  <button
                    onClick={(e) => chageView(e)}
                    id="list"
                    className={`grid-btn ${
                      activeDisplay === "list" ? "active" : ""
                    }`}
                  >
                    <i className="fa fa-th-list"></i>
                  </button>
                </div>
              </div>

              {displayProducts === "grid" ? (
                <div className="row shop-grid">
                  {itemToShow.map((p) => (
                    <CatalogGrid key={p.id} {...p} />
                  ))}
                </div>
              ) : (
                <div className="shop-list">
                  {itemToShow.map((p) => (
                    <CatalogList key={p.id} {...p} />
                  ))}
                </div>
              )}

              <div className="shop-pag">
                <p className="pag-p">
                  Items{" "}
                  <span>
                    {startIndex || 1} to{" "}
                    {productsPerPage * selectedPage > products.length
                      ? products.length
                      : productsPerPage * selectedPage}
                  </span>{" "}
                  of {products.length} Total
                </p>

                <div className="right-pag">
                  <div className="pagenation clearfix">
                    <ul>
                      {pages.map((item, i) => (
                        <li key={i} className="pagenation-item">
                          <p
                            className="pagenation-item"
                            onClick={(e) => changePage(e)}
                          >
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="clear"></div>
                </div>

                <div className="clear"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="partners">
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <a href="#">
                <img src="upload/partners1.png" alt="" />
              </a>
            </div>
            <div className="col-sm-2">
              <a href="#">
                <img src="upload/partners2.png" alt="" />
              </a>
            </div>
            <div className="col-sm-2">
              <a href="#">
                <img src="upload/partners3.png" alt="" />
              </a>
            </div>
            <div className="col-sm-2">
              <a href="#">
                <img src="upload/partners4.png" alt="" />
              </a>
            </div>
            <div className="col-sm-2">
              <a href="#">
                <img src="upload/partners5.png" alt="" />
              </a>
            </div>
            <div className="col-sm-2">
              <a href="#">
                <img src="upload/partners6.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
