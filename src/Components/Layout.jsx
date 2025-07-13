import Asside from "./Asside";
import Footer from "./Footer";
import Main from "./Main";
import Header from "./Header";
import './Layout.css';
import React from "react";

const Layout = () => {
  return (
    <div className="container">
      <Header title={"Bem-vindo ao react"} />
      <div className="Body">
        <Main/>
        <Asside/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
