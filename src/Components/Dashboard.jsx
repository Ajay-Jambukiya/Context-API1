import React, { useContext, useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Login from "./Login";
import { DataContext } from "./Context";

const Dashboard = () => {
  let [username, setUsername] = useState("");
  let navigate = useNavigate();
  const context = useContext(DataContext);

  let handlelogout = () => {
    localStorage.clear();
    navigate("/");
  };
  useEffect(() => {
    let email = localStorage.getItem("email");
    setUsername(email.slice(0, -10));
  }, []);

  return (
    <div>
      {localStorage.getItem("role") == "user" ? (
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
                  <Link to={"/dash"} class="nav-link active">
                    Home
                  </Link>
                </li>
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
                  <Link to={"/cart"} class="nav-link active" aria-current="page">
                    <FaCartShopping size={25} />
                    <span
                      class="badge rounded-pill bg-warning text-dark"
                      style={{ position: "relative", top: "-10px" }}
                    >
                      {context.cart.length}
                    </span>
                  </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link">
                    <b>
                      <span>Welcome {username}</span>
                    </b>
                  </a>
                </li>
                <li class="nav-item">
                  <button to={"/"} class="nav-link" onClick={handlelogout}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Outlet/>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Dashboard;
