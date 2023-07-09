import React, { useState } from 'react'
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
function Header() {

  const [toggle, setToggle] = useState(false);
  const [width, setWidth] = useState({ icon: "bi-list", display: "navbar" });

  const showMenu = () => {
    setToggle(!toggle);
    if (toggle === true) {
      setWidth({ icon: "bi-list", display: "navbar" })
    } else {
      setWidth({ icon: "bi-x", display: "navbar navbar-mobile" })

    }
  };

  return (
      <>
      <div className="header-bot">
        <div className="container">
          <div className="row header-bot_inner_wthreeinfo_header_mid">
            <div className="col-md-3 logo_agile">
              <h1 className="text-center">
                <a href="index.html" className="font-weight-bold font-italic">
                  <img src={"/web/images/logo2.png"} alt=" " className="img-fluid" />Mega Shpos
                </a>
              </h1>
            </div>
            <div className="col-md-9 header mt-4 mb-md-0 mb-4">
              <div className="row">
                <div className="col-10 agileits_search">
                  <form className="form-inline" action="#" method="post">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" required />
                      <button className="btn my-2 my-sm-0" type="submit">Search</button>
                  </form>
                </div>
                <div className="col-2 top_nav_right text-center mt-sm-0 mt-2">
                  <div className="wthreecartaits wthreecartaits2 cart cart box_1">
                  <span id="countProducts">2</span>
                    <form action="#" method="post" className="last">
                      <input type="hidden" name="cmd" value="_cart" />
                        <input type="hidden" name="display" value="1" />
                         <button className="btn w3view-cart" type="submit" name="submit" value="" >
                         <i class="fas fa-shopping-cart"></i>
                          </button>
                        </form>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-inner">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="agileits-navi_search">
                <form action="#" method="post">
                  <select id="agileinfo-nav_search" name="agileinfo_search" className="border" required="">
                    <option value="">All Categories</option>
                    <option value="Televisions">Televisions</option>
                    <option value="Headphones">Headphones</option>
                    <option value="Computers">Computers</option>
                    <option value="Appliances">Appliances</option>
                    <option value="Mobiles">Mobiles</option>
                    <option value="Fruits &amp; Vegetables">Tv &amp; Video</option>
                    <option value="iPad & Tablets">iPad & Tablets</option>
                    <option value="Cameras & Camcorders">Cameras & Camcorders</option>
                    <option value="Home Audio & Theater">Home Audio & Theater</option>
                  </select>
                </form>
              </div>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto text-center mr-xl-5">
                  <li className="nav-item active mr-lg-2 mb-lg-0 mb-2">
                    <a className="nav-link" href="index.html">Home
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Electronics
                    </a>
                    <div className="dropdown-menu">
                      <div className="agile_inner_drop_nav_info p-4">
                        <h5 className="mb-3">Mobiles, Computers</h5>
                        <div className="row">
                          <div className="col-sm-6 multi-gd-img">
                            <ul className="multi-column-dropdown">
                              <li>
                                <a href="product.html">All Mobile Phones</a>
                              </li>
                              <li>
                                <a href="product.html">All Mobile Accessories</a>
                              </li>
                              <li>
                                <a href="product.html">Cases & Covers</a>
                              </li>
                              <li>
                                <a href="product.html">Screen Protectors</a>
                              </li>
                              <li>
                                <a href="product.html">Power Banks</a>
                              </li>
                              <li>
                                <a href="product.html">All Certified Refurbished</a>
                              </li>
                              <li>
                                <a href="product.html">Tablets</a>
                              </li>
                              <li>
                                <a href="product.html">Wearable Devices</a>
                              </li>
                              <li>
                                <a href="product.html">Smart Home</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-6 multi-gd-img">
                            <ul className="multi-column-dropdown">
                              <li>
                                <a href="product.html">Laptops</a>
                              </li>
                              <li>
                                <a href="product.html">Drives & Storage</a>
                              </li>
                              <li>
                                <a href="product.html">Printers & Ink</a>
                              </li>
                              <li>
                                <a href="product.html">Networking Devices</a>
                              </li>
                              <li>
                                <a href="product.html">Computer Accessories</a>
                              </li>
                              <li>
                                <a href="product.html">Game Zone</a>
                              </li>
                              <li>
                                <a href="product.html">Software</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Appliances
                    </a>
                    <div className="dropdown-menu">
                      <div className="agile_inner_drop_nav_info p-4">
                        <h5 className="mb-3">TV, Appliances, Electronics</h5>
                        <div className="row">
                          <div className="col-sm-6 multi-gd-img">
                            <ul className="multi-column-dropdown">
                              <li>
                                <a href="product2.html">Televisions</a>
                              </li>
                              <li>
                                <a href="product2.html">Home Entertainment Systems</a>
                              </li>
                              <li>
                                <a href="product2.html">Headphones</a>
                              </li>
                              <li>
                                <a href="product2.html">Speakers</a>
                              </li>
                              <li>
                                <a href="product2.html">MP3, Media Players & Accessories</a>
                              </li>
                              <li>
                                <a href="product2.html">Audio & Video Accessories</a>
                              </li>
                              <li>
                                <a href="product2.html">Cameras</a>
                              </li>
                              <li>
                                <a href="product2.html">DSLR Cameras</a>
                              </li>
                              <li>
                                <a href="product2.html">Camera Accessories</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-6 multi-gd-img">
                            <ul className="multi-column-dropdown">
                              <li>
                                <a href="product2.html">Musical Instruments</a>
                              </li>
                              <li>
                                <a href="product2.html">Gaming Consoles</a>
                              </li>
                              <li>
                                <a href="product2.html">All Electronics</a>
                              </li>
                              <li>
                                <a href="product2.html">Air Conditioners</a>
                              </li>
                              <li>
                                <a href="product2.html">Refrigerators</a>
                              </li>
                              <li>
                                <a href="product2.html">Washing Machines</a>
                              </li>
                              <li>
                                <a href="product2.html">Kitchen & Home Appliances</a>
                              </li>
                              <li>
                                <a href="product2.html">Heating & Cooling Appliances</a>
                              </li>
                              <li>
                                <a href="product2.html">All Appliances</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item mr-lg-2 mb-lg-0 mb-2">
                    <a className="nav-link" href="about.html">About Us</a>
                  </li>
                  <li className="nav-item mr-lg-2 mb-lg-0 mb-2">
                    <a className="nav-link" href="product.html">New Arrivals</a>
                  </li>
                  <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Pages
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="product.html">Product 1</a>
                      <a className="dropdown-item" href="product2.html">Product 2</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="single.html">Single Product 1</a>
                      <a className="dropdown-item" href="single2.html">Single Product 2</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="checkout.html">Checkout Page</a>
                      <a className="dropdown-item" href="payment.html">Payment Page</a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </>
      )
  
}

      export default Header