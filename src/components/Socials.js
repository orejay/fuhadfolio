import React from "react";
import { Link } from "react-router-dom";
import LinkArrow from "./LinkArrow";

const socials = [
  { name: "My Dribble", link: "https://dribbble.com/kingfuhad1" },
  { name: "My Behance", link: "https://www.behance.net/fuhadadegbenro" },
  { name: "My LinkedIn", link: "https://www.linkedin.com/in/fuhad-adegbenro/" },
  { name: "My Twitter", link: "https://twitter.com/kingfuhad1" },
];

const Socials = () => {
  return (
    <div
      className="rounded-lg mx-auto w-11/12 lg:w-10/12 flex px-3 flex-wrap lg:flex-nowrap lg:text-xl lg:justify-around py-5 lg:py-10 my-8 lg:my-16"
      style={{ background: "#1F2433" }}
    >
      {socials.map((each, index) => (
        <a
          key={index}
          href={each.link}
          className="millik flex items-center mx-auto underline"
          style={{ color: "#BFC6D9" }}
        >
          {each.name} <LinkArrow />
        </a>
      ))}
    </div>
  );
};

export default Socials;
