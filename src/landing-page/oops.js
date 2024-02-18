import React from "react";
import { Link } from "react-router-dom";

const Oops = () => {
  return (
    <>
      <div className="mt-16"></div>
      <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="text-lime-900 mb-8 font-extrabold text-9xl dark:text-gray-600">
              <span className="text-lime-900 sr-only">Error</span>Oops
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Only Admin Can Access Dashboard
            </p>
            <p className="mt-4 mb-8 dark:text-gray-400">Please Login First</p>
            <Link to={"/login"}>
              <button
                type="button"
                className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-lime-600 dark:hover:bg-lime-700 focus:outline-none dark:focus:ring-lime-800"
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Oops;
