import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useAnimation } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollY / windowHeight) * 100;
    setScrollProgress(progress);

    if (scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 1, y: 50 });
    }
  }, [isVisible, controls]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isVisible && (
        <div className="relative flex items-center justify-center">
          <motion.div
            className="bg-cyan-700 w-12 h-12 rounded-full flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.3 }}
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          >
            <div className="absolute w-12 h-12 rounded-full border-4 border-cyan-700 flex items-center justify-center">
              <motion.div
                className="absolute w-full h-full rounded-full border-4 border-slate-100"
                style={{ clipPath: `inset(0 0 0 ${100 - scrollProgress}%)` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <FontAwesomeIcon
              className="text-xl text-slate-100"
              icon="fa-solid fa-up-long"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
