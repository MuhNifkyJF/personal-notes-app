import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0"
            >
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTWbD0B9UDenPllJL3oJf9_JZZIPO9esR0lpnNRal1pCJriKF4m1G1XbAK-qj86HgmPh5q6_fcXKXHljRQL3w81biSDPJGIk8orYwci7IN1W3d8yya78WD89OX3kWbdBY-3m-rF8q7kTOlGNa1ZkzYe-mV3BwykvANDrEHV8d5zWcFiI97a51dSCJi/w945-h600-p-k-no-nu/logop.PNG"
                className="h-8 mr-3"
                alt=" Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Job Vacancies
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Nifky™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
