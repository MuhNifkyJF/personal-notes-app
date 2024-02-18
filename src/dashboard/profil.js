import React from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
const Profil = () => {
  let user = JSON.parse(Cookies.get("user"));
  return (
    <>
      <div>
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <div
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={user.image_url}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {user.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  ID : {user.id}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Create At : {user.created_at}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  email : {user.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profil;
