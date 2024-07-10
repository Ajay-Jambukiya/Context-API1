import React, { useContext, useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-secondary txt-white">
        <div class="container-fluid">
          <a class="navbar-brand">
            <b>Navbar</b>
          </a>
          <button class="navbar-toggler" type="button">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to={"/"} class="nav-link active">
                  Home
                </Link>
              </li>
              {/* <li class="nav-item">
                <Link to={"/"} class="nav-link">
                  Product
                </Link>
              </li> */}
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
              />
              {/* <button class="btn btn-primary" type="submit">
                Search
              </button> */}
            </form>
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to={"cart"} class="nav-link active" aria-current="page">
                  <FaCartShopping size={25} />
                  <span
                    class="badge rounded-pill bg-warning text-dark"
                    style={{ position: "relative", top: "-10px" }}
                  >
                    0
                  </span>
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/register"} class="nav-link active">
                  Register
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/login"} class="nav-link">
                  Login
                </Link>
              </li>
              {/* <li class="nav-item">
                  <Link to={"/login"} class="nav-link">
                    Logout
                  </Link>
                </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
