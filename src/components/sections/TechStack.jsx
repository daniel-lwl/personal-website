import TechCard from "../common/TechCard";
import "../../styles/TechStack.css";

const techStack = [
    { name: "Figma", description: "Design Tool", icon: "🎨" },
    { name: "JavaScript", description: "Programming Language", icon: "📜" },
    { name: "React", description: "JavaScript Library", icon: "⚛️" },
    { name: "NodeJS", description: "JavaScript Framework", icon: "🟢" },
    { name: "BootStrap", description: "CSS Framework", icon: "📦" },
    { name: "Git", description: "Version Control", icon: "🔧" },
    { name: "PostgreSQL", description: "Database", icon: "🐘" },
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