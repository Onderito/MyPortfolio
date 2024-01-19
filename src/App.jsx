import "./App.css";
import HeroSection from "./components/HeroSection.jsx";
import SoftSkills from "./components/SoftSkills.jsx";
import SocialMedia from "./utils/SocialMedia.jsx";
import SubHeading from "./utils/SubHeading.jsx";
import Background from "./components/Background";
import FormContact from "./components/FormContact.jsx";
import HardSkills from "./components/HardSkills.jsx";
import CardDatas from "./constants/CardDatas.jsx";

function App() {
  return (
    <>
      <SocialMedia />
      <HeroSection />
      <Background />
      <SubHeading title="Projects" />
      <CardDatas />
      <SubHeading title="Hard Skills" />
      <HardSkills />
      <SubHeading title="Soft Skills" />
      <SoftSkills />
      <SubHeading title="Contact me" className={"mb-5"} />
      <FormContact />
    </>
  );
}

export default App;
