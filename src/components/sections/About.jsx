import TechStack from "./TechStack";
import Contacts from "./Contacts";
import "../../styles/TechStack.css";
import "../../styles/About.css";


const About = () => {
  return (
    <section className="about-section">
      <div className="about-me">
        <div className="about-content">
            <h1>Hi, I’m Daniel Leong</h1>
            <p>
            I help <b>businesses, startups, and entrepreneurs</b> build modern,
            user-friendly websites that enhance their brand and grow their online presence.
            </p>
        </div> 
      </div>

      {/* Reusing existing sections */}
      <TechStack />
      <Contacts />
    </section>
  );
};

export default About;