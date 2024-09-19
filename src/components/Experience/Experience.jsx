import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import NavTitle from "../Navigation/NavTitle";
import experienceData from "../../utils/constant/experienceData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Experience = () => {
  const [clicked, setClicked] = useState(null);

  const handleClick = (id) => {
    setClicked(id);
  };

  return (
    <section id="experience" className="mt-16">
      <NavTitle title={"Experience"} />

      <div className="mt-5">
        <ol>
          {experienceData.map((data, index) => (
            <li key={index} className="my-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  {data.startDate} - {data.endDate}
                </header>

                <div
                  className="z-10 sm:col-span-6"
                  onClick={() => handleClick(data.id)}
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                        <Link
                          to={data.showcase}
                          target={data.showcase != null ? "_blank" : ""}
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span
                            className={
                              clicked === data.id ? "text-teal-300" : ""
                            }
                          >
                            {data.title} |
                            <span className="ml-1 inline-block">
                              {data.company}
                              {data.showcase != null && (
                                <FontAwesomeIcon
                                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-2 translate-y-px"
                                  icon="fa-solid fa-arrow-up-right-from-square"
                                />
                              )}
                            </span>
                          </span>
                        </Link>
                      </div>
                      <div
                        className={`text-slate-500 ${
                          data.exTitle_2 != null ? "block" : "hidden"
                        }`}
                      >
                        {data.exTitle_2 != null && data.exTitle_2}
                      </div>
                      <div
                        className={`mt-1 text-slate-500 ${
                          data.location != null ? "block" : "hidden"
                        }`}
                      >
                        <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                        <span className="ml-2">
                          {data.location != null && data.location}
                        </span>
                      </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      {data.description}
                    </p>
                    <ul
                      className={`mt-2 flex flex-wrap ${
                        data.links[0].show != true ? "hidden" : "block"
                      }`}
                    >
                      {data.links[0].show != false &&
                        data.links[0].data.map((link, index) => (
                          <li key={index} className="mr-4">
                            <Link
                              to={link.url}
                              target="_blank"
                              className="relative gap-2 mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-30"
                            >
                              <FontAwesomeIcon icon="fa-solid fa-link" />
                              <span>{link.name}</span>
                            </Link>
                          </li>
                        ))}
                    </ul>
                    <ul className="mt-2 flex flex-wrap">
                      {data.tags.map((tag, index) => (
                        <li key={index} className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            {tag}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
