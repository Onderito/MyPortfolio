import profilPicture from "../images/avatar.png";

import blob from "../images/blobAnim.svg";
import { Reveal } from "../utils/Animation";

function Background() {
  return (
    <Reveal>
      <div className="w-full flex p-2 ">
        <div className="flex-1 mt-20 max-w-[1050px] relative px-9  mx-auto flex flex-col shadow-md shadow-indigo-800 rounded-3xl md:flex-row-reverse md:justify-center md:items-center md:mx-auto pb-20 pt-10">
          <div className="flex-grow-1 relative w-full mx-auto">
            <Reveal>
              <img
                className=" blur-sm opacity-25 top-0 md:right-0 lg:right-10 w-full h-full"
                src={blob}
                alt="blob animé"
              />
              <img
                className="absolute top-0 left-0 z-40 mx-auto w-full h-full p-10"
                src={profilPicture}
                alt="Photo de profil"
              />
            </Reveal>
          </div>
          <Reveal>
            <section className="lg:flex flex-2 z-50 lg:flex-col-reverse pl-1 gap-8 pt-10">
              <h1 className="text-4xl custom-tailwind-class font-black text-center font-yatra mt-2 lg:order-1">
                My Background
              </h1>

              <Reveal>
                <div className="text-center pt-3 text-sm md:text-base font-bold text-white">
                  <Reveal>
                    <p className="pt-2">
                      Je suis un{" "}
                      <span className="bg-indigo-500 rounded-xl px-1 font-black font-yatra ">
                        développeur
                      </span>{" "}
                      tout juste sorti de ma formation, prêt à relever de
                      nouveaux défis.
                    </p>
                  </Reveal>
                  <Reveal>
                    <p className="pt-2">
                      J'ai une passion pour le développement web, ainsi qu'un
                      intérêt marqué pour l'
                      <span className="text-orange-400 font-bold font-yatra">
                        UX
                      </span>{" "}
                      et l'
                      <span className="text-orange-400 font-bold font-yatra">
                        UI
                      </span>
                      . Mon objectif est de créer des solutions numériques
                      innovantes et des interfaces utilisateur attrayantes.
                    </p>
                  </Reveal>
                  <Reveal>
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
                  </Reveal>
                </div>
              </Reveal>
            </section>
          </Reveal>
        </div>
      </div>
    </Reveal>
  );
}

export default Background;
