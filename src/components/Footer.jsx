import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer" id="contact">
        <div className="footer_content">
          <div className="footer_content_links">
            <a className="footer_content_link" href="">
              <FaGithub />
            </a>
            <a className="footer_content_link" href="">
              <FaInstagram />
            </a>
            <a className="footer_content_link" href="">
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
