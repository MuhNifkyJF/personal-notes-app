import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Header from "../dashboard/header";
import Sidebar from "../dashboard/sidebar";
import { GlobalContext } from "../context/globalContext";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Change = () => {
  let navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState({
    current_password: "",
    new_password: "",
    new_confirm_password: "",
  });
  const [fetchStatus, setFetchStatus] = useState(true);

  const handleInput = (e) => {
    let value = e.target.value;
    let name = e.target.name.trim();

    setInput({ ...input, [name]: value });
  };
  const handleCreate = (e) => {
    e.preventDefault();

    let { current_password, new_password, new_confirm_password } = input;
    // if (password.length <= 8) {
    //   setInput({
    //     ...input,
    //     passwordError: "Password must be at least 8 characters long.",
    //   });
    //   return;
    // }
    // if (email === "") {
    //   setInput({
    //     ...input,
    //     emailError: "Email is required.",
    //   });
    //   return;
    // }
    // if (name === "") {
    //   setInput({
    //     ...input,
    //     nameError: "Name is required.",
    //   });
    //   return;
    // }
    // if (image_url === "") {
    //   setInput({
    //     ...input,
    //     imageError: "Image is required.",
    //   });
    //   return;
    // }
    axios
      .post(
        "https://dev-example.sanbercloud.com/api/change-password",
        {
          current_password,
          new_password,
          new_confirm_password,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      )
      .then((res) => {
        // let {token} = res.data
        // Cookies.set('token', token)
        console.log(res.data);
        // Cookies.get('token')
        // console.log(token)
        // navigate('/')
        setFetchStatus(true);
        navigate("/profil");
        Swal.fire({
          icon: "success",
          title: "Change Password Successful",
          text: "You have successfully logged in.",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Change Password Failed",
          text: "Invalid password.",
        });
      });

      
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <>
      <div>
        <Header />
        <Sidebar />
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <h2 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {" "}
              Change Your Password
            </h2>
            <form onSubmit={handleCreate} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="current_password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Current Password
                </label>
                <div className="relative">
                  <input
                    onChange={handleInput}
                    value={input.current_password}
                    type={showPassword ? "text" : "password"}
                    name="current_password"
                    id="current_password"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="password"
                    // required
                  />
                  <div
                    className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      className="text-gray-400"
                    />
                  </div>
                </div>
                {input.nameError && (
                  <p className="text-red-500 text-sm">{input.nameError}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="new_password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  New Password
                </label>
                <div className="relative">
                  <input
                    onChange={handleInput}
                    value={input.new_password}
                    type={showPassword ? "text" : "password"}
                    name="new_password"
                    id="new_password"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="password"
                    // required
                  />
                  <div
                    className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      className="text-gray-400"
                    />
                  </div>
                </div>
                {input.emailError && (
                  <p className="text-red-500 text-sm">{input.emailError}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="new_confirm_password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  New Confirm Password
                </label>
                <div className="relative">
                  <input
                    onChange={handleInput}
                    value={input.new_confirm_password}
                    type={showPassword ? "text" : "password"}
                    name="new_confirm_password"
                    id="new_confirm_password"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="password"
                    // required
                  />
                  <div
                    className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      className="text-gray-400"
                    />
                  </div>
                </div>
                {input.passwordError && (
                  <p className="text-red-500 text-sm">{input.passwordError}</p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      // required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
              </div>
              <button
                type={"submit"}
                className="w-full text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-lime-600 dark:hover:bg-lime-700 focus:outline-none dark:focus:ring-lime-800"
              >
                Change
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Change;
