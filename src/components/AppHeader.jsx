import React from "react";


const AppHeader = (props) => {
  return (
    <header id="app-header" style={{ backgroundColor: props.scheme["dark"] }}>
      <h2>Random Quotes</h2>
      <h4>built for Free Code Camp</h4>
      {props.children}
    </header>
  );
};

export default AppHeader;
