import React from "react";
import { Link } from "react-router-dom";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.png";
import LinkArrow from "./LinkArrow";

const projects = [
  {
    image: proj1,
    title: "Footy Scores: A  Football App",
    desc: "This app has everything you need to stay up-to-date on the latest news, scores, and stats from the world's most exciting football league. From live match updates to...",
    link: "",
  },
  {
    image: proj2,
    title: "FindMech: A Mechanic Listing Platform",
    desc: "Your one-stop-shop for finding the best mechanics in your area! We know that finding a reliable and trustworthy mechanic can be a challenge...",
    link: "",
  },
  {
    image: proj3,
    title: "Artemis: A liquidity Pool Interface Design",
    desc: "Our platform offers a user-friendly interface that allows you to seamlessly navigate through different pools, check your liquidity, and make transactions with ease.",
    link: "",
  },
  {
    image: proj4,
    title: "Tips180 Website Design",
    desc: "This app is designed to make  This app is designed to make This app is designed to make, This app is designed...",
    link: "",
  },
];

const style = {
  color: "#BFC6D9",
};

const Projects = () => {
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto lg:py-10" id="projects">
      <h1 className="millik lg:text-4xl text-2xl mb-5">Selected Projects</h1>
      <div className="lg:flex lg:justify-between lg:flex-wrap flex-shrink-0">
        {projects.map((each, index) => (
          <div className="lg:w-6/12 h-full mb-4 mt-2">
            <img
              src={each.image}
              alt={`project-${index}`}
              className="mb-4 rounded-tl-2xl rounded-br-2xl"
            />
            <h1 className="millik text-xl lg:text-2xl lg:w-7/12">
              {each.title}
            </h1>
            <p className="lg:w-10/12 text-sm lg:text-base mb-4" style={style}>
              {each.desc}
            </p>
            <Link
              className="flex items-center text-sm lg:text-base mb-10 lg:mb-0"
              style={style}
            >
              Read More <LinkArrow />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
