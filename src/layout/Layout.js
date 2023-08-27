import React from "react";
import "react-bootstrap";
import Header from "../view/Header";
import MasterHead from "../view/MasterHead";
import Portfolio from "../view/protfolio/Portfolio";
import About from "../view/About";
import Contact from "../view/contact/Contact";
import Footer from "../view/Footer";
import CopyRight from "../view/CopyRight";

const Layout = () => {
  return (
    <div>
      <Header />
      <MasterHead />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      <CopyRight />
    </div>
  );
};

export default Layout;
