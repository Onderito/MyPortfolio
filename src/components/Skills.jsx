import "./style.css";
import HardSkillsFront from "./HardSkillsFront";
import HardSkillsBack from "./HardSkillsBack";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { container, item } from "../utils/Animation";

function Skills() {
  return (
    <>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            ref={ref}
            className="flex justify-center items-center pb-20"
          >
            <motion.div
              variants={item}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row gap-20 text-2xl font-bold"
            >
              <h3 className="custom-tailwind-class font-yatra shadow-xl w-[250px] text-center  lg:mr-64 ">
                Front
                <HardSkillsFront />
              </h3>

              <h3 className="custom-tailwind-class font-yatra w-[250px] text-center ">
                Back
                <HardSkillsBack />
              </h3>
            </motion.div>
          </motion.div>
        )}
      </InView>
    </>
  );
}

export default Skills;
