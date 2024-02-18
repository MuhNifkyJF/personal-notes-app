import axios from "axios";
import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../context/globalContext"; 

const DataForm = () => {
  const { state, handle } = useContext(GlobalContext);

  const { input, setData,fetchStatus, setFetchStatus} = state;

  const {
    handlerInput,
    handlerSubmit,
  } = handle;


  useEffect(() => {
    if (fetchStatus === true) {
        axios.get("https://dev-example.sanbercloud.com/api/job-vacancy")
            .then((res) => {
                setData([...res.data.data])
            })
            .catch((error) => {
              console.log(error);
            })
        setFetchStatus(false)
    }

}, [])
  
  // console.log(data);
  return (
    <>
      <div>
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <form
              onSubmit={handlerSubmit}
              className="m-5 w-auto relative overflow-x-auto shadow-md sm:rounded-lg"
            >
              <div className="m-6">
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Judul
                  </label>
                  <input
                    onChange={handlerInput}
                    value={input.title}
                    type="text"
                    name="title "
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Input Judul"
                    // required
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Deskripsi Pekerjaan
                  </label>
                  <input
                    onChange={handlerInput}
                    value={input.job_description}
                    type="text"
                    name="job_description "
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Input Deskripsi Pekerjaan"
                    // required
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Kualifikasi Pekerjaan
                  </label>
                  <input
                    onChange={handlerInput}
                    value={input.job_qualification}
                    type="text"
                    name="job_qualification "
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Input Kualifikasi"
                    // required
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Tipe Pekerjaan
                  </label>
                  <input
                    onChange={handlerInput}
                    value={input.job_type}
                    type="text"
                    name="job_type "
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Type Pekerjaan"
                    // required
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Masa Pekerjaan
                  </label>
                  <input
                    onChange={handlerInput}
                    value={input.job_tenure}
                    type="text"
                    name="job_tenure "
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Input Masa Pekerjaan"
                    // required
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Status Pekerjaan
                  </label>
                  <input
                    onChange={handlerInput}
                    value={input.job_status}
                    type="text"
                    name="job_status "
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Status Pekerjaan"
                    // required
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Nama Perusahaan
                  </label>
                  <input
                    onChange={handlerInput}
                    value={input.company_name}
                    type="text"
                    name="company_name "
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Input Nama Perusahaan"
                    // required
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Gambar Perusahaan
                  </label>
                  <input
                    onChange={handlerInput}
                    value={input.company_image_url}
                    type="text"
                    name="company_image_url "
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Input Gambar"
                    // required
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Kota Perusahaan
                  </label>
                  <input
                    onChange={handlerInput}
                    value={input.company_city}
                    type="text"
                    name="company_city "
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Input Kota Perusahaan"
                    // required
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Minimal Gaji
                  </label>
                  <input
                    onChange={handlerInput}
                    value={input.salary_min}
                    type="number"
                    name="salary_min "
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Input minimal gaji"
                    // required
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Maksimal Gaji
                  </label>
                  <input
                    onChange={handlerInput}
                    value={input.salary_max}
                    type="number"
                    name="salary_max  "
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Input maksimal gaji"
                    // required
                  />
                </div>
                <input
                  type={"submit"}
                  className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-lime-600 dark:hover:bg-lime-700 focus:outline-none dark:focus:ring-lime-800"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataForm;
