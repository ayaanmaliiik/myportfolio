function Header() {
  return (
    <nav className="navbar navbar-expand-lg pt-3 pb-5">
      <div className="container">
        <a className="logo navbar-brand" href="#">
          {/* <img
            src="/docs/5.2/assets/brand/bootstrap-logo.svg"
            alt="Ayaan Malik"
            width="30"
            height="24"
          /> */}
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
          className="collapse navbar-collapse text-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="About">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
