import React from "react";
import banner from "../images/img.png";
import { Reveal } from "../utils/Animation";
import "./style.css";

function HeroSection() {
  return (
    <>
      <img
        className="h-[80vh] lg:w-full object-cover "
        src={banner}
        alt="banner img"
      />

      <div className="ml-4 md:flex md:justify-center">
        <div className="top-10 lg:left-20 mt-10 ">
          <div>
            <Reveal>
              <h2 className="text-5xl lg:text-7xl font-bold justify-center text-white">
                Hi, I'm{" "}
                <span className="custom-tailwind-class font-yatra">Ulas.</span>
              </h2>
            </Reveal>

            <Reveal>
              <p className="text-white lg:ml-0.5 text-2xl lg:text-3xl font-bold mt-1.5 tracking-wide">
                I'm a{" "}
                <span className="custom-gradient-text text-2xl">
                  Javascript{" "}
                </span>
                <span className="font-black font-yatra"> Developer</span>
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
