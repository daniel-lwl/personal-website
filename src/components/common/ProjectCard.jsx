import React from "react";


const ProjectCard = ({ title, description, techStack, image }) => {
    return (
      <div className="project-card">
        <img src={image} alt={title} className="project-image" />
        <div className="project-info">
          <h2 className="project-title">{title}</h2>
          <p className="project-description">{description}</p>
          <div className="project-tech">
            {techStack.map((tech, index) => (
              <span key={index} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
export default ProjectCard;