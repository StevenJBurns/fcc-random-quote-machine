import React from "react";


const AppHeader = (props) => {
  return (
    <header id="app-header" style={{ backgroundColor: props.scheme["dark"] }}>{props.children}</header>
  );
};

export default AppHeader;
