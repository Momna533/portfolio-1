import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="header" id="header">
      <div className="header__content">
        <div
          className="logo"
          onClick={() => {
            scrollToTop();
            setIsOpen(false);
          }}
        >
          <img src={logo} alt="logo" />
        </div>
        <button className="menu__btn" onClick={handleToggle}>
          {isOpen ? (
            <AiOutlineClose className="close" />
          ) : (
            <AiOutlineMenu className="open" />
          )}
        </button>
        <div className="nav__links">
          <a href="#header">home</a>
          <a href="#about">about</a>
          <a href="#services">skills</a>
          <a href="#projects">projects</a>
        </div>
        <div className="cta__btn contact__btn">
          <a href="#contact">contact</a>
        </div>
        {isOpen && (
          <div className="nav__drawer">
            <a href="#header" onClick={() => setIsOpen(false)}>
              home
            </a>
            <a href="#about" onClick={() => setIsOpen(false)}>
              about
            </a>
            <a href="#services" onClick={() => setIsOpen(false)}>
              skills
            </a>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              projects
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              contact
            </a>
          </div>
        )}
        {/* <div className="header_content_center">
          <Link
            className="header_content_logo"
            onClick={() => {
              scrollToTop();
              setIsOpen(false);
            }}
          >
            <img src={logo} alt="logo" />
          </Link>
          <button className="header_content_menu" onClick={handleToggle}>
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
        <div className={`header_content_links ${isOpen ? "open" : ""}`}>
          <li>
            <Link onClick={() => setIsOpen(false)} to="/#about">
              about
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="/#services">
              services
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="/#projects">
              projects
            </Link>
          </li>
        </div>
        <div className="header_content_contact">
          <li>
            <Link to="/#contact">contact</Link>
          </li>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
