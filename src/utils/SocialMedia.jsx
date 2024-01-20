import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Reveal } from "../utils/Animation";

function SocialMedia() {
  return (
    <div className="flex justify-end w-full absolute top-0 right-4 pt-20 lg:px-20">
      <div className="flex absolute gap-8 ">
        <Reveal>
          <FontAwesomeIcon
            onClick={() => {
              window.open("https://www.linkedin.com/in/ulasonder/");
            }}
            className="w-8 h-8 cursor-pointer"
            icon={faLinkedinIn}
            style={{ color: "#ffffff" }}
          />
        </Reveal>
        <Reveal>
          <FontAwesomeIcon
            onClick={() => {
              window.open("https://github.com/Onderito?tab=repositories");
            }}
            className="w-8 h-8 cursor-pointer"
            icon={faGithub}
            style={{ color: "#ffffff" }}
          />
        </Reveal>
      </div>
    </div>
  );
}

export default SocialMedia;
