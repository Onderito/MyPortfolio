import React from "react";
import { iconsData } from "../constants/IconData";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

export const container = {
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
              className="inline-grid grid-cols-4 px-8 gap-12 mt-10 mb-10 lg:grid-cols-8"
            >
              {iconsData.map((icon, index) => (
                <motion.img
                  className="w-16 h-16 transition duration-300 hover:scale-125"
                  key={index}
                  src={icon.src}
                  alt={icon.alt}
                />
              ))}
            </motion.div>
          </div>
        )}
      </InView>
    </>
  );
};

export default HardSkills;
