import NavTitle from "../Navigation/NavTitle";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <section id="about-me">
      <NavTitle title={"About-Me"} />
      <div className="font-normal text-md">
        <p className="mb-4">
          {"If I have free time, I'm now developing a WhatsApp bot called"}
          <Link
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            to={"https://suika.pw"}
            target="_blank"
          >
            {" "}
            SuikaBot
          </Link>{" "}
          with three of my friends. It now has the name{" "}
          <Link
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            to={"https://github.com/orgs/SuikaBot/teams/suikadev"}
            target="_blank"
          >
            SuikaDev
          </Link>
          {`. The bot has various features and plans designed to make people's work
          easier or for fun, as well as to exploring the latest technology with.`}
        </p>
        <p className="mb-4">
          {` Despite being a full-stack web developer, my focus is more on the
          back-end because I'm not confident in my design skills (if there is no reference :p).`}
        </p>
        <p className="mb-4">
          {` My free time is used for refreshing by playing games and watching anime.
          It's a hard choice between playing a game and watching anime...`}
        </p>
      </div>

      {/* Next time... */}
      {/* <div className="font-bold text-lg text-slate-400">
        const <span className="text-amber-200">AboutMe</span> ={" "}
        <span className="text-amber-500">{"{ "}</span>`
        <br />
        <p className="ml-4 font-normal text-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
          corporis dolore nihil voluptatem quas cupiditate dolorum sit numquam
          labore? Blanditiis libero hic soluta nobis. Itaque in officia
          repudiandae illo aliquam?
        </p>
        `<span className="text-amber-500">{"}"}</span>;
      </div> */}
    </section>
  );
};

export default AboutMe;
