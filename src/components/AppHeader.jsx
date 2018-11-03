import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons"


const AppHeader = (props) => {
  return (
    <header id="app-header" style={{ backgroundColor: props.scheme["dark"] }}>
      <h2>Random Quotes</h2>
      <h4>built for Free Code Camp</h4>
      <FontAwesomeIcon icon={ faFreeCodeCamp } color="#F0F0F0" size="4x" />
    </header>
  );
};

export default AppHeader;
