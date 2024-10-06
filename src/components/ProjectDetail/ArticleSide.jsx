import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialMedia from "../SocialMedia/SocialMedia";

const ArticleSide = ({ project }) => {
  const github = project.additionals.slice(1)[0];
  const demo = project.additionals.slice(1)[1];

  return (
    <div className="pt-10 sm:pt-24 basis-2/6">
      <aside className="sticky top-8">
        <div className="mb-2 bg-slate-100 bg-opacity-10 p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-slate-50">More Info</h3>
          <p className="my-2">
            Provide details about the project, such as a preview or code.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-3 w-full">
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              className="flex-1 w-full"
            >
              <Link to={github.link} target="_blank">
                <Button disabled={!github.link} size={"sm"} className="w-full">
                  <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon="fa-brands fa-github" />
                    <span>Code</span>
                  </div>
                </Button>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              className="flex-1 w-full"
            >
              <Link to={demo.link} target="_blank">
                <Button
                  disabled={!demo.link}
                  size={"sm"}
                  className="w-full bg-transparent enabled:hover:bg-cyan-700 border-cyan-700 border-2 text-white flex items-center"
                >
                  <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon="fa-solid fa-globe" />
                    <span>Preview</span>
                  </div>
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="my-4 bg-slate-100 bg-opacity-10 p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-slate-50 mb-3">
            Contact Me:
          </h3>

          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.9 }}
            className="flex-1 w-full"
          >
            <Link to={"mailto:muhaisim7@gmail.com"} target="_blank">
              <Button size={"sm"} className="w-full">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon="fa-regular fa-envelope" />
                  <span>Email</span>
                </div>
              </Button>
            </Link>
          </motion.div>
        </div>
        <div className=" p-2 rounded-lg bg-slate-100 bg-opacity-10 flex justify-center items-center">
          <SocialMedia className={"mx-2"} top="mt-auto" />
        </div>
      </aside>
    </div>
  );
};

export default ArticleSide;
