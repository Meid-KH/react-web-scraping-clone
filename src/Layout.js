import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="app__main">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
