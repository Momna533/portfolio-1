import {
  FaGithub,
  FaGoogle,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMobile,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__top">
          <div className="footer__top__content">
            <div className="footer__cards">
              <h1>Contact Me</h1>
              <FooterCard icon={<FaMobile />} text="0337-7251311" />
              <FooterCard
                icon={<FaHome />}
                text="Samundri Faisalabad Paskistan"
              />
              <FooterCard icon={<FaGoogle />} text="momna533gb@gmail.com" />
            </div>
            <div className="footer__form">
              <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message" />
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom__content">
            <p>
              COPYRIGHT©2023 <span> MOMNA IJAZ</span> ALL RIGHTS RESERVED
            </p>
            <div className="footer__social__links">
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
