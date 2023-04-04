import React from "react";

const skillset = [
  {
    title: "Product Design",
    desc: "I take your product concept and turn it into a usable and aesthetically pleasing product. I am focused on customer experience, user feel while ensuring more conversions, ease of use, risk reduction and product or  service clarity.",
  },
  {
    title: "Graphic Design",
    desc: "I strive to create visually stunning and impactful designs that leave a lasting impression on viewers. Through a combination of creativity, technical skill, and attention to detail, I bring concepts to life in a way that truly captures the essence of a brand or project. From logo design & branding to web design and digital graphics, my work is driven by a passion for creating compelling visuals that communicate messages effectively.",
  },
];

const Skillset = () => {
  return (
    <div className="w-10/12 mx-auto mb-5">
      <h1 className="millik text-3xl mb-5">Skillset</h1>
      <div className="flex justify-between">
        {skillset.map((each, index) => (
          <div
            style={{ background: "#1F2433", width: "48%" }}
            className="rounded-md p-4"
          >
            <h2 className="millik text-xl mb-2">{each.title}</h2>
            <p>{each.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skillset;
