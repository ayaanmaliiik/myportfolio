function About() {
  return (
    <section className="About py-5">
      <div className="container row pt-2">
        <div className="col-lg-7 col-md-12 col-sm-12 p-0">
          <h2 className="pt-5 pb-2">Job Title</h2>
          <p>Ayaan Malik, Freelancer</p>
          <br />
          <div />
          <div className="col-lg-5 col-md-12 col-sm-12 p-0"></div>
          <div>
            <h2 className="pt-5 pb-2">Beleive</h2>
            <p>Do not lose hope, nor be sad</p>
            <br />
            <h2 className="pt-5 pb-2">Education</h2>
            <p>
              "I, Ayaan Malik, have successfully completed my Bachelor of
              Computer Applications (BCA) degree from Maharaja Sayajirao
              University."
            </p>
            <br />
            <h2 className="pt-5 pb-2">About myself</h2>
            <p>
              "My name is Ayaan Malik, and I'm new to frontend programming with
              an emphasis on React. I am eager to learn and improve, and I am
              dedicated to mastering the complexities of web development and
              providing powerful, new solutions."
            </p>
            <br />
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 p-0">
            {/* <img className='profile ' src= {Img} alt='Profile'/> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
