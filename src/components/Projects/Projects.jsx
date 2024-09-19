import { useState } from "react";
import NavTitle from "../Navigation/NavTitle";
import { Link } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import projectsData from "../../utils/constant/projectsData";
import { motion } from "framer-motion";

const Projects = () => {
  const [clicked, setClicked] = useState(null);

  const handleClick = (id) => {
    setClicked(id);
  };
  return (
    <section
      id="projects"
      className="pt-10 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <NavTitle title={"Projects"} />

      <div>
        <ul className="group/list mt-8">
          {projectsData.map((project, index) => (
            <li
              key={index}
              className="mb-12"
              onClick={() => handleClick(project.id)}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:order-2 sm:col-span-5">
                    <h3>
                      <Link
                        to={project.link}
                        target="_blank"
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span
                          className={
                            clicked === project.id ? "text-teal-300" : ""
                          }
                        >
                          {project.title} -{" "}
                          <span className="inline-block">
                            {project.category}
                            <FontAwesomeIcon
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-2 translate-y-px"
                              icon={"fa-solid fa-arrow-up-right-from-square"}
                            />
                          </span>
                        </span>
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      {project.desc}
                    </p>
                    {project.additionals[0].show && (
                      <Link
                        to={project.additionals[0].link}
                        target="_blank"
                        className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                      >
                        <FontAwesomeIcon
                          className="mr-1 h-3 w-3"
                          icon={project.additionals[0].icon}
                        />
                        <span>{project.additionals[0].text}</span>
                      </Link>
                    )}
                    <ul className="mt-2 flex flex-wrap">
                      {project.tag.map((tag, index) => (
                        <li key={index} className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            {tag}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="sm:col-span-3">
                    <Zoom className={"hidden"}>
                      <img
                        className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1  sm:translate-y-1"
                        src={project.img}
                        alt=""
                        style={{ color: "transparent" }}
                      />
                    </Zoom>
                  </div>
                </div>
              </motion.div>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <Link
            to={"/"}
            className="inline-flex items-center font-medium leading-tight text-slate-200 group"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                View Full Project Archive
              </span>
              <span className="whitespace-nowrap">
                <FontAwesomeIcon
                  className="ml-2 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                  icon={"fa-solid fa-arrow-right-long"}
                />
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
