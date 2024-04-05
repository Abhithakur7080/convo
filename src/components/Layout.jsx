import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ height: "calc(100vh - 80px)", overflowY: "auto" }}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
