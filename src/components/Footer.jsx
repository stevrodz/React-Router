import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="Footer">
      <Link to="/blue">Blue</Link> | <Link to="/red">Red</Link> |{" "}
      <Link to="/green">Green</Link> | <Link to="/yellow">Yellow</Link> |{" "}
      <Link to="/">Home</Link>
    </footer>
  );
}
