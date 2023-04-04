import React from "react";

import SocialMedia from "./SocialMedia";

const Plea = () => {
  return (
    <div className="w-10/12 mx-auto my-16">
      <hr />
      <p className="py-5 w-6/12 text-center mx-auto">
        I am always looking for new challenges and friends! Don’t air me. shoot
        me an email or reach out on social media. 😊
      </p>
      <SocialMedia style={`mb-5`} />
      <hr />
    </div>
  );
};

export default Plea;
