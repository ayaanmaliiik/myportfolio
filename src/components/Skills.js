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
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="pb-2 pt-3">Skills</h2>
      <div className="container row">
        <motion.div
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          dragElastic={2}
          className="col-lg-2 col-md-4 col-4 ps-0"
        >
          <div className="card border-0">
            <div className="card-body text-center">
              <img src={HTML} />
            </div>
          </div>
        </motion.div>
        <motion.div
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          dragElastic={2}
          className="col-lg-2 col-md-4 col-4 ps-0"
        >
          <div className="card border-0">
            <div className="card-body text-center">
              <img src={CSS} />
            </div>
          </div>
        </motion.div>
        <motion.div
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          dragElastic={2}
          className="col-lg-2 col-md-4 col-4 ps-0"
        >
          <div className="card border-0">
            <div className="card-body text-center">
              <img src={JS} />
            </div>
          </div>
        </motion.div>
        <motion.div
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          dragElastic={2}
          className="col-lg-2 col-md-4 col-4 ps-0"
        >
          <div className="card border-0">
            <div className="card-body text-center">
              <img src={JQUERY} />
            </div>
          </div>
        </motion.div>
        <motion.div
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          dragElastic={2}
          className="col-lg-2 col-md-4 col-4 ps-0"
        >
          <div className="card border-0">
            <div className="card-body text-center">
              <img src={BOOTSTRAP} />
            </div>
          </div>
        </motion.div>
        <motion.div
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          dragElastic={2}
          className="col-lg-2 col-md-4 col-4 ps-0"
        >
          <div className="card border-0">
            <div className="card-body text-center">
              <img src={REACT} />
            </div>
          </div>
        </motion.div>
        <motion.div
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          dragElastic={2}
          className="col-lg-2 col-md-4 col-4 ps-0"
        >
          <div className="card border-0">
            <div className="card-body text-center">
              <img src={PHP} />
            </div>
          </div>
        </motion.div>
        <motion.div
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          dragElastic={2}
          className="col-lg-2 col-md-4 col-4 ps-0"
        >
          <div className="card border-0">
            <div className="card-body text-center">
              <img src={MYSQL} />
            </div>
          </div>
        </motion.div>
        <motion.div
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          dragElastic={2}
          className="col-lg-2 col-md-4 col-4 ps-0"
        >
          <div className="card border-0">
            <div className="card-body text-center">
              <img src={GIT} />
            </div>
          </div>
        </motion.div>
        <motion.div
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          dragElastic={2}
          className="col-lg-2 col-md-4 col-4 ps-0"
        >
          <div className="card border-0">
            <div className="card-body text-center">
              <img src={GITHUB} />
            </div>
          </div>
        </motion.div>
        <motion.div
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          dragElastic={2}
          className="col-lg-2 col-md-12 col-4 ps-0"
        >
          <div className="card border-0">
            <div className="card-body text-center">
              <img src={GITLAB} />
            </div>
          </div>
        </motion.div>
        <hr />
      </div>
    </section>
  );
};

export default Skills;
