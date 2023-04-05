import React, { useState } from "react";
import ope from "../assets/ope.png";
import LinkArrow from "./LinkArrow";
import { Link } from "react-router-dom";

const Intro = () => {
  const [hov, setHov] = useState(false);
  const [tab, setTab] = useState(0);

  return (
    <div className="w-11/12 lg:w-10/12 h-screen mx-auto mb-10 lg:mb-0 flex flex-col-reverse lg:flex lg:flex-row">
      <div className="lg:w-1/2 flex flex-col lg:justify-center">
        <h1 className="millik text-2xl lg:text-5xl mb-3 lg:mb-5">
          Hi, I am Fuhad
        </h1>
        <p
          className="mb-5 lg:text-base text-sm lg:w-11/12"
          style={{ color: "#BFC6D9" }}
        >
          I am a Product Designer from Nigeria. My drive is geared towards
          creating a product, system, or service to achieve the client’s set
          goals with utmost satisfaction. I specialize in designing user
          interfaces, digital products, and beautiful experiences for my users.
          I take your product concept and turn it into a usable and
          aesthetically pleasing product.
        </p>
        <div className="flex" style={{ color: "#BFC6D9" }}>
          <Link
            className="flex lg:text-base text-sm items-center hover:text-link"
            onMouseEnter={() => {
              setHov(!hov);
              setTab(2);
            }}
            onMouseLeave={() => {
              setHov(!hov);
              setTab(0);
            }}
          >
            Check out my works
            <span
              className={`transition-all duration-500 ${
                hov && tab === 2 ? "translate-y-[-3px]" : ""
              }`}
            >
              <LinkArrow colorr={hov ? "#D9B14E" : "#BFC6D9"} />
            </span>
          </Link>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center lg:items-center mb-8">
        <img src={ope} alt="ope" className="lg:w-8/12" />
      </div>
    </div>
  );
};

export default Intro;
