import React from "react";
import NavTitle from "../Navigation/NavTitle";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <section id="about-me">
      <NavTitle title={"About-Me"} />
      <div className="font-normal text-md">
        <p className="mb-4">
          If there is free time, I am now developing a whatsapp bot called
          <Link
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            to={"https://suika.pw"}
            target="_blank"
          >
            {" "}
            SuikaBot
          </Link>{" "}
          with 3 of my friends, which now has the name{" "}
          <Link
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            to={"https://github.com/orgs/SuikaBot/teams/suikadev"}
            target="_blank"
          >
            SuikaDev
          </Link>
          , with various planning and features designed to make people's work
          easier or for fun, as well as exploring the latest technology with.
        </p>
        <p className="mb-4">
          Despite being a full-stack web developer, my focus is more on the
          back-end because I am not confident in my design skills (if there is
          no reference :p).
        </p>
        <p className="mb-4">
          My free time is used for refreshing by playing game and watching anime
          , its a hard choice's beetween to playing a game or watching anime...
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
