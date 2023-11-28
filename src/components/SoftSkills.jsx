import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderSettings, useIsDesktop } from "../utils/SliderSettings";
import { SoftSkillsData } from "../constants/SoftSkillsData";
import { motion } from "framer-motion";
import { container } from "../utils/Animation"; // Import des animations
import { InView } from "react-intersection-observer";

function SoftSkills() {
  const isDesktop = useIsDesktop();

  return (
    <>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <section className="md:grid md:grid-cols-3 md:mx-20 2xl:mx-96  place-items-center">
            {isDesktop ? (
              SoftSkillsData.map((softSkill, index) => (
                <motion.div
                  variants={container} // Utilisation de l'animation container
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  ref={ref}
                  key={index}
                  className="items-center shadow-md w-[200px] h-[220px] shadow-indigo-800 mb-10 ml-2 rounded-xl"
                >
                  <h1 className="text-center pt-5 font-bold font-yatra custom-gradient-text">
                    {softSkill.name}
                  </h1>
                  <div className="flex justify-center mt-10 text-white text-5xl transition-transform transform-gpu hover:scale-125">
                    {softSkill.icon}
                  </div>
                </motion.div>
              ))
            ) : (
              <Slider {...sliderSettings}>
                {SoftSkillsData.map((softSkill) => (
                  <motion.div className="items-center shadow-md w-[200px] h-[220px] shadow-indigo-800 mb-10 ml-2 rounded-xl">
                    <h1 className="text-center pt-5 font-bold font-yatra custom-gradient-text">
                      {softSkill.name}
                    </h1>
                    <div className="flex justify-center mt-10 text-white text-5xl ">
                      {softSkill.icon}
                    </div>
                  </motion.div>
                ))}
              </Slider>
            )}
          </section>
        )}
      </InView>
    </>
  );
}

export default SoftSkills;
