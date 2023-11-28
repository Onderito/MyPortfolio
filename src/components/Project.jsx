import ProjectCard from "../utils/ProjectCard";
import ToDoList from "../images/todolist.png";
import weather from "../images/weather.png";
import nike from "../images/nike.png";

function Project() {
  return (
    <div className="flex-col lg:flex lg:flex-row justify-center items-center pb-20 gap-10 ">
      <ProjectCard
        imageSrc={ToDoList}
        name={"ToDoList"}
        projectUrl="https://to-do-list-sable-delta.vercel.app"
      />
      <ProjectCard
        imageSrc={weather}
        name={"Weather App"}
        projectUrl="https://weather-app-5ocl.vercel.app"
      />
      <ProjectCard
        imageSrc={nike}
        name={"Nike Store"}
        projectUrl={"https://site-vitrine-react-tailwind.vercel.app"}
      />

      {/* Ajoutez d'autres ProjectCard pour d'autres projets */}
    </div>
  );
}

export default Project;
