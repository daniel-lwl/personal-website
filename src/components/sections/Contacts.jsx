import React from "react";
import "../../styles/Contact.css" // Import your CSS file

const Contacts = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact me</h2>
      
      <div className="contact-container">
        <div className="contact-name">
          <h3>Daniel</h3>
          <h3>Leong</h3>
        </div>
        
        <div className="contact-info">
          <h4>Let's Connect</h4>
          <ul>
            <li><a href="mailto:danielleong47@gmail.com">Email</a></li>
            <li><a href="https://www.linkedin.com/in/daniel-lwl/">LinkedIn</a></li>
            <li><a href="https://github.com/daniel-lwl">GitHub</a></li>
            <li><a href="https://wa.me/+60133618006">WhatsApp</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contacts;