import React from "react";
import {Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <section className="title-sec">
        <Link to="/" className ='link'>
          <h1 className = "title">redbird rising fund</h1>
        </Link>
      </section>
      <section className="side-menu">
        <Link to="/About" className ='link'>
          <h2>about</h2>
        </Link>
        <Link to="/Apply" className ='link'>
          <h2>apply</h2>
        </Link>
        <Link to="/Contact" className ='link'>
          <h2>contact</h2>
        </Link>
        <Link to="/donate" className ='link'>
          <h2 id="donate">donate</h2>
        </Link>
      </section>
    </div>
  );
}
export default Header;
