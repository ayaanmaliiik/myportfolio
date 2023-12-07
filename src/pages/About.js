import Projects from "../components/Projects";
import Skills from "../components/Skills";

function About() {
  return (
    <section className="About py-5">
      <div className="container ">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 p-0">
            <h2 className="">Job Title</h2>
            <p>Ayaan Malik, Freelancer</p>
            <br />
            <h2 className="">Belief</h2>
            <p>"The magic you are looking for is in the work you are avoiding."</p>
            <br />
            <h2 className=" ">About Myself</h2>
            <p>
              My name is Ayaan Malik, and I'm new to frontend programming with
              an emphasis on React. I am eager to learn and improve, and I am
              dedicated to mastering the complexities of web development and
              providing powerful, new solutions.
            </p>
            <br/>
            <Skills />
            <br/>
            <Projects />
            <br/>
          </div>
        </div>
      </div>
      
      
    </section>
  );
}

export default About;
