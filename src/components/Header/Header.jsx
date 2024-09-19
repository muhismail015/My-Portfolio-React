import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import SocialMedia from "../SocialMedia/SocialMedia";
import Navigation from "../Navigation/Navigation";
import { motion } from "framer-motion";

import MyCv from "../../../public/mycv.pdf";

const Header = () => {
  return (
    <div className="flex flex-col lg:h-screen">
      <header className="flex flex-col flex-grow">
        <div className="text-slate-200">
          <h1 className="font-black text-4xl">Muhammad Ismail</h1>
          <h6 className="font-medium mt-3 text-lg max-w-xs leading-normal">
            Junior Full-Stack Web Developer
          </h6>
        </div>
        <p className="mt-4 max-w-md leading-normal">
          {`I'm a Junior Full-stack Web Developer. Experience in independent study, volunteering, and
          collaborative projects. I'm adaptable and driven, skilled in solving
          problems and eager to grow and contribute.`}
        </p>

        {/* Action Button */}
        <div className="mt-6 flex items-center gap-3">
          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.9 }}>
            <Button pill>
              <Link to={"mailto:muhaisim7@gmail.com"}>
                <div className="flex items-center space-x-1">
                  <FontAwesomeIcon icon="fa-regular fa-envelope" />
                  <span>Email Me</span>
                </div>
              </Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.9 }}>
            <Link to={MyCv} target="_blank" rel="noopener noreferrer">
              <Button
                className="bg-transparent enabled:hover:bg-cyan-700 border-cyan-700 border-2 text-white flex items-center"
                pill
              >
                View CV
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Navigation */}
        <Navigation />

        {/* Social Media */}
        <SocialMedia />
      </header>
    </div>
  );
};

export default Header;
