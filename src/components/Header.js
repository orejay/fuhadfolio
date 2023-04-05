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
  const [active, setActive] = useState(true);
  var route = window.location.href.split("/")[3];
  const clearActive = () => {
    setActive(true);
  };

  return (
    <div className="w-full lg:flex lg:h-20 sticky shadow-lg bg-backgrnd top-0 h-16 justify-center items-center z-20">
      <div className="w-11/12 lg:w-10/12 mx-auto bg-backgrnd text-tex py-4 px-3 md:flex items-center justify-between">
        <Link to="/" className="w-1/12">
          <Logo clearActive={(props) => clearActive(props)} />
        </Link>
        <div
          className="text-4xl absolute right-6 top-6 cursor-pointer lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          <ion-icon
            size="large"
            name={!openNav ? "grid-outline" : "close-outline"}
          ></ion-icon>
        </div>
        <ul
          className={`md:flex md:w-9/12 items-center justify-between absolute md:static bg-backgrnd md:z-auto z-[-1] left-0 w-full text-xl h-screen md:h-auto pb-7 md:pb-0 pl-7 md:pl-0 transition-all ease-in-out duration-500 ${
            openNav ? "top-16" : "top-[-1490px]"
          }`}
        >
          {nav.map((each, index) =>
            ["About Me", "UIs"].includes(each.name) ? (
              <li className="md:my-0 my-5">
                <Link
                  to={each.link}
                  key={index}
                  onClick={() => {
                    setActive(true);
                    scroll.scrollToTop();
                  }}
                  className={`${
                    active && route === each.link.slice(1) ? "text-pressed" : ""
                  }`}
                >
                  {each.name}
                </Link>
              </li>
            ) : (
              <li className="md:my-0 my-5">
                <a
                  onClick={() => {
                    scroller.scrollTo(each.link, { smooth: true, offset: -64 });
                    setTabNo(index + 1);
                    setActive(false);
                  }}
                  className={`cursor-pointer ${
                    !active && tabNo === index + 1 ? "text-pressed" : ""
                  }`}
                  key={index}
                >
                  {each.name}
                </a>
              </li>
            )
          )}
          <SocialMedia
            style={`md:justify-center md:items-center justify-end mr-16 items-center`}
          />
        </ul>
      </div>
    </div>
  );
};

export default Header;
