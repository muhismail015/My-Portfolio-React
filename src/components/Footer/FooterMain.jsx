import { Link } from "react-router-dom";

const FooterMain = () => {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        Inspired Design and Layout from{" "}
        <Link
          to={"https://github.com/bchiang7"}
          target="_blank"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
        >
          Brittany Chiang
        </Link>
        . Build with{" "}
        <Link
          to={"https://react.dev/"}
          target="_blank"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
        >
          React.js{" "}
        </Link>
        <Link
          to={"https://vitejs.dev/"}
          target="_blank"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
        >
          Vite
        </Link>
        , styling using{" "}
        <Link
          to={"https://tailwindcss.com/"}
          target="_blank"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
        >
          TailwindCSS
        </Link>{" "}
        and{" "}
        <Link
          to={"https://flowbite.com/"}
          target="_blank"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
        >
          Flowbite
        </Link>
        . Backend integration soon...
      </p>
    </footer>
  );
};

export default FooterMain;
