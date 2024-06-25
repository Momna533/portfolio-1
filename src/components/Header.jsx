import { FiMenu } from "react-icons/fi";
import logo from "../assets/logo.png";
import Button from "./Button";
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
          <a href="contact">Contact</a>
        </div>
      </div>
      <div className="mobie__header">
        <div className="mobile__nav">
          <a className="logo">
            <img src={logo} alt="logo" />
          </a>
          <Button
            text={isMenuOpen ? <CgClose /> : <FiMenu />}
            onClick={toggleMenu}
            className="menu__btn"
          />
        </div>
        {isMenuOpen && (
          <div className="mobile__drawer">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#services">services</a>
            <a href="about">About</a>
            <a href="contact">Contact</a>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
