import { Reveal } from "../utils/Animation";
import "../App.css";

function CardProjects({ imageSrc, projectUrl, name }) {
  return (
    <>
      <div className="flex justify-center mx-auto xl:mx-0 2xl:mx-0 py-2 px-2 max-w-xs shadow-indigo-800 rounded-lg items-center mt-10 lg:mt-0 ">
        <div className="flex justify-center ">
          <figure className="h-full rounded-2xl">
            <Reveal>
              <img
                src={imageSrc}
                alt="projet numéro 1, page de connexion"
                className="h-44 object-cover rounded-xl"
              />
            </Reveal>
            <Reveal>
              <p className="text-center mt-4 font-semibold font-yatra text-white text-sm">
                {name}
              </p>
            </Reveal>
            <Reveal>
              <div className="flex justify-center ">
                <a
                  className="font-bold py-3 mt-5 w-full font-yatra text-md btn-grad"
                  href={projectUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  See Project
                </a>
              </div>
            </Reveal>
          </figure>
        </div>
      </div>
    </>
  );
}

export default CardProjects;
