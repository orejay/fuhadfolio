import React from "react";
import ope from "../assets/ope.png";
import LinkArrow from "./LinkArrow";
import { Link } from "react-router-dom";

const Intro = () => {
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
          <Link className="flex mr-8 lg:mb-0 lg:text-base text-sm items-center">
            Learn more about me <LinkArrow />
          </Link>
          <Link className="flex lg:text-base text-sm items-center">
            Check out my works <LinkArrow />
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
