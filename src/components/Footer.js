function Footer() {
  return (
    <>
      <footer className="py-5">
        <nav className="navbar navbar-expand-lg">
          <div className="container justify-content-center">
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#home">
                  Github
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#about">
                  LinkedIn
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#contact">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#contact">
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <p className="text-center">
          <small>Designed & Build by Ayaan Malik</small>
        </p>
        <div className="text-center">
          <a className="logo">AM</a>
        </div>
      </footer>
    </>
  );
}
export default Footer;
