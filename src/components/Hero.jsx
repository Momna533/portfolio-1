import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="hero">
      <Header />
      <div className="hero__content">
        <div className="hero__banner">
          <h3>Hi,I am</h3>
          <h1>Momna Ijaz </h1>
          <h4>
            I am a freelance web and mobile developer. I have experience in
            building websites and mobile applications.
          </h4>
          <h3>Stay connected</h3>
          <div className="hero__social__icons">
            <a
              href="https://www.linkedin.com/in/momna-ijaz/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/momna-ijaz"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/momna_ijaz/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/momna_ijaz"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
