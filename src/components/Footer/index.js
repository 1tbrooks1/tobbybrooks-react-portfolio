import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import "./style.css"

function Footer() {
  return (
  
    <div class="social-container">
    <h3 className="text-center">Social Follow</h3>
    <div className="d-flex flex-row justify-content-center">
    <a href="https://www.youtube.com/c/jamesqquick"
        className="youtube social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.facebook.com/learnbuildteach/"
        className="facebook social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faStackOverflow} size="2x" />
      </a>
      </div>
</div>

  )
}

export default Footer;
