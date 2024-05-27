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
      <div className="header_content">
        <div className="header_content_center">
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
        </div>
      </div>
    </div>
  );
};

export default Header;
