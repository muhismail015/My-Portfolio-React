import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import AboutMe from "../components/AboutMe/AboutMe";
import Experience from "../components/Experience/Experience";
import Education from "../components/Education/Education";
import Projects from "../components/Projects/Projects";
import { useMotionValue } from "framer-motion";
import FooterMain from "../components/Footer/FooterMain";

const Portfolio = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(event) {
    const { currentTarget, clientX, clientY } = event;
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <>
      <Layout
        leftContent={
          <>
            <Header />
          </>
        }
        rightContent={
          <>
            <AboutMe />
            <Experience />
            <Education />
            <Projects />
            <FooterMain />
          </>
        }
      />
    </>
  );
};

export default Portfolio;
