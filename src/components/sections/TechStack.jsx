import TechCard from "../common/TechCard";
import figmaLogo from "../../assets/icons/Figma Logo.svg"
import bootStrapLogo from "../../assets/icons/Bootstrap Logo.svg"
import gitHubLogo from "../../assets/icons/Git Logo.svg"
import javaScriptLogo from "../../assets/icons/Javascript Logo.svg"
import nodeJSLogo from "../../assets/icons/NodeJS logo.svg"
import postgreSQLLogo from "../../assets/icons/PostgreSQL logo.svg"
import reactLogo from "../../assets/icons/React Logo.svg"
import "../../styles/TechStack.css";

const techStack = [
    { name: "Figma", description: "Design Tool", icon: figmaLogo },
    { name: "JavaScript", description: "Programming Language", icon: javaScriptLogo },
    { name: "React", description: "JavaScript Library", icon: reactLogo },
    { name: "NodeJS", description: "JavaScript Framework", icon: nodeJSLogo },
    { name: "BootStrap", description: "CSS Framework", icon: bootStrapLogo },
    { name: "Git", description: "Version Control", icon: gitHubLogo },
    { name: "PostgreSQL", description: "Database", icon: postgreSQLLogo },
  ];

const TechStack = () => {
    return (
      <section className="tech-stack">
        <h2>My Tech Stack</h2>
        <p>Here are the tools and technologies I use to build modern websites and applications.</p>
        <div className="tech-grid">
          {techStack.map((tech, index) => (
            <TechCard key={index} {...tech} />
          ))}
        </div>
      </section>
    );
};
  
export default TechStack;