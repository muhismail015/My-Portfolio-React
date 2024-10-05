import Single from "../components/Layout/Single";
import BannerCard from "../components/ProjectsArchives/BannerCard";
import { FooterDivider } from "flowbite-react";
import GoTo from "../components/GoTo/GoTo";

const ProjectArchives = () => {
  return (
    <Single>
      <section id="project-archives" className="pt-8 sm:pt-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-200">
            Project Archives
          </h1>
          <p className="text-lg mt-2">This is the project archives page.</p>
        </div>

        <section id="project-content">
          <BannerCard />
        </section>
      </section>
      <GoTo text={"Back to main"} navigation={"prev"} back={false} to={"/"} />

      <FooterDivider />
    </Single>
  );
};

export default ProjectArchives;
