import { useParams } from "react-router-dom";
import Single from "../components/Layout/Single";
import projectsData from "../utils/constant/projectsData";
import NotFound from "./NotFound";
import Article from "../components/ProjectDetail/Article";
import ArticleSide from "../components/ProjectDetail/ArticleSide";
import Cards from "../components/Cards/Cards";
import data from "../utils/constant/projectsData";
import { FooterDivider } from "flowbite-react";
import GoTo from "../components/GoTo/GoTo";

const ProjectDetail = () => {
  const { title } = useParams();
  const project = projectsData.find(
    (proj) => proj.title === decodeURIComponent(title)
  );

  if (!project) {
    return <NotFound />;
  }

  const getIconAndColor = (type) => {
    let icon, color;

    switch (type) {
      case "Backend":
        icon = "fa-solid fa-terminal";
        color = "bg-blue-800";
        break;
      case "Frontend":
        icon = "fa-solid fa-laptop-code";
        color = "bg-green-800";
        break;
      case "Frontend & Backend":
        icon = "fa-solid fa-code";
        color = "bg-cyan-800";
        break;
      case "UI/UX":
        icon = "fa-brands fa-figma";
        color = "bg-indigo-800";
        break;
      default:
        icon = "fa-solid fa-code";
        color = "bg-cyan-800";
    }

    return { icon, color };
  };
  const { icon, color } = getIconAndColor(project.type);

  return (
    <>
      <Single>
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 dark:bg-gray-900 antialiased">
          <GoTo
            text={"Back to Projects"}
            navigation={"prev"}
            back={false}
            to={"/projects"}
          />
          <div className="flex flex-col md:flex-row mt-5 px-1 md:px-4 mx-auto max-w-screen-xl md:space-x-3">
            <Article project={project} color={color} icon={icon} />
            <ArticleSide project={project} />
          </div>
        </main>

        <aside aria-label="Other projects" className="py-8">
          <div className="mx-auto max-w-screen-xl">
            <h2 className="px-2 text-3xl font-bold text-slate-100">
              Other projects
            </h2>
            <Cards
              filteredData={data}
              px="px-auto"
              className="sm:grid-cols-2 lg:grid-cols-4"
              randomize={true}
              useSlice={true}
              sliceCount={4}
            />
          </div>
        </aside>
        <FooterDivider />
      </Single>
    </>
  );
};

export default ProjectDetail;
