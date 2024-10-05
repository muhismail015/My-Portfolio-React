import Card from "./Card";

const Cards = ({
  filteredData,
  className = "sm:grid-cols-2 lg:grid-cols-3",
  px = "px-4 md:px-7",
  useSlice = false,
  randomize = false,
  sliceCount = 4,
}) => {
  const dataToDisplay = [...filteredData]
    .sort(randomize ? () => Math.random() - 0.5 : undefined)
    .slice(useSlice ? 0 : undefined, useSlice ? sliceCount : undefined);

  const getIconAndColor = (type) => {
    let icon, color;

    switch (type) {
      case "Backend":
        icon = "fa-solid fa-terminal";
        color = "bg-blue-800";
        break;
      case "Frontend":
        icon = "fa-solid fa-laptop-code";
        color = "bg-green-800";
        break;
      case "Frontend & Backend":
        icon = "fa-solid fa-code";
        color = "bg-cyan-800";
        break;
      case "UI/UX":
        icon = "fa-brands fa-figma";
        color = "bg-indigo-800";
        break;
      default:
        icon = "fa-solid fa-code";
        color = "bg-cyan-800";
    }

    return { icon, color };
  };

  return (
    <div className={`mx-auto max-w-screen-xl ${px} mt-10`}>
      <div className={`mb-4 grid gap-4 md:mb-8 ${className}`}>
        {dataToDisplay.map((project, index) => {
          const { icon, color } = getIconAndColor(project.type);
          return (
            <Card key={index} project={project} icon={icon} color={color} />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
