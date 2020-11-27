import React from "react";
import "../src/css/tailwind.css";

const Layout = ({ children }) => {
  return (
    <React.Fragment>      
      <link
        href="https://fonts.googleapis.com/css?family=Lato:400,700%7CNoto+Sans:400,700&amp;display=fallback"
        rel="stylesheet"
      />
      {children}
    </React.Fragment>
  );
};

export default Layout;
