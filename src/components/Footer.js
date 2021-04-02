import React from "react";

function Footer() {
  return (
    <footer className="app__footer py-4 bg--primary color--white text-center">
      <div className="container">
        <p>React Web Scraping &copy;{" " + new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
