import React from "react";
import { Navbar } from "react-bootstrap";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="FooterContainer">
        <a href="https://line.me/ti/p/nMpoQY7nFd" target="_blank">
          <img
            className="aboutContact"
            src="https://img.icons8.com/ios-filled/50/000000/email-open.png"
          />
        </a>
        <a href="https://github.com/WenHank?tab=repositories" target="_blank">
          <img
            className="aboutContact"
            src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
          />
        </a>
        <a href="https://line.me/ti/p/nMpoQY7nFd" target="_blank">
          <img
            className="aboutContact"
            href="https://line.me/ti/p/nMpoQY7nFd"
            src="https://img.icons8.com/ios-glyphs/30/000000/line-me.png"
          />
        </a>
      </Navbar>
    </div>
  );
}

export default Footer;
