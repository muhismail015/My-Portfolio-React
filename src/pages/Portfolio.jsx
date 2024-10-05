import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import AboutMe from "../components/AboutMe/AboutMe";
import Experience from "../components/Experience/Experience";
import Education from "../components/Education/Education";
import Projects from "../components/Projects/Projects";
import FooterMain from "../components/Footer/FooterMain";
import Skills from "../components/Skills/Skills";

const Portfolio = () => {
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
            <Skills />
            <Projects />
            <FooterMain />
          </>
        }
      />
    </>
  );
};

export default Portfolio;
