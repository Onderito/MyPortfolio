import profilPicture from "../images/avatar.png";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

function Background() {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <motion.div
          initial={inView ? "hidden" : "visible"} // Animation initiale lorsqu'il est visible ou non
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 2, delay: 0.25 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          ref={ref}
          className="mt-20 px-9 py-5 w-[380px] mx-auto flex flex-col shadow-md bg-black shadow-blue-800 rounded-3xl lg:h-[550px] lg:w-[1000px] lg:flex-row-reverse lg:justify-center lg:items-center lg:mx-auto"
        >
          <img
            className="w-72 mx-auto"
            src={profilPicture}
            alt="Photo de profil"
          />
          <section className="lg:flex lg:flex-col-reverse pl-1 gap-8">
            <h1 className="text-4xl custom-tailwind-class font-black text-center  font-yatra mt-2 lg:order-1">
              Mon Parcours
            </h1>
            <div className="text-center pt-3 text-sm md:text-base font-bold text-white">
              <p>
                Je suis un{" "}
                <span className="bg-indigo-500 rounded-xl px-1 font-black font-yatra ">
                  développeur
                </span>{" "}
                tout juste sorti de ma formation, prêt à relever de nouveaux
                défis.
                <br />
                J'ai une passion pour le développement web, ainsi qu'un intérêt
                marqué pour l'
                <span className="text-orange-400 font-bold font-yatra">
                  UX
                </span>{" "}
                et l'
                <span className="text-orange-400 font-bold font-yatra">UI</span>
                . Mon objectif est de créer des solutions numériques innovantes
                et des interfaces utilisateur attrayantes.
              </p>
              <p className="pt-3">
                Je vous laisse explorer mes réalisations ci-dessous pour
                découvrir mes{" "}
                <span className="custom-tailwind-class font-black font-yatra">
                  projets{" "}
                </span>
                et{" "}
                <span className="custom-tailwind-class font-black font-yatra">
                  compétences.
                </span>{" "}
              </p>
            </div>
          </section>
        </motion.div>
      )}
    </InView>
  );
}

export default Background;
