import "./App.css";
import banner from "./images/img.png";
import Presentation from "./components/HeroSection.jsx";
import SoftSkills from "./components/SoftSkills.jsx";
import SocialMedia from "./utils/SocialMedia.jsx";
import Line from "./utils/Line.jsx";
import Title from "./utils/Title.jsx";
import Background from "./components/Background";
import Project from "./components/Project";
import FormContact from "./components/Form.jsx";
import Skills from "./components/Skills.jsx";

function App() {
  return (
    <>
      <Line />
      <div>
        <img
          className="static h-[80vh] w-full lg:object-fill object-cover"
          src={banner}
          alt="banner img"
        />
        <SocialMedia />
      </div>
      <Presentation />
      <Background />
      <Title title="Projects" />
      <Project />
      <Title title="Hard Skills" />
      <Skills />
      <Title title="Soft Skills" />
      <SoftSkills />
      <Title title="Contact me" />
      <FormContact />
    </>
  );
}

export default App;
