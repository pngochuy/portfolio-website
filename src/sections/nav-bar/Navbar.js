import Logo from "../../assests/logo.png";
import { data, data1, data2 } from "./data";
import "./navbar.css";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id={`navbar ${isOpen ? "active" : ""}`}>
      <div className="container nav__container">
        <ul className="nav__menu">
          {data1.map((item, index) => {
            return (
              <li key={item.id}>
                <a href={item.link} className="nav__menu-choice">
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <a href="index.html" className="nav__logo">
          <img src={Logo} alt="logo"></img>
        </a>
        <ul className="nav__menu">
          {data2.map((item, index) => {
            return (
              <li key={item.id}>
                <a href={item.link} className="nav__menu-choice">
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>

        {/* for responsive nav-bar when clicked */}
        <a
          href="index.html"
          className={`nav__logo-sm ${isOpen ? "not-active" : "active"}`}
        >
          <img src={Logo} alt="logo"></img>
        </a>
        <ul className={`nav__menu-sm ${isOpen ? "active" : ""}`}>
          {data.map((item, index) => {
            return (
              <li key={item.id}>
                <a href={item.link} className="nav__menu-choice">
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
          {/* <i className={isOpen ? "fa-solid fa-x" : "fa-solid fa-bars"}></i> */}
          <svg
            className={`ham hamRotate ham4 ${isOpen ? "active" : ""}`}
            viewBox="0 0 100 100"
            width="80"
          >
            <path
              className="line top"
              d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
            />
            <path className="line middle" d="m 70,50 h -40" />
            <path
              className="line bottom"
              d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
