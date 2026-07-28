import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul
        style={{
          listStyleType: "none",
          justifyContent: "end",
          display: "flex",
        }}
      >
        <li style={{ margin: "10px" }}>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li style={{ margin: "10px" }}>
          <Link to="/about">About</Link>
        </li>
        <li style={{ margin: "10px" }}>
          <Link to="/contact">Contact</Link>
        </li>
        <li style={{ margin: "10px" }}>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;

// in html
{
  /* <a href="/about.html">About</a> */
}
