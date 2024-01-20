import Slider from "react-slick";
import { sliderSettings, useIsDesktop } from "../utils/SliderSettings";
import { SoftSkillsData } from "../constants/SoftSkillsData";
import { Reveal } from "../utils/Animation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SoftSkills() {
  const isDesktop = useIsDesktop();

  return (
    <>
      <Reveal>
        <section className="md:grid md:grid-cols-3 md:mx-20 2xl:mx-96 pt-10 place-items-center">
          {isDesktop ? (
            SoftSkillsData.map((softSkill, index) => (
              <div
                key={index}
                className="items-center shadow-md w-[200px] h-[220px] shadow-indigo-800 mb-10 ml-2 rounded-xl"
              >
                <Reveal>
                  <h1 className="text-center pt-5 font-bold font-yatra custom-gradient-text">
                    {softSkill.name}
                  </h1>
                </Reveal>
                <Reveal>
                  <div className="flex justify-center mt-10 text-white text-5xl hover:text-indigo-400 hover:delay-75">
                    {softSkill.icon}
                  </div>
                </Reveal>
              </div>
            ))
          ) : (
            <Slider {...sliderSettings}>
              {SoftSkillsData.map((softSkill, index) => (
                <Reveal>
                  <div
                    key={index}
                    className="items-center shadow-md w-[200px] h-[220px] shadow-indigo-800 mb-10 ml-2 rounded-xl"
                  >
                    <Reveal>
                      <h1 className="text-center pt-5 font-bold font-yatra custom-gradient-text">
                        {softSkill.name}
                      </h1>
                    </Reveal>
                    <div className="flex justify-center mt-10 text-white text-5xl">
                      {softSkill.icon}
                    </div>
                  </div>
                </Reveal>
              ))}
            </Slider>
          )}
        </section>
      </Reveal>
    </>
  );
}

export default SoftSkills;
