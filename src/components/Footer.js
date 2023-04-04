import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-4 flex items-center">
      <div className="w-10/12 mx-auto flex items-center justify-between">
        <Link to="/" className="w-1/12">
          <Logo />
        </Link>
        <p>Fuhad148@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
