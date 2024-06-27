import { FiMenu } from "react-icons/fi";
import logo from "../assets/logo.png";
import { useGlobalContext } from "../context/context";
import { CgClose } from "react-icons/cg";
const Header = () => {
  const { toggleMenu, isMenuOpen, setIsMenuOpen } = useGlobalContext();
  return (
    <>
      <div className="header">
        <div className="header__nav__links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#services">services</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="mobile__header">
        <div className="mobile__nav">
          <a className="logo">
            <img src={logo} alt="logo" />
          </a>
          <button className="menu__btn" onClick={toggleMenu}>
            {isMenuOpen ? <CgClose /> : <FiMenu />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="mobile__drawer">
            <a href="#home" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>
              Projects
            </a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>
              services
            </a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
