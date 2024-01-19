import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { container, item } from "../utils/Animation";
import "../App.css";

function CardProjects({ imageSrc, projectUrl, name }) {
  return (
    <>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.div
            className="flex justify-center mx-auto xl:mx-0 2xl:mx-0 py-2 px-2 max-w-xs  shadow-indigo-800 rounded-lg items-center mt-10 lg:mt-0 "
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            ref={ref}
          >
            <motion.div className="flex justify-center " variants={item}>
              <motion.figure
                className="h-full rounded-2xl"
                transition={{ duration: 0.5 }}
                variants={item}
              >
                <img
                  src={imageSrc}
                  alt="projet numéro 1, page de connexion"
                  className="h-44 object-cover rounded-xl"
                />
                <p className="text-center mt-4 font-semibold font-yatra text-white text-sm">
                  {name}
                </p>
                <div className="flex justify-center">
                  <a
                    className="font-bold py-3 mt-5 w-full font-yatra text-md btn-grad"
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

export default CardProjects;
