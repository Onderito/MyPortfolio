import ToDoList from "../images/todolist.png";
import weather from "../images/weather.png";
import nike from "../images/nike.png";
import CardProjects from "../components/CardProjects";

function CardDatas() {
  return (
    <div className="flex-col lg:flex lg:flex-row justify-center items-center pb-20 gap-10 ">
      <CardProjects
        imageSrc={ToDoList}
        name={"ToDoList"}
        projectUrl="https://to-do-list-sable-delta.vercel.app"
      />

      <CardProjects
        imageSrc={weather}
        name={"Weather App"}
        projectUrl="https://weather-app-5ocl.vercel.app"
      />

      <CardProjects
        imageSrc={nike}
        name={"Nike Store"}
        projectUrl={"https://site-vitrine-react-tailwind.vercel.app"}
      />

      {/* Ajoutez d'autres ProjectCard pour d'autres projets */}
    </div>
  );
}

export default CardDatas;
