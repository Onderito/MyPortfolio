import "./style.css";

import js from "../images/Javascript.png";
import html from "../images/html.png";
import css from "../images/css-3.png";
import react from "../images/React.png";
import typescript from "../images/Typescript_logo_2020.svg.png";
import tailwind from "../images/tailwind.png";

function HardSkillsFront() {
  return (
    <div className="flex flex-wrap py-10 shadow-md shadow-indigo-800 px-1 relative gap-3 pl-2 border-gradient justify-center items-center">
      <img
        className="w-[50px] transition-transform transform-gpu hover:scale-125"
        src={html}
        alt="image html"
      />
      <img
        className="w-[50px] transition-transform transform-gpu hover:scale-125"
        src={css}
        alt="image css"
      />
      <img
        className="w-[50px] transition-transform transform-gpu hover:scale-125"
        src={js}
        alt="image Javascript"
      />
      <img
        className="w-[50px] transition-transform transform-gpu hover:scale-125"
        src={react}
        alt="image react"
      />
      <img
        className="w-[50px] transition-transform transform-gpu hover:scale-125"
        src={typescript}
        alt="image typescript"
      />
      <img
        className="w-[50px] transition-transform transform-gpu hover:scale-125"
        src={tailwind}
        alt="image tailwind"
      />
    </div>
  );
}

export default HardSkillsFront;
