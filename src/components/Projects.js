import React from "react";

const Projects = () => {
  const projectsList = [
    {
      name: "ArmTech - (inprogress)",
      description:
        "My personal front-end showcase, highlighting design and coding projects.",
      link: "/",
    },
    {
      name: "Todo App",
      description:
      "Write and manage tasks effortlessly in this local todo app. Remember, your tasks vanish after a refresh—a digital notepad for fleeting needs.",
      link: "/",
    },
    // Add more projects here as needed
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      {projectsList.map((project, index) => (
        <p key={index} className="py-1">
          <a href={project.link} className="">
            {project.name}
          </a>{" "}
          : {project.description}
        </p>
      ))}
    </section>
  );
};

export default Projects;
