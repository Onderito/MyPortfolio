import { motion, useTransform } from "framer-motion";
import ToDoList from "../images/todolist.png";
import weather from "../images/weather.png";
import { InView } from "react-intersection-observer";
import { container, item } from "../utils/Animation";

function ProjectCard({ imageSrc, projectUrl }) {
  return (
    <>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.div
            className="flex justify-center items-center mt-10 lg:mt-0"
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            ref={ref}
          >
            {/* Première div */}
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              className="flex justify-center"
              variants={item}
            >
              <motion.figure transition={{ duration: 0.5 }} variants={item}>
                <img
                  src={imageSrc}
                  alt="projet numéro 1, page de connexion"
                  className="w-[370px] h-[230px] lg:w-[550px] lg:h-[230px] object-cover rounded-[40px]"
                />
                <div className="flex justify-center">
                  <a
                    className="font-bold pt-3 mt-5 w-26 h-12 font-yatra text-1xl shadow-blue-800 shadow-md  text-center rounded-2xl w-[250px] border-none hover:bg-indigo-900 hover:shadow-xl text-white hover:bg-gradient-to-r from-[#4776E6] from-40% to-[#8E54E9]"
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

function Project() {
  return (
    <div className="flex-col lg:flex lg:flex-row justify-center items-center pb-20 gap-10 ">
      <ProjectCard
        imageSrc={ToDoList}
        projectUrl="https://to-do-list-sable-delta.vercel.app"
      />
      <ProjectCard
        imageSrc={weather}
        projectUrl="https://weather-app-5ocl.vercel.app"
      />
      {/* Ajoutez d'autres ProjectCard pour d'autres projets */}
    </div>
  );
}

export default Project;
