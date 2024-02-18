import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import moment from "moment";
import "moment/locale/id";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/globalContext";

const Detail = () => {
  const { handle } = useContext(GlobalContext);
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const { handleConvertRupiah } = handle;

  const timeAgo = data ? moment(data.updated_at).locale("id").fromNow() : "";

  return (
    <>
      <div className="mt-16"></div>
      {data && (
        <div className="max-w-2xl mx-auto p-4">
          <img
            // className="mt-2 h-24 w-1/2 rounded-t-lg mx-auto"
            src={data.company_image_url}
            alt=""
          />
          <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
          <div className="mb-4">
            <strong>Company Name: </strong>
            {data.company_name}
          </div>
          <div className="mb-4">
            <strong>Gaji: </strong>
            {handleConvertRupiah(data.salary_min)} -{" "}
            {handleConvertRupiah(data.salary_max)}
          </div>
          <div className="mb-4">
            <strong>Dibuat: </strong>
            {timeAgo}
          </div>
          <div className="mb-4">
            <strong>Job Type: </strong>
            {data.job_type}
          </div>
          <div>
            <strong>Job Description: </strong>
            <p>{data.job_description}</p>
          </div>
          <div>
            <strong>Job Qualification: </strong>
            <p>{data.job_qualification}</p>
          </div>
          <div>
            <strong>Job Tenure: </strong>
            <p>{data.job_tenure}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
