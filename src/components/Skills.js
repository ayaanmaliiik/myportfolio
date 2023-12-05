import React from "react";

const Skills = () => {
  const skillsList = [
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "Bootstrap",
    "React",
    "Framer Motion",
    "Material UI",
    "PHP",
    "MySQL",
    "Git",
    "GitHub",
    "GitLab",
  ];

  return (
    <section className="skills">
      <h2 className="">Skills</h2>
      <p className="">{skillsList.join(", ")}</p>
    </section>
  );
};

export default Skills;
