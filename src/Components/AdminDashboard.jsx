import React, { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Login from "./Login";

const AdminDashboard = () => {
  let [username, setUsername] = useState("");
  let navigate = useNavigate();

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
      {localStorage.getItem("role") == "admin" ? (
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
                  <div class="dropdown">
                    <Link
                      class="btn dropdown-toggle"
                      type="button"
                      id="triggerId"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Product
                    </Link>
                    <div class="dropdown-menu" aria-labelledby="triggerId">
                      <a class="dropdown-item">
                        <Link to="addproduct" class="nav-link">
                          Add Product
                        </Link>
                      </a>
                      <a>
                        <hr class="dropdown-divider" />
                      </a>
                      <a class="dropdown-item">
                        <Link to="viewproduct" class="nav-link">
                          View Product
                        </Link>
                      </a>
                    </div>
                  </div>
                  <li class="nav-item">
                    <Link to="users" class="nav-link">
                      Users
                    </Link>
                  </li>
                </ul>
                <ul class="navbar-nav mb-2 mb-lg-0">
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
          <Outlet />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default AdminDashboard;
