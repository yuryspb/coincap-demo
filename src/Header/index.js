import React from "react";
import "./styles.css";
import logo from "../ui/logo.png";

export default function() {
  return (
    <header>
      <div class="container">
        <div class="header-logo">
          <img src={logo} alt="Coincap" />
        </div>
      </div>
    </header>
  );
}
