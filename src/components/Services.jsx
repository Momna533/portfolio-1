import { useEffect, useState } from "react";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaNpm } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";

function Services() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const section2Offset = document.getElementById("section2").offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (scrollPosition > section2Offset) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section className="services" id="services">
        <div className="services_content">
          <h2>Professional Skillset</h2>
          <div className="underline"></div>
          <div className="services_content_entries">
            <div
              className={`content services_content_entry ${
                animate ? "animate" : ""
              }`}
              id="section2"
            >
              <div className="icon">
                <AiOutlineJavaScript />
              </div>
              <h3>Javascript</h3>
              <div className="underline"></div>
            </div>
            <div
              className={`content services_content_entry ${
                animate ? "animate" : ""
              }`}
              id="section2"
            >
              <div className="icon">
                <FaReact />
              </div>
              <h3>React JS</h3>
              <div className="underline"></div>
            </div>
            <div
              className={`content services_content_entry ${
                animate ? "animate" : ""
              }`}
              id="section2"
            >
              <div className="icon">
                <FaNodeJs />
              </div>
              <h3>Node JS</h3>
              <div className="underline"></div>
            </div>
            <div
              className={`content services_content_entry ${
                animate ? "animate" : ""
              }`}
              id="section2"
            >
              <div className="icon">
                <SiExpress />
              </div>
              <h3>Express JS</h3>
              <div className="underline"></div>
            </div>
            <div
              className={`content services_content_entry ${
                animate ? "animate" : ""
              }`}
              id="section2"
            >
              <div className="icon">
                <IoLogoFirebase />
              </div>
              <h3>Firebase</h3>
              <div className="underline"></div>
            </div>
            <div
              className={`content services_content_entry ${
                animate ? "animate" : ""
              }`}
              id="section2"
            >
              <div className="icon">
                <FaGitAlt />
              </div>
              <h3>Git</h3>
              <div className="underline"></div>
            </div>
            <div
              className={`content services_content_entry ${
                animate ? "animate" : ""
              }`}
              id="section2"
            >
              <div className="icon">
                <IoLogoVercel />
              </div>
              <h3>Vercel</h3>
              <div className="underline"></div>
            </div>
            <div
              className={`content services_content_entry ${
                animate ? "animate" : ""
              }`}
              id="section2"
            >
              <div className="icon">
                <SiVite />
              </div>
              <h3>Vite</h3>
              <div className="underline"></div>
            </div>
            <div
              className={`content services_content_entry ${
                animate ? "animate" : ""
              }`}
              id="section2"
            >
              <div className="icon">
                <FaFigma />
              </div>
              <h3>Figma</h3>
              <div className="underline"></div>
            </div>
            <div
              className={`content services_content_entry ${
                animate ? "animate" : ""
              }`}
              id="section2"
            >
              <div className="icon">
                <FaNpm />
              </div>
              <h3>Npm</h3>
              <div className="underline"></div>
            </div>
            <div
              className={`content services_content_entry ${
                animate ? "animate" : ""
              }`}
              id="section2"
            >
              <div className="icon">
                <SiTypescript />
              </div>
              <h3>Typescript</h3>
              <div className="underline"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
