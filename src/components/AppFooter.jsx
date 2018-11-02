import React from "react";


const AppFooter = (props) => {
  return (
    <footer id="app-footer" style={{ backgroundColor: props.scheme["dark"] }}>{props.children}</footer>
  );
};

export default AppFooter;
