import React from "react";


const AppFooter = (props) => {
  return (
    <footer id="app-footer" style={{ backgroundColor: props.bg }}>{props.children}</footer>
  );
};

export default AppFooter;
