import "./App.css";
import banner from "./images/img.png";
import Presentation from "../src/components/Presentation.jsx";
import SoftSkills from "./components/SoftSkills.jsx";
import SocialMedia from "./components/SocialMedia";

import Line from "./components/Line";
import Title from "./components/Title";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Background from "./components/Background";

import Project from "./components/Project";

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
      <Footer />
    </>
  );
}

export default App;
