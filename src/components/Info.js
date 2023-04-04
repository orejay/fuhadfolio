import React from "react";
import ope from "../assets/ope.png";
import LinkArrow from "./LinkArrow";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className="w-10/12 h-screen mx-auto flex">
      <div className="w-1/2 flex flex-col justify-center">
        <h1 className="millik text-5xl mb-5">Hi, I am Fuhad</h1>
        <p className="mb-5 text-base w-11/12">
          I am a Product & Graphic designer based in Nigeria. I enjoy creating
          experiences that are built for everyone to use and enjoy without any
          stress. <br />
          <br /> My journey into UI/UX design was a happy accident. I had a
          friend who was into graphic design and I started learning from him. I
          heard about UI/UX design on twitter and I started learning and doing
          more research on it. <br />
          <br /> The fact that I can help people make money and help businesses
          scale is fascinating. Working with startups has taught me how to
          utilize design to solve business problems, and it has also pushed me
          to grow as a designer. <br />
          <br /> When I am not designing, I play football, thrash my friends on
          FIFA, or playing other video games.
        </p>
      </div>
      <div className="w-1/2 flex justify-center items-center mb-28">
        <img src={ope} alt="ope" className="w-2/3" />
      </div>
    </div>
  );
};

export default Info;