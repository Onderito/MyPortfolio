import { Reveal } from "../utils/Animation";

export default ({ title, className }) => {
  return (
    <>
      <div>
        <div
          className={`relative flex justify-center items-center mt-20 mb-20 ${className}`}
        >
          <Reveal>
            <h2 className="text-4xl lg:text-5xl underline-offset-2 font-bold font-yatra custom-tailwind-class">
              {title}
            </h2>
          </Reveal>
          <div className="w-[250px] h-[50px] absolute rounded-full blur-2xl custom-gradient-class opacity-20 "></div>
        </div>
      </div>
    </>
  );
};
