import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter,faGithub, faCodepen } from "@fortawesome/free-brands-svg-icons";


const AppNav = (props) => {
  return (
    <nav id="app-nav">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/steven-j-burns/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={ faLinkedin } size="2x" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/StevenJBurns" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={ faTwitter } size="2x" />
          </a>
        </li>
        <li>
          <a href="https://github.com/StevenJBurns" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={ faGithub } size="2x" />
          </a>
        </li>
        <li>
          <a href="https://codepen.io/StevenJBurns/#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={ faCodepen } size="2x" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;
