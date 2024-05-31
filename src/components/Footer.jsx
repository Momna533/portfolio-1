import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer" id="contact">
        <div className="footer_content">
          <div className="footer_content_links">
            <a
              className="footer_content_link"
              target="_blank"
              href="https://github.com/Momna533"
            >
              <FaGithub />
            </a>
            <a
              className="footer_content_link"
              target="_blank"
              href="https://www.instagram.com/momna00000/"
            >
              <FaInstagram />
            </a>
            <a
              className="footer_content_link"
              target="_blank"
              href="https://www.linkedin.com/in/momna-ijaz-113797210/"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="footer_content_desc">
            COPYRIGHT©2023 <span> MOMNA IJAZ</span> ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
