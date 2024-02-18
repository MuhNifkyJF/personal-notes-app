import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/globalContext";
import axios from "axios";
import moment from "moment";
import "moment/locale/id";
import { Link } from "react-router-dom";

const SectionFilter = () => {
  const { state, handle } = useContext(GlobalContext);
  const {
    data,
    setData,
    fetchStatus,
    setFetchStatus,
    searchTitle,
    filterTitle,
    filterCity,
    filterCompany,
    showDropdown,
  } = state;

  const {
    handleLimitWords,
    handleSearchTitle,
    handleDropdownToggle,
    handleFilterTitle,
    handleFilterCity,
    handleFilterCompany,
    handleConvertRupiah
  } = handle;
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
      <div className="mt-16"></div>
      <section
        className="bg-center bg-no-repeat bg-gray-700 bg-blend-multiply"
        style={{
          backgroundImage:
            "url(https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Temukan Peluang Karir Terbaik
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Cari lowongan kerja yang sesuai dengan minat dan keterampilan Anda
          </p>
          <form className="mt-20">
            <div className="flex">
              <label
                htmlFor="search-dropdown"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Your Email
              </label>
              <p className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">
                Job Name
              </p>
              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  placeholder="Search Job..."
                  onChange={handleSearchTitle}
                  value={searchTitle}
                  required
                />
                <p className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>

      <div className="mt-20 mb-8">
        <button
          onClick={handleDropdownToggle}
          id="dropdownRadioButton"
          data-dropdown-toggle="dropdownRadio"
          className="ml-20 inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          type="button"
        >
          <svg
            className="w-4 h-4 mr-2 text-gray-400"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
          Filter
          <svg
            className="w-3 h-3 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {/* Dropdown menu */}
        {showDropdown && (
          <div className="absolute mt-14 left-0 w-48 py-2 mt-2 bg-white rounded-md shadow-lg dark:bg-gray-800">
            <label className="block px-4 py-2 text-sm text-gray-700 dark:text-white">
              Pekerjaan
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Enter Pekerjaan"
              className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none"
              onChange={handleFilterTitle}
            />
            <label className="block px-4 py-2 mt-4 text-sm text-gray-700 dark:text-white">
              Kota
            </label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Enter Kota"
              className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none"
              onChange={handleFilterCity}
            />
            <label className="block px-4 py-2 mt-4 text-sm text-gray-700 dark:text-white">
              Perusahaan
            </label>
            <input
              type="text"
              name="company"
              id="company"
              placeholder="Enter Perusahaan"
              className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none"
              onChange={handleFilterCompany}
            />
          </div>
        )}
      </div>
      <div className="mb-20 mr-20 ml-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {data !== null &&
          data
            .filter((res) =>
              res.title.toLowerCase().includes(searchTitle.toLowerCase())
            )
            .filter((res) =>
              filterTitle !== ""
                ? res.title.toLowerCase().includes(filterTitle.toLowerCase())
                : true
            )
            .filter((res) =>
              filterCity !== ""
                ? res.company_city
                    .toLowerCase()
                    .includes(filterCity.toLowerCase())
                : true
            )
            .filter((res) =>
              filterCompany !== ""
                ? res.company_name
                    .toLowerCase()
                    .includes(filterCompany.toLowerCase())
                : true
            )
            .map((res) => {
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

export default SectionFilter;
