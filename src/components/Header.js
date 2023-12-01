function Header() {
  return (
    <nav className="navbar navbar-expand-lg pt-3 pb-5">
      <div className="container">
        <a className="logo navbar-brand" href="/myportpolio/">
          Am
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="https://github.com/AyaanMalik-STUDIO">
              Github
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="https://www.linkedin.com/in/ayaan-malik-165810186/">
              LinkedIn
              </a>
            </li>
            <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/myportpolio/">
                  Blog
                </a>
              </li>
            <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/myportpolio/">
                  Youtube
                </a>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
