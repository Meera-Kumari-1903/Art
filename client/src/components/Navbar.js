import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserToken, logoutUserFunction } from "../utils/LoginUtil";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    // Check if user is logged in
    setIsLoggedIn(!!getUserToken());

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    await logoutUserFunction();
    setIsLoggedIn(false);
    navigate("/login"); 
  };

  return (
    <nav
      className={`navbar navbar-expand-md fixed-top ${
        isScrolled ? "bg-light shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <i className="bi bi-palette-fill text-primary me-2 fs-3"></i>
          <span className="fw-bold fs-4 bg-gradient bg-opacity-75 text-transparent">
            ArtCulture
          </span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list fs-2"></i>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link fw-medium text-dark" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium text-dark" to="/galary">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium text-dark" to="/culture">
                Culture
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium text-dark" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item ms-3">
              {isLoggedIn ? (
                <button className="btn btn-danger" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/login")}
                >
                  Join Us
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
