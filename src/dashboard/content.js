import axios from "axios";
import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../context/globalContext";

const Content = () => {
  const { state, handle } = useContext(GlobalContext);

  const {
    searchTitle,
    data,
    setData,
    fetchStatus,
    setFetchStatus,
    showDropdown,
    filterCity,
    filterCompany,
    filterTitle,
  } = state;

  const {
    handleEdit,
    handleSearchTitle,
    handleLimitWords,
    handleDelete,
    handleFilterTitle,
    handleFilterCompany,
    handleFilterCity,
    handleDropdownToggle,
  } = handle;

  useEffect(() => {
    if (fetchStatus === true) {
      axios
        .get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .then((res) => {
          setData([...res.data.data]);
        })
        .catch((error) => {
          console.log(error);
        });
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  // console.log(data);
  return (
    <>
      <div>
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="flex items-center justify-between pb-4">
                  <div>
                    <button
                      onClick={handleDropdownToggle}
                      id="dropdownRadioButton"
                      data-dropdown-toggle="dropdownRadio"
                      className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="20"
                        viewBox="0 0 22 20"
                        id="filter"
                      >
                        <path
                          fill="none"
                          fill-rule="evenodd"
                          stroke="#000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M20 0H0l8 9.46V16l4 2V9.46z"
                          transform="translate(1 1)"
                        ></path>
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
                      <div className="absolute top-12 left-0 w-48 py-2 mt-2 bg-white rounded-md shadow-lg dark:bg-gray-800">
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
                  <label htmlFor="table-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      onChange={handleSearchTitle}
                      value={searchTitle}
                      type="text"
                      id="table-search"
                      className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search for items"
                    />
                  </div>
                </div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-all-search"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="checkbox-all-search"
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Judul
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Deskripsi Pekerjaan
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Kualifikasi Pekerjaan
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Type Pekerjaan
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Type Teneru
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status Pekerjaan
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Nama Perusahaan
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Gambar Perusahaan
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Kota Perusahaan
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Minimal Gaji
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Maksimal Gaji
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  {data !== null &&
                    data
                      .filter((res) =>
                        res.title
                          .toLowerCase()
                          .includes(searchTitle.toLowerCase())
                      )
                      .filter((res) =>
                        filterTitle !== ""
                          ? res.title
                              .toLowerCase()
                              .includes(filterTitle.toLowerCase())
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
                        return (
                          <>
                            <tbody key={res.id}>
                              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                  <div className="flex items-center">
                                    <input
                                      id="checkbox-table-search-1"
                                      type="checkbox"
                                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                      htmlFor="checkbox-table-search-1"
                                      className="sr-only"
                                    >
                                      checkbox
                                    </label>
                                  </div>
                                </td>
                                <th
                                  scope="row"
                                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                  {res.title}
                                </th>
                                <td className="px-6 py-4">
                                  {handleLimitWords(res.job_description, 8)}
                                </td>
                                <td className="px-6 py-4">
                                  {handleLimitWords(res.job_qualification, 8)}
                                </td>
                                <td className="px-6 py-4">{res.job_type}</td>
                                <td className="px-6 py-4">{res.job_tenure}</td>
                                <td className="px-6 py-4">{res.job_status}</td>
                                <td className="px-6 py-4">
                                  {res.company_name}
                                </td>
                                <td className="px-6 py-4">
                                  <img
                                    class=" h-15 w-32"
                                    src={res.company_image_url}
                                  />
                                </td>
                                <td className="px-6 py-4">
                                  {res.company_city}
                                </td>
                                <td className="px-6 py-4">{res.salary_min}</td>
                                <td className="px-6 py-4">{res.salary_max}</td>
                                <td className="px-6 py-4">
                                  <button
                                    onClick={handleEdit}
                                    value={res.id}
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                  >
                                    Edit
                                  </button>
                                  <span></span>
                                  <button
                                    onClick={handleDelete}
                                    value={res.id}
                                    className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </>
                        );
                      })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
