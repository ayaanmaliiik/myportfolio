import React from "react";
import HTML from "./images/html.png";
import CSS from "./images/css.png";
import JS from "./images/javascript.png";
import JQUERY from "./images/jquery.png";
import BOOTSTRAP from "./images/bootstrap.png";
import REACT from "./images/react.png";
import PHP from "./images/php.png";
import MYSQL from "./images/mysql.png";
import GIT from "./images/git.png";
import GITHUB from "./images/github.png";
import GITLAB from "./images/gitlab.png";

const Skills = () => {
  return (
    <section className="skills">
    <h2 className="pb-2 pt-3">Skills</h2>
      <div className="container row">
        <div className="col-lg-2 col-md-4 col-4 ps-0">
          <div className="card border-0">
            <div className="card-body text-center">
              <img src={HTML} />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-4 ps-0">
          <div className="card border-0">
            <div className="card-body text-center">
              <img src={CSS} />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-4 ps-0">
          <div className="card border-0">
            <div className="card-body text-center">
              <img src={JS} />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-4 ps-0">
          <div className="card border-0">
            <div className="card-body text-center">
              <img src={JQUERY} />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-4 ps-0">
          <div className="card border-0">
            <div className="card-body text-center">
              <img src={BOOTSTRAP} />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-4 ps-0">
          <div className="card border-0">
            <div className="card-body text-center">
              <img src={REACT} />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-4 ps-0">
          <div className="card border-0">
            <div className="card-body text-center">
              <img src={PHP} />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-4 ps-0">
          <div className="card border-0">
            <div className="card-body text-center">
              <img src={MYSQL} />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-4 ps-0">
          <div className="card border-0">
            <div className="card-body text-center">
              <img src={GIT} />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-4 ps-0">
          <div className="card border-0">
            <div className="card-body text-center">
              <img src={GITHUB} />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-12 col-4 ps-0">
          <div className="card border-0">
            <div className="card-body text-center">
              <img src={GITLAB} />
            </div>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default Skills;
