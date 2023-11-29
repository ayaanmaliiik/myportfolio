import React from "react";
import ArmTech from "./images/armtech.png";

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="pt-3 pb-2">Projects</h2>
      <div className="container p-0 text-center">
        <div className="row pb-2">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div class="card">
              {/* <img src="" class="card-img-top" alt="armtech" /> */}
              <div class="card-body">
                <h5 class="card-title">Armtech</h5>
                <p class="card-text">"ArmTech: My personal front-end showcase, highlighting design and coding projects."</p>
                <a href="/" className=""></a>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default Projects;
