import "../../styles/Hero.css";
import colaborateIcon from "../../assets/icons/Colaborate Icons.svg"

function Hero(){
    return(
        <section className="hero">

            <div className="hero-text">
                <h2>Based in Malaysia</h2>
                <h1 className="main-heading">
                    Freelance <span style={{color: "#6F53E8"}}>Web Developer</span><br />
                    Websites that fit your needs.
                </h1>
                <h2 className="sub-heading">Hi, I'm Daniel. I help businesses create websites and tools that work.</h2>
            </div>

            {/* Buttons Container */}
            <div className="hero-buttons">
                <a href="#projects" className="btn primary-btn">
                    See My Projects <span>→</span>
                </a>
                <a href="#contact" className="btn secondary-btn">
                    <img className="icon" src={colaborateIcon}/> Let’s Collaborate
                </a>
            </div>
            

        </section>
    );
}

export default Hero;