import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Header from "./Header";
import About from "./About";

const Hero = () => {
  return (
    <div className="hero">
      <Header />
      <div className="hero__primary">
        <h3>Hi</h3>
        <h1>
          I am Momna Ijaz <br />
          web & mobile developer
        </h1>
        <h4>
          I am a freelance web and mobile developer. I have experience in
          building websites and mobile applications.
        </h4>
        <button>
          <a href="/public/Momna Ijaz.pdf" download="Momna Ijaz.pdf">
            Download CV
          </a>
        </button>
      </div>
      <About />
      <div className="hero__bottom">
        <h3>Stay connected</h3>
        <div className="hero__social__icons">
          <a
            href="https://www.linkedin.com/in/momna-ijaz-113797210/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Momna533"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://github.com/Momna533"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
