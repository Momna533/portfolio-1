import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="hero" id="home">
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
          <a href="#contact">Let`s Talk</a>
        </button>
      </div>
      <div className="hero__middle">
        <h2>Know Who I`m</h2>
        <h4>
          I enjoy turning complex problems into simple, beautiful and intuitive
          solutions. I like to build functional and user-friendly and at the
          same time attractive websites for you. Moreover, I add a personal
          touch to your product and make sure that it is eye-catching and easy
          to use. My aim is to bring across your message and identity in the
          most creative way.
        </h4>
        <button>
          <a href="/public/Momna Ijaz.pdf" download="Momna Ijaz.pdf">
            Download CV
          </a>
        </button>
      </div>
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
            href="https://www.instagram.com/momna00000/"
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
