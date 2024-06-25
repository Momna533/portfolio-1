import { Link } from "react-router-dom";
import aboutImg from "../images/about.png";

function About() {
  return (
    <>
      <div className="about__content">
        <h1>Know Who I`m</h1>
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
    </>
  );
}
export default About;
