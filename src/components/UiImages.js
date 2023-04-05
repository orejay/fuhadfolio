import React from "react";
import ui1 from "../assets/ui1.png";
import ui2 from "../assets/ui2.png";
import ui3 from "../assets/ui3.png";
import ui4 from "../assets/ui4.png";
import ui5 from "../assets/ui5.png";
import ui6 from "../assets/ui6.png";
import ui7 from "../assets/ui7.png";
import ui8 from "../assets/ui8.png";

const images = [ui1, ui2, ui3, ui4, ui5, ui6, ui7, ui8];

const UiImages = () => {
  return (
    <div className="w-10/12 mx-auto py-20">
      <div className="flex flex-wrap justify-between">
        {images.map((each, index) => (
          <img
            src={each}
            alt={`image-${index}`}
            key={index}
            className="mb-10"
          />
        ))}
      </div>
    </div>
  );
};

export default UiImages;
