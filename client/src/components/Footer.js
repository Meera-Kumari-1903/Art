import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-light pt-5"
      style={{
        backgroundColor: "var(--bs-primary)",
      }}
    >
      <div className="container pb-4">
        <div className="row gy-4">
          {/* Brand */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-palette-fill fs-3 me-2"></i>
              <span className="h4 fw-bold mb-0">ArtCulture</span>
            </div>
            <p className="small opacity-75">
              Celebrating the beauty of art and culture from around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-3 col-lg-2">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home" className="text-light text-decoration-none opacity-75 hover-bright">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#gallery" className="text-light text-decoration-none opacity-75 hover-bright">
                  Gallery
                </a>
              </li>
              <li className="mb-2">
                <a href="#culture" className="text-light text-decoration-none opacity-75 hover-bright">
                  Culture
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-light text-decoration-none opacity-75 hover-bright">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="col-6 col-md-3 col-lg-2">
            <h5 className="fw-bold mb-3">Community</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="#" className="text-light text-decoration-none opacity-75 hover-bright">
                  Submit Your Art
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-light text-decoration-none opacity-75 hover-bright">
                  Artists Directory
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-light text-decoration-none opacity-75 hover-bright">
                  Events
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-light text-decoration-none opacity-75 hover-bright">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="fw-bold mb-3">Connect</h5>
            <div className="d-flex gap-3 mb-3">
              <Link
                href="#"
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "40px",
                  height: "40px",
                  background: "rgba(255,255,255,0.1)",
                  transition: "0.3s",
                }}
              >
                <i className="bi bi-facebook fs-5"></i>
              </Link>
              <Link
                href="#"
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "40px",
                  height: "40px",
                  background: "rgba(255,255,255,0.1)",
                  transition: "0.3s",
                }}
              >
                <i className="bi bi-twitter-x fs-5"></i>
              </Link>
              <Link
                href="#"
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "40px",
                  height: "40px",
                  background: "rgba(255,255,255,0.1)",
                  transition: "0.3s",
                }}
              >
                <i className="bi bi-instagram fs-5"></i>
              </Link>
              <Link
                href="#"
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "40px",
                  height: "40px",
                  background: "rgba(255,255,255,0.1)",
                  transition: "0.3s",
                }}
              >
                <i className="bi bi-envelope fs-5"></i>
              </Link>
            </div>
            <p className="small opacity-75 mb-0">
              Stay connected with our community
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4 border-light opacity-25" />

        {/* Bottom Section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <p className="small mb-0 opacity-75">
            © {currentYear} ArtCulture. All rights reserved.
          </p>
          <div className="d-flex gap-4 small">
            <Link to='/privacypolicy' className="text-light text-decoration-none opacity-75 hover-bright">
              Privacy Policy
            </Link>
            <Link to='/termcondition' className="text-light text-decoration-none opacity-75 hover-bright">
              Terms of Service
            </Link>
            <Link to="#" className="text-light text-decoration-none opacity-75 hover-bright">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Hover animation styles */}
      <style>{`
        .hover-bright:hover {
          opacity: 1 !important;
          color: #fff !important;
        }
        a.d-flex:hover {
          background: rgba(255,255,255,0.2) !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;

