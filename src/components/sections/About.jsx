import TechStack from "./TechStack";
import Contacts from "./Contacts";
import "../../styles/TechStack.css";
import "../../styles/About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-me">
        <div className="about-content">
          <h1>Hi, I'm Daniel Leong</h1>
          <h2>
            I help <b>businesses, startups, and entrepreneurs</b> build modern,
            user-friendly websites that enhance their brand and grow their online presence.
          </h2>
        </div>
      </div>
      
      {/* About Services Section */}
      <div className="services-container">
        <div className="about-header">
          <h2>My Services</h2>
          <div className="divider"></div>
        </div>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <span>🎨</span> {/* Or replace with your actual palette icon */}
            </div>
            <h3 className="service-title">Web Design</h3>
            <p className="service-description">
              I create visually stunning, user-centered designs that captivate your audience. Every pixel is thoughtfully placed to enhance usability while reflecting your brand's unique identity.
            </p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <span>💻</span> {/* Or replace with your actual laptop icon */}
            </div>
            <h3 className="service-title">Frontend Development</h3>
            <p className="service-description">
              Transforming designs into responsive, performant code is my specialty. I build with modern frameworks that ensure your site works flawlessly across all devices and browsers.
            </p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <span>🚀</span> {/* Or replace with your actual rocket icon */}
            </div>
            <h3 className="service-title">UI/UX Optimization</h3>
            <p className="service-description">
              I create intuitive user experiences that convert visitors into customers. Through research-driven design and continuous testing, I ensure your site not only looks great but performs brilliantly.
            </p>
          </div>
        </div>
      </div>

      {/* Reusing existing sections */}
      <TechStack />
      <Contacts />
    </section>
  );
};

export default About;