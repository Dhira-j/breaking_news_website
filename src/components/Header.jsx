// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <header>
      <div
        className="text-center d-flex align-items-center justify-content-center"
        style={{ backgroundColor: "rgb(136, 8, 8)" }}
      >
        <span className="text-light fw-bold fs-1 me-2">Breaking news</span>
        <img
          src="https://png.pngtree.com/png-vector/20221117/ourmid/pngtree-breaking-news-vector-icon-illustration-logo-design-png-image_6461447.png"
          alt="Breaking"
          width={100}
        />
      </div>

      <nav className="btn-group d-flex flex-wrap w-100">
        <Link to="/" className="btn btn-lg btn-danger">
          Home
        </Link>

        <Link to="/tazakhabar" className="btn btn-lg btn-primary">
          Tazakhabar
        </Link>

        <Link to="/khel" className="btn btn-lg btn-primary">
          Khel
        </Link>

        <Link to="/bollywood" className="btn btn-lg btn-primary">
          Bollywood
        </Link>

        <Link to="/politics" className="btn btn-lg btn-primary">
          Politics
        </Link>

        <Link to="/world" className="btn btn-lg btn-primary">
          World
        </Link>

        <Link to="/about" className="btn btn-lg btn-primary">
          About
        </Link>

        <Link to="/contact" className="btn btn-lg btn-primary">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
