import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold fs-4">
          E MART
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          <div className="buttons">
            <Link to="/login" className="btn btn-outline-dark">
              <i className="fa fa-sign-in me-1"></i>Login
            </Link>
            <Link to="/register" className="btn btn-outline-dark ms-2">
              <i className="fa fa-user-plus me-1"></i>Register
            </Link>
            <Link to="/cart" className="btn btn-outline-dark ms-2">
              <i className="fa fa-shopping-cart-in me-1"></i>Cart (
              {state.length})
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
