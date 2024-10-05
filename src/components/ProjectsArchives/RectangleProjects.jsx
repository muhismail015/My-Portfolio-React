import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import Zoom from "react-medium-image-zoom";

const RectangleProjects = ({ filteredData }) => {
  const genap = (index) => {
    return index % 2 === 0;
  };

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

  return (
    <>
      {filteredData.map((project, index) => {
        const { icon, color } = getIconAndColor(project.type);
        return (
          <div
            key={index}
            className={`transition gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 sm:py-16 lg:px-6 md:grid md:grid-cols-2 ${
              genap(index) ? "md:grid-cols-2 md:flex-row-reverse" : ""
            }`}
          >
            <div className={`w-full ${!genap(index) ? "block md:hidden" : ""}`}>
              <Zoom>
                <img
                  className="border-2 sm:border-4 border-transparent bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-xl shadow-md"
                  src={project.img[0][0]}
                  alt={`preview ${project.title}`}
                />
              </Zoom>
            </div>

            <div
              className={`mt-4 md:mt-0 ${
                !genap(index) ? "md:text-right " : ""
              }`}
            >
              <h2
                className={`flex items-center ${
                  !genap(index) ? "md:justify-end" : ""
                } text-slate-200 text-2xl sm:text-4xl tracking-tight font-bold`}
              >
                {project.title} |
                <span className="text-lg font-semibold mt-auto ml-2">
                  {project.category}
                </span>
              </h2>
              <div
                className={`mb-3 mt-2 flex items-center ${
                  !genap(index) ? "md:justify-end" : ""
                } gap-4`}
              >
                <span
                  className={`mt-2 flex items-center justify-between gap-1 ${color} me-2 rounded bg-primary-100 px-2.5 py-1 text-xs font-medium text-slate-200`}
                >
                  <FontAwesomeIcon icon={icon} /> {project.type}
                </span>
              </div>
              <p className="mb-6 font-light text-slate-400 md:text-lg">
                {project.desc}
              </p>
              <div
                className={`flex gap-3 justify-start md:justify-${
                  !genap(index) ? "end" : "start"
                }`}
              >
                <Link to={`/projects/${encodeURIComponent(project.title)}`}>
                  <Button size={"sm"}>
                    <div className="flex items-center space-x-2">
                      <span>Detail</span>
                      <FontAwesomeIcon icon="fa-solid fa-angles-right" />
                    </div>
                  </Button>
                </Link>
                {project.additionals.slice(2).map((additional, index) => (
                  <Link key={index} to={additional.link}>
                    <Button
                      disabled={additional.link ? false : true}
                      size={"sm"}
                      className="bg-transparent enabled:hover:bg-cyan-700 border-cyan-700 border-2 text-white flex items-center"
                    >
                      <div className="flex items-center space-x-2">
                        <span>Preview</span>
                        <FontAwesomeIcon icon="fa-solid fa-globe" />
                      </div>
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
            <div
              className={`w-full hidden ${
                genap(index) ? "md:hidden" : "md:block"
              }`}
            >
              <Zoom>
                <img
                  className="border-2 sm:border-4 border-transparent bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-xl shadow-md"
                  src={project.img[0][0]}
                  alt={`project ${project.title}`}
                />
              </Zoom>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RectangleProjects;
