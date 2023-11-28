import sql from "../images/sql.png";
import node from "../images/node.png";
import sequelize from "../images/Sequelize.png";

import "./style.css";

function HardSkillsBack() {
  return (
    <div className=" flex flex-row h-48 shadow-md shadow-indigo-800 gap-3 pt-5 pl-2 border-gradient justify-center items-center">
      <img
        className="w-[50px] transition-transform transform-gpu hover:scale-125"
        src={sql}
        alt=""
      />
      <img
        className="w-[50px] transition-transform transform-gpu hover:scale-125"
        src={node}
        alt=""
      />
      <img
        className="w-[50px] transition-transform transform-gpu hover:scale-125"
        src={sequelize}
        alt=""
      />
    </div>
  );
}

export default HardSkillsBack;
