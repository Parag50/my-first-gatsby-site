import React from "react";
import Header from "./header/header";
import "./layout.scss";
import Footer from "./footer/footer";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Header />
      <div className="container">
        <main className="mainContent">
          <h1 className="heading">{pageTitle}</h1>
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
