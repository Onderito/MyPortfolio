import React from "react";
import { motion } from "framer-motion";
// import { Typewriter, Cursor } from "react-simple-typewriter";
import "./style.css";

function Presentation() {
  return (
    <div className="ml-4 md:flex md:justify-center">
      <div className="top-10 lg:left-20 mt-10 ">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5, delay: 0.25 }}
        >
          <h2 className="text-3xl lg:text-7xl font-bold justify-center text-white">
            Hi, I'm{" "}
            <span className="custom-tailwind-class font-yatra">Ulas.</span>
          </h2>
          <p className="text-white text-2xl lg:text-2xl font-bold mt-1.5 tracking-wide">
            I'm a{" "}
            <span className="custom-gradient-text text-3xl">Javascript </span>
            <span className="font-black font-yatra ">
              Developer
              {/* <Typewriter
                words={["Developer", "Designer"]}
                loop={true}
                cursor={<Cursor />}
              /> */}
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Presentation;
