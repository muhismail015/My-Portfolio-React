import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "flowbite-react";
import Zoom from "react-medium-image-zoom";
import { Link } from "react-router-dom";
import { BoxBigLoading } from "../Loadings/Loadings";

const Card = ({ project, color, icon, allImagesLoaded }) => {
  return (
    <div className="rounded-lg p-4 shadow-2xl bg-slate-100 bg-opacity-10">
      <div className="h-auto w-full">
        {!allImagesLoaded && (
          <div className="cursor-pointer rounded-lg shadow-md mx-auto h-full">
            <BoxBigLoading />
          </div>
        )}
        <Zoom>
          <img
            className={`${
              allImagesLoaded ? "block" : "hidden"
            } rounded-lg shadow-md mx-auto h-full`}
            src={project.img[0][0]}
            alt={`preview ${project.title}`}
          />
        </Zoom>
      </div>
      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span
            className={`flex items-center justify-between gap-1 ${color} me-2 rounded bg-primary-100 px-2.5 py-1 text-xs font-medium text-slate-200`}
          >
            <FontAwesomeIcon icon={icon} /> {project.type}
          </span>
        </div>

        <p className="text-2xl font-semibold leading-tight text-slate-200 hover:underline dark:text-white line-clamp-1">
          {project.title} |
          <span className="text-lg font-semibold mt-auto ml-2">
            {project.category}
          </span>
        </p>

        <div className="flex flex-col h-full sm:min-h-[150px]">
          <div className="flex-grow">
            <div className="mt-2 flex items-center gap-2">
              <p className="line-clamp-3">{project.desc}</p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-start gap-4">
            <Link to={`/projects/${encodeURIComponent(project.title)}`}>
              <Button size={"sm"}>
                <div className="flex items-center space-x-2">
                  <span className="pt-0.5">Detail</span>
                  <FontAwesomeIcon icon="fa-solid fa-angles-right" />
                </div>
              </Button>
            </Link>
            {project.additionals.slice(2).map((additional, index) => (
              <Link key={index} to={additional.link}>
                <Button
                  disabled={!additional.link}
                  size={"sm"}
                  className="bg-transparent enabled:hover:bg-cyan-700 border-cyan-700 border-2 text-white flex items-center"
                >
                  <div className="flex items-center space-x-2">
                    <span className="pt-0.5">Preview</span>
                    <FontAwesomeIcon icon="fa-solid fa-globe" />
                  </div>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
