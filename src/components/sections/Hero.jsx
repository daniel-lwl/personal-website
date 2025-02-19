import "../../styles/Hero.css";


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
            

        </section>
    );
}

export default Hero;