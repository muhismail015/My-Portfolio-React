import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";

const GoTo = ({ text, navigation, back, to, mx = "mx-1" }) => {
  const navigate = useNavigate();

  return (
    <Link
      onClick={back ? () => navigate(-1) : null}
      to={back ? "" : to}
      className={`"inline-flex items-center font-medium leading-tight text-slate-200 group ${mx} mb-10"`}
    >
      <span>
        <span className={`whitespace-nowrap ${mx}`}>
          {navigation === "next" ? (
            <>
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                {text}
              </span>
              <span className="inline-block">
                <FontAwesomeIcon
                  className={`ml-2 h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-2 motion-reduce:transition-none`}
                  icon={"fa-solid fa-arrow-right-long"}
                />
              </span>
            </>
          ) : (
            <>
              <span className="inline-block">
                <FontAwesomeIcon
                  className={`mr-2 h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-2 motion-reduce:transition-none`}
                  icon={"fa-solid fa-arrow-left-long"}
                />
              </span>
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                {text}
              </span>
            </>
          )}
        </span>
      </span>
    </Link>
  );
};

export default GoTo;
