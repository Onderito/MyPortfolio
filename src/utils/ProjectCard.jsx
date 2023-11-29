import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { container, item } from "./Animation";

function ProjectCard({ imageSrc, projectUrl, name }) {
  return (
    <>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.div
            className="flex justify-center py-2 px-2 mx-11 shadow-sm shadow-indigo-800 rounded-lg items-center mt-10 lg:mt-0 "
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            ref={ref}
          >
            {/* Première div */}
            <motion.div className="flex justify-center" variants={item}>
              <motion.figure
                className="h-full rounded-2xl"
                transition={{ duration: 0.5 }}
                variants={item}
              >
                <img
                  src={imageSrc}
                  alt="projet numéro 1, page de connexion"
                  className=" max-w-xs h-44 object-cover rounded-xl"
                />
                <p className="text-center mt-4 font-semibold font-yatra text-white text-sm">
                  {name}
                </p>
                <div className="flex justify-center">
                  <a
                    className="font-bold py-3 mt-6 w-full font-yatra text-1xl  shadow-md text-center rounded-xl border-none text-white bg-gradient-to-r from-[#4776E6] from-40% to-[#8E54E9] transition-transform transform hover:scale-95 duration-200"
                    href={projectUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    See Project
                  </a>
                </div>
              </motion.figure>
            </motion.div>
          </motion.div>
        )}
      </InView>
    </>
  );
}

export default ProjectCard;
