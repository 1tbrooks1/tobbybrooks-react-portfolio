import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import "./style.css";

function Footer() {
  return (
    <div class="social-container">
      <h3 className="text-center">Social Follow</h3>
      <div className="d-flex flex-row justify-content-center">
        <a
          href="https://github.com/1tbrooks1"
          target="_blank"
          className="github social"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/tobby-brooks/"
          target="_blank"
          className="linked social"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://stackoverflow.com/users/17193167/tbrooks"
          target="_blank"
          className="stack social"
        >
          <FontAwesomeIcon icon={faStackOverflow} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
