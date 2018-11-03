import React from "react";
import AppNav from "./AppNav";


const AppFooter = (props) => {
  return (
    <footer id="app-footer" style={{ backgroundColor: props.scheme["dark"] }}>
      <AppNav />
      <h6>&copy; 2018 &bull; Steven J Burns</h6>
      {props.children}
    </footer>
  );
};

export default AppFooter;
