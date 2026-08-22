import { FaGithub, FaGoogle, FaHome } from "react-icons/fa";
import Contact from "./Contact";
import Divider from "./Divider";

const Footer = () => {
  return (
    <div className="container" id="contact">
      <div className="container__content footer__content">
        <h2>Stay in Touch</h2>
        <div className="footer__top">
          <div className="footer__top__left">
            <FooterCard icon={<FaHome />} text="Faisalabad Pakistan" />
            <FooterCard icon={<FaGoogle />} text="momna533gb@gmail.com" />
          </div>
          <div className="footer__top__right">
            <Contact />
          </div>
        </div>
        <Divider />
        <div className="footer__bottom">
          <p>
            COPYRIGHT©2023 <span> MOMNA IJAZ</span> ALL RIGHTS RESERVED
          </p>
          <div className="footer__social__links">
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
    </div>
  );
};

export default Footer;

const FooterCard = ({ icon, text }) => {
  return (
    <div className="footer__card">
      <div className="icon">{icon}</div>
      <h4>{text}</h4>
    </div>
  );
};
