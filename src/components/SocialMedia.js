import React from "react";
import LinkedIn from "./LinkedIn";
import Twitter from "./Twitter";
import Instagram from "./Instagram";

const SocialMedia = ({ style }) => {
  return (
    <div className={`flex justify-center ${style} items-center`}>
      <a href="https://www.linkedin.com/in/fuhad-adegbenro/" target="_blank">
        <LinkedIn />
      </a>
      <a href="https://twitter.com/kingfuhad1" target="_blank">
        <Twitter />
      </a>
      <a href="https://www.instagram.com/f.a__designs/" target="_blank">
        <Instagram />
      </a>
    </div>
  );
};

export default SocialMedia;
