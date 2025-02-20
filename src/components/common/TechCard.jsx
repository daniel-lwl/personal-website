const TechCard = ({ icon, name, description }) => {
    return (
      <div className="tech-card">
        <div className="tech-icon">
            <img src={icon} alt={`${name} icon`} />
        </div>
        <div className="tech-info">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  };
  
  export default TechCard;