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
  const [openNav, setOpenNav] = useState(false);

  return (
    <div
      className="w-full lg:flex lg:h-20 sticky top-0 h-16 justify-center items-center"
      style={{ background: "#171B26" }}
    >
      <div
        className="w-11/12 lg:w-10/12 mx-auto py-5  bg-green-400 px-3 flex items-center justify-between"
        style={{ color: "#BFC6D9" }}
      >
        <Link to="/" className="w-1/12">
          <Logo />
        </Link>
        <div className="" onClick={() => setOpenNav(!openNav)}>
          <ion-icon
            size="large"
            name={!openNav ? "grid-outline" : "close-outline"}
          ></ion-icon>
        </div>
        <div
          className={`lg:flex ${
            !openNav ? "hidden" : ""
          } lg:w-9/12 justify-between`}
        >
          <div className="lg:flex lg:flex-row flex flex-col w-6/12 items-center justify-between">
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
    </div>
  );
};

export default Header;
