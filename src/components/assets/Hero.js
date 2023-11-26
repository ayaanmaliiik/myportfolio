import Img from '../images/profile.png';
function Hero() {
  return (
    <section className="hero py-5">
      <div className="container row pt-2">
        <div className="col-lg-7 col-md-12 col-sm-12 p-0">
          <h1 className="pt-5 pb-2">Ayaan Malik</h1>
          <p>To be able to work for an encouraging and stable company that will assist me in developing, improving and obtaining the necessary skills in order to became the best web developer possible.</p>
        </div>
        <div className="col-lg-5 col-md-12 col-sm-12 p-0">
          {/* <img className='profile ' src= {Img} alt='Profile'/> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
