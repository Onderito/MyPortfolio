import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";

export const softSkillsData = [
  {
    name: "Effective Communication",
    icon: <FontAwesomeIcon icon={faComments} />,
  },
  { name: "TeamWork", icon: <FontAwesomeIcon icon={faUserGroup} /> },
  { name: "Adaptability", icon: <FontAwesomeIcon icon={faPuzzlePiece} /> },
  { name: "Independence", icon: <FontAwesomeIcon icon={faPerson} /> },
  { name: "Creativity", icon: <FontAwesomeIcon icon={faBrain} /> },
  {
    name: "Time Management",
    icon: <FontAwesomeIcon icon={faHourglassHalf} />,
  },
];

// compétence + icon concernant les soft skills.
