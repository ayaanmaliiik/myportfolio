import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="py-5">
        <nav className="navbar navbar-expand-lg">
          <div className="container justify-content-center">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="https://github.com/AyaanMalik-STUDIO"
                >
                  Github
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="https://www.linkedin.com/in/ayaan-malik-165810186/"
                >
                  LinkedIn
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/myportfolio/">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/myportfolio/">
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <p className="text-center">
          <small>Designed & Built by Ayaan Malik</small>
        </p>
        <div className="text-center pt-3">
        <Link to="/" className="logo">
          Am
        </Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;