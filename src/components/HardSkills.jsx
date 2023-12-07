import React from "react";
import reactIcon from "../images/react-svgrepo-com.svg";
import cssIcon from "../images/css-3-svgrepo-com.svg";
import htmlIcon from "../images/html-5-svgrepo-com.svg";
import tailwindIcon from "../images/tailwind-svgrepo-com.svg";
import appwriteIcon from "../images/icon.svg";
import nodeIcon from "../images/node-js-svgrepo-com.svg";
import javascriptIcon from "../images/javascript-svgrepo-com.svg";
import nextjsIcon from "../images/nextjs-svgrepo-com (1).svg";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1, // le temps que dure l'animation
    },
  },
};

const HardSkills = () => {
  return (
    <>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <div className="flex justify-center">
            <motion.div
              animate={inView ? "visible" : "hidden"}
              ref={ref}
              variants={container}
              className="inline-grid grid-cols-4 px-8 gap-12 mt-10 lg:grid-cols-8"
            >
              <img
                className="w-16 h-16 transition duration-300 hover:scale-125"
                src={cssIcon}
                alt="css Icon"
              />
              <img
                className="w-16 h-16 transition duration-300 hover:scale-125"
                src={htmlIcon}
                alt="html Icon"
              />
              <img
                className="w-16 h-16 transition duration-300 hover:scale-125"
                src={javascriptIcon}
                alt="javascriptIcon"
              />
              <img
                className="w-16 h-16 transition duration-300 hover:scale-125"
                src={reactIcon}
                alt="React Icon"
              />
              <img
                className="w-16 h-16 transition duration-300 hover:scale-125"
                src={tailwindIcon}
                alt="tailwind Icon"
              />
              <img
                className="w-16 h-16 transition duration-300 hover:scale-125"
                src={appwriteIcon}
                alt="appwrite Icon"
              />
              <img
                className="w-16 h-16 transition duration-300 hover:scale-125"
                src={nodeIcon}
                alt="node Icon"
              />
              <img
                className="w-16 h-16 transition duration-300 hover:scale-125"
                src={nextjsIcon}
                alt="nextjs Icon"
              />
            </motion.div>
          </div>
        )}
      </InView>
    </>
  );
};

export default HardSkills;
