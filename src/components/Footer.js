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
        <a
          href="mailto:fuhad148@gmail.com"
          className="hover:text-link
        "
        >
          Fuhad148@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
