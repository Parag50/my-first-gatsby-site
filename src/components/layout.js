import React from "react";
import Header from "./header/header";
import { container, heading, mainContent } from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Header />
      <div className={container}>
        <main className={mainContent}>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
