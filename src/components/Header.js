import React, { useState } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";

const nav = [
  { name: "About Me", link: "/about" },
  { name: "Projects", link: "projects" },
  { name: "UIs", link: "/uis" },
  { name: "Contact Me", link: "contact" },
];

const Header = () => {
  const [tabNo, setTabNo] = useState(0);

  return (
    <div
      className="w-full lg:flex hidden lg:h-20 justify-center items-center"
      style={{ background: "#171B26" }}
    >
      <div
        className="w-10/12 flex items-center justify-between"
        style={{ color: "#BFC6D9" }}
      >
        <Link to="/" className="w-1/12">
          <Logo />
        </Link>
        <div className="flex w-4/12 items-center justify-between">
          {nav.map((each, index) =>
            ["About Me", "UIs"].includes(each.name) ? (
              <Link
                to={each.link}
                key={index}
                onClick={() => setTabNo(index + 1)}
                className={`${tabNo === index + 1 ? "underline" : ""}`}
              >
                {each.name}
              </Link>
            ) : (
              <a
                // href={each.link}
                onClick={() => {
                  scroller.scrollTo(each.link, { smooth: true });
                  setTabNo(index + 1);
                }}
                className={`cursor-pointer ${
                  tabNo === index + 1 ? "underline" : ""
                }`}
                key={index}
              >
                {each.name}
              </a>
            )
          )}
        </div>
        <SocialMedia />
      </div>
    </div>
  );
};

export default Header;
