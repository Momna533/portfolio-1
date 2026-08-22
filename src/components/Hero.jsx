import { FaGithub } from "react-icons/fa";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <Header />
      <div className="hero__primary">
        <h3>Hi</h3>
        <h1>
          I am Momna Ijaz <br />
          frontend web developer
        </h1>
        <h4>
          I am a freelance web developer. I have experience in building
          websites.
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
          <a href="/Resume developer.pdf" download="Momna Ijaz.pdf">
            Download CV
          </a>
        </button>
      </div>
      <div className="hero__bottom">
        <h3>Stay connected</h3>
        <div className="hero__social__icons">
          <a
            href="https://github.com/Momna533"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
