import React from "react";
import { NavLink } from "react-router-dom";
// import "../styles/_header.scss";

export default function Header() {
  return (
    <header className="app__header">
      <div className="container">
        <nav className="app__header__nav">
          <ul>
            <li>
              <NavLink exact to="/topics" activeClassName="active">
                Topics
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/articles" activeClassName="active">
                Articles
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/dash" activeClassName="active">
                Dash
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
