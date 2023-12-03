import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";

function About() {
  return (
    <section className="About">
      <h2 className="pb-2">About Myself</h2>
      <div className="container row">
        <div className="col-lg-12 col-md-12 col-sm-12 p-0">
          <p>
            "My name is Ayaan Malik, and I'm new to frontend programming with an
            emphasis on React. I am eager to learn and improve, and I am
            dedicated to mastering the complexities of web development and
            providing powerful, new solutions."
          </p>
          <hr />
        </div>
      </div>
      <Skills/>
      <Projects/>
      <Experience/>
    </section>
  );
}

export default About;
