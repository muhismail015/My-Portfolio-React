import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    {
      name: "About Me",
      url: "about-me",
    },
    {
      name: "Experience",
      url: "experience",
    },
    {
      name: "Education",
      url: "education",
    },
    {
      name: "Projects",
      url: "projects",
    },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="nav hidden lg:block">
      <ul className="lg:mt-6 lg:mb-6 w-max uppercase">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.url}
              smooth={true}
              duration={500}
              className={`group flex items-center py-3 cursor-pointer`}
            >
              <span
                className={`nav-indicator mr-4 h-px  transition-all ${
                  activeSection === item.url.substring(0)
                    ? "w-16 bg-slate-200"
                    : "w-8 bg-slate-600"
                } group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
              ></span>
              <span
                className={`nav-text text-xs font-bold uppercase tracking-widest  ${
                  activeSection === item.url.substring(0)
                    ? "text-slate-200 "
                    : "text-slate-500"
                } group-hover:text-slate-200 group-focus-visible:text-slate-200`}
              >
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
