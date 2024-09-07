import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="bg-slate-900 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 text-center">
        <div className="mx-auto max-w-screen-sm">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-slate-300 md:text-4xl dark:text-white">
            Page Not Found.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page.
          </p>
          <Link
            to={"/"}
            className="inline-flex text-slate-300 bg-cyan-700 hover:bg-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
          >
            Go Back...
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
