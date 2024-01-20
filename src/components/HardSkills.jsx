import React from "react";
import { iconsData } from "../constants/IconData";
import { Reveal } from "../utils/Animation";
const HardSkills = () => {
  return (
    <>
      <Reveal>
        <div className="flex justify-center">
          <div className="inline-grid grid-cols-4 px-8 gap-12 my-10 lg:grid-cols-8">
            {iconsData.map((icon, index) => (
              <img
                className="w-16 h-16 transition duration-300 hover:scale-125"
                key={index}
                src={icon.src}
                alt={icon.alt}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </>
  );
};

export default HardSkills;
