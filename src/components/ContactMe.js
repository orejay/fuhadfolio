import React from "react";
import { Link } from "react-router-dom";

const ContactMe = () => {
  return (
    <div
      className="rounded-lg mx-auto w-11/12 lg:w-10/12 flex justify-center py-7 my-8 lg:my-16"
      style={{ background: "#1F2433" }}
      id="contact"
    >
      <div className="lg:w-3/12 text-center">
        <h1 className="millik mb-3">
          Ready for us to make magic together? Lets talk!
        </h1>
        <a
          className="rounded p-2 text-sm lg:text-base"
          style={{ background: "#BFC6D9", color: "#222" }}
          href="mailto:fuhad148@gmail.com"
        >
          Send a Message
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
