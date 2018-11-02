import React from "react";


const AppHeader = (props) => {
  return (
    <header id="app-header" style={{ backgroundColor: props.bg }}>{props.children}</header>
  );
};

export default AppHeader;
