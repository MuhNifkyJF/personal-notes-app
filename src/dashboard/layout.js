import React from "react";

const Layout = () => {
  return (
    <>
      <div>
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
              <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                  <h2 className=" text-lime-900 mb-8 font-extrabold text-5xl dark:text-gray-600">
                    <span className="sr-only">Error</span>Selamat Datang di Dashboard Admin
                  </h2>
                  <p className="text-2xl font-semibold md:text-3xl">
                    Anda dapat melakukan Cerate,Read, Update dan Delete
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
