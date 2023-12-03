// import Profile from './images/profile.png';

function Hero() {
  return (
    <section className="hero py-5">
      <div className="container pt-2">
        <div className="row">
          <div className="col-lg-7 col-md-7 col-12 p-0">
            <h1 className="pt-5 pb-2">I'm a FrontEnd Developer</h1>
            <p className="pb-4">
              " To be able to work for an encouraging and stable company that
              will assist me in developing, improving and obtaining the
              necessary skills in order to became the best web developer
              possible. "
            </p>
          </div>
          {/* <div className="col-lg-5 col-md-5 p-0">
            <img className="profile" src={Profile} alt="profile-image" />
          </div> */}
          <hr/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
