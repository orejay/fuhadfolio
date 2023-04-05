import React, { useState } from "react";
import LinkArrow from "./LinkArrow";

const socials = [
  { name: "My Dribble", link: "https://dribbble.com/kingfuhad1" },
  { name: "My Behance", link: "https://www.behance.net/fuhadadegbenro" },
  { name: "My LinkedIn", link: "https://www.linkedin.com/in/fuhad-adegbenro/" },
  { name: "My Twitter", link: "https://twitter.com/kingfuhad1" },
];

const Socials = () => {
  const [hov, setHov] = useState(false);
  const [tab, setTab] = useState(0);

  return (
    <div
      className="rounded-lg mx-auto w-11/12 lg:w-10/12 flex px-3 flex-wrap lg:flex-nowrap lg:text-xl lg:justify-around md:h-24 py-7 md:py-0 my-8 lg:my-16"
      style={{ backgroundColor: "#1F2433" }}
    >
      {socials.map((each, index) => (
        <a
          key={index}
          href={each.link}
          className="millik flex items-center px-8 mx-auto h-full underline text-tex hover:text-link"
          onMouseEnter={() => {
            setHov(!hov);
            setTab(index + 1);
          }}
          onMouseLeave={() => {
            setHov(!hov);
            setTab(0);
          }}
        >
          {each.name}{" "}
          <span
            className={`transition-all duration-500 ${
              hov && tab === index + 1 ? "translate-y-[-5px]" : ""
            }`}
          >
            <LinkArrow colorr={hov ? "#D9B14E" : "#BFC6D9"} />
          </span>
        </a>
      ))}
    </div>
  );
};

export default Socials;
