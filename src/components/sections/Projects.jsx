import React from "react";
import ProjectCard from "../common/ProjectCard";
import tempt from "../../assets/images/Temp.png"
import "../../styles/Projects.css"; // Import styling

const projects = [
  {
    title: "Coming Soon",
    description: "Exciting projects are in the works. Stay tuned!",
    techStack: ["CSS", "JavaScript", "HTML", "React"],
    image: tempt,
  },
  {
    title: "Coming Soon",
    description: "Exciting projects are in the works. Stay tuned!",
    techStack: ["Node.js", "Express", "PostgreSQL"],
    image: tempt,
  },
];

const Projects = () => {
    return (
      <section id="projects" className="projects-section">
        <div className="projects-header">
          <h2>Projects</h2>
          <a href="#" className="view-more">View More</a>
        </div>
  
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} /> // Use the imported ProjectCard ✅
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;