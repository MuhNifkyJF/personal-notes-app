import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Jumbotron = () => {
  const sentences = [
    "Cari lowongan kerja yang sesuai dengan minat dan keterampilan Anda",
    "Pilih dari berbagai industri dan bidang pekerjaan",
    "Dapatkan akses ke ribuan lowongan pekerjaan terbaru",
    "Tingkatkan peluang karir Anda dengan kami",
    "Tersedia peluang kerja menarik dari perusahaan terkemuka",
  ];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(true);
      setCurrentSentenceIndex((prevIndex) =>
        prevIndex === sentences.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentSentenceIndex]);

  return (
    <>
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
          {isVisible ? (
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
              {sentences[currentSentenceIndex]}
            </p>
          ) : (
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
              <span className="invisible">&nbsp;</span>
            </p>
          )}
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            
            <Link to={'/vacancy'}><a
              href="#"
              className="w-full inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-lime-900 hover:bg-lime-950 focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-900"
            >
              Vacancies
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-4 h-4"
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
              
            </a></Link>
            <Link to={'/dashboard'}>
            <button
              href="#"
              className="w-full inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Dashboard
            </button>
            </Link>
            
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Jumbotron;
