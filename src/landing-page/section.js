import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/globalContext";
import axios from "axios";
import moment from "moment";
import "moment/locale/id";
import { Link } from "react-router-dom";
import Jumbotron from "./jumbotron";

const Section = () => {
  const { state, handle } = useContext(GlobalContext);


  const { data, setData, fetchStatus, setFetchStatus } = state;

  const { handleLimitWords,handleConvertRupiah } = handle;
  // registerLocale('id', id);

  useEffect(() => {
    if (fetchStatus === true) {
      axios
        .get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .then((res) => {
          console.log(res.data);
          setData([...res.data.data]);
        })
        .catch((error) => {
          console.log(error);
        });
      setFetchStatus(false);
    }
  }, []);
  return (
    <>
      <div className="mt-16"> 
      </div>
      <Jumbotron/>
      <div className="-mx-4 mt-10 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-[60px] max-w-[510px] text-center">
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
              Jelajahi Dunia Pekerjaan
            </h2>
            <p className="text-base text-body-color">
              Cari lowongan kerja yang sesuai dengan minat dan keterampilan Anda
            </p>
          </div>
        </div>
      </div>

      <div className="mb-20 mr-20 ml-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {data !== null &&
          data.map((res) => {
            const timeAgo = moment(res.updated_at).locale("id").fromNow();
            return (
              <>
                 <div
                    key={res.id}
                    className={`col-span-1 max-w-sm bg-white border border-gray-200 rounded-lg shadow ${
                      res.job_status === 0 ? "opacity-50" : ""
                    } dark:bg-gray-800 dark:border-gray-700`}
                  >
                    <a href="#">
                      <img
                        className="mt-2 h-24 w-1/2 rounded-t-lg mx-auto"
                        src={res.company_image_url}
                        alt=""
                      />
                    </a>
                    <div className="p-5">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {res.title}
                        </h5>
                      </a>
                      <h4 className="mb-3 font-bold text-gray-700 dark:text-gray-400">
                        {res.company_name}
                      </h4>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Gaji : {handleConvertRupiah(res.salary_min)} -{" "}
                        {handleConvertRupiah(res.salary_max)}
                      </p>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Dibuat : {timeAgo}
                      </p>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {handleLimitWords(res.job_description, 15)}
                      </p>
                      <Link to={`/detail/${res.id}`}>
                        <button
                          disabled={res.job_status === 0}
                          className="bg-lime-900 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-lime-700 rounded-lg hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
                        >
                          Read more
                          <svg
                            aria-hidden="true"
                            className="w-4 h-4 ml-2 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </Link>
                    </div>
                  </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Section;
