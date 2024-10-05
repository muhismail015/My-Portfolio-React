const Tags = ({ project }) => {
  return (
    <ul className="mt-2 flex flex-wrap">
      {project.map((tag, index) => (
        <li key={index} className="mr-1.5 mt-2">
          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
            {tag}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Tags;
