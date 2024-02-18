import { createContext } from "react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  let navigate = useNavigate();
  const [data, setData] = useState(null);
  const [searchTitle, setSearchTitle] = useState("");
  const [input, setInput] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: "",
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: "",
    salary_max: "",
    name: "",
    image_url: "",
    email: "",
    password: "",
    passwordError: "",
    emailError: "",
    nameError: "",
    imageError: "",
  });
  const [fetchStatus, setFetchStatus] = useState(true);
  const [currentId, setCurrentId] = useState(-1);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownSide, setShowDropdownSide] = useState(false);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterCity, setFilterCity] = useState("");
  const [filterCompany, setFilterCompany] = useState("");
  const handleLimitWords = (sentence, maxWords) => {
    const cleanedSentence = sentence.trim().replace(/\s\s+/g, "...");

    const words = cleanedSentence.split(" ");
    const limitedWords = words.slice(0, maxWords);

    const limitedSentence = limitedWords.join(" ");
    if (words.length > maxWords) {
      return limitedSentence + "...";
    } else {
      return limitedSentence;
    }
  };
  const handlerInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "title ") {
      setInput({ ...input, title: value });
    }
    if (name === "job_description ") {
      setInput({ ...input, job_description: value });
    }
    if (name === "job_qualification ") {
      setInput({ ...input, job_qualification: value });
    }
    if (name === "job_type ") {
      setInput({ ...input, job_type: value });
    }
    if (name === "job_tenure ") {
      setInput({ ...input, job_tenure: value });
    }
    if (name === "job_status ") {
      setInput({ ...input, job_status: value });
    }
    if (name === "company_name ") {
      setInput({ ...input, company_name: value });
    }
    if (name === "company_image_url ") {
      setInput({ ...input, company_image_url: value });
    }
    if (name === "company_city ") {
      setInput({ ...input, company_city: value });
    }
    if (name === "salary_min ") {
      setInput({ ...input, salary_min: value });
    }
    if (name === "salary_max  ") {
      setInput({ ...input, salary_max: value });
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    let {
      title,
      job_description,
      job_qualification,
      job_type,
      job_tenure,
      job_status,
      company_name,
      company_image_url,
      company_city,
      salary_min,
      salary_max,
    } = input;

    if (
      !title ||
      !job_description ||
      !job_qualification ||
      !job_type ||
      !job_tenure ||
      !job_status ||
      !company_name ||
      !company_image_url ||
      !company_city ||
      !salary_min ||
      !salary_max
    ) {
      Swal.fire({
        title: "Data tidak lengkap",
        text: "Harap isi semua field",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    if (currentId === -1) {
      axios.post(
        "https://dev-example.sanbercloud.com/api/job-vacancy",
        {
          title,
          job_description,
          job_qualification,
          job_type,
          job_tenure,
          job_status,
          company_name,
          company_image_url,
          company_city,
          salary_min,
          salary_max,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      Swal.fire({
        icon: "success",
        title: "Data Added",
        text: "The data has been successfully added.",
      })
        .then((res) => {
          setFetchStatus(true);
          console.log(res.data);
          navigate("/dashboard/list-job-vacancy");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .put(
          `https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`,
          {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max,
          },
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("token")}`,
            },
          }
        )
        .then((res) => {
          setFetchStatus(true);
          Swal.fire({
            title: "Data berhasil diperbarui!",
            text: "Data telah diperbarui dengan sukses.",
            icon: "success",
            confirmButtonText: "OK",
          });
          navigate("/dashboard/list-job-vacancy");
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            title: "Data gagal diperbarui",
            text: "Terjadi kesalahan saat memperbarui data.",
            icon: "error",
            confirmButtonText: "OK",
          });
        });
    }

    setInput({
      title: "",
      job_description: "",
      job_qualification: "",
      job_type: "",
      job_tenure: "",
      job_status: "",
      company_name: "",
      company_image_url: "",
      company_city: "",
      salary_min: "",
      salary_max: "",
    });
  };

  const handleEdit = (e) => {
    const idData = parseInt(e.target.value);

    setCurrentId(idData);
    navigate(`/dashboard/list-job-vacancy/edit/${idData}`);
    // axios
    //   .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`)
    //   .then((res) => {
    //     let data = res.data;
    //     setInput({
    //       title: data.title,
    //       job_description: data.job_description,
    //       job_qualification: data.job_qualification,
    //       job_type: data.job_type,
    //       job_tenure: data.job_tenure,
    //       job_status: data.job_status,
    //       company_name: data.company_name,
    //       company_image_url: data.company_image_url,
    //       company_city: data.company_city,
    //       salary_min: data.salary_min,
    //       salary_max: data.salary_max,
    //     });
    //   });
  };
  const handleDelete = (e) => {
    let idData = parseInt(e.target.value);

    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Anda tidak akan dapat mengembalikan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    }).then((res) => {
      if (res.isConfirmed) {
        axios
          .delete(
            `https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`,
            {
              headers: {
                Authorization: `Bearer ${Cookies.get("token")}`,
              },
            }
          )
          .then((res) => {
            setFetchStatus(true);
            Swal.fire("Berhasil", "Data berhasil dihapus", "success").then(
              () => {
                navigate("/dashboard/list-job-vacancy");
              }
            );
          })
          .catch((error) => {
            console.log(error);
            Swal.fire("Gagal", "Data gagal dihapus", "error");
          });
      } else {
        Swal.fire("Dibatalkan", "Penghapusan data dibatalkan", "info");
      }
    });
  };

  //   const [input, setInput] = useState({

  //   });

  const handleInput = (e) => {
    let value = e.target.value;
    let name = e.target.name.trim();

    setInput({ ...input, [name]: value });
  };
  const handleCreate = (e) => {
    e.preventDefault();

    let { name, image_url, email, password } = input;
    if (password.length <= 8) {
      setInput({
        ...input,
        passwordError: "Password must be at least 8 characters long.",
      });
      return;
    }
    if (email === "") {
      setInput({
        ...input,
        emailError: "Email is required.",
      });
      return;
    }
    if (name === "") {
      setInput({
        ...input,
        nameError: "Name is required.",
      });
      return;
    }
    if (image_url === "") {
      setInput({
        ...input,
        imageError: "Image is required.",
      });
      return;
    }
    axios
      .post("https://dev-example.sanbercloud.com/api/register", {
        name,
        image_url,
        email,
        password,
      })
      .then((res) => {
        // let {token} = res.data
        // Cookies.set('token', token)
        console.log(res.data);
        // Cookies.get('token')
        // console.log(token)
        // navigate('/')
        setFetchStatus(true);
        navigate("/login");
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have successfully logged in.",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Invalid email or password.",
        });
      });
  };

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };
  const handleLogin = (event) => {
    event.preventDefault();

    let { email, password } = input;
    if (password.length < 8) {
      setInput({
        ...input,
        passwordError: "Password must be at least 8 characters long.",
      });
      return;
    }
    if (email === "") {
      setInput({
        ...input,
        emailError: "Email is required.",
      });
      return;
    }

    axios
      .post(`https://dev-example.sanbercloud.com/api/login `, {
        email,
        password,
      })
      .then((res) => {
        // console.log(res.config.data)
        let data = res.data;
        let { token, user } = data;
        Cookies.set("token", data.token);
        Cookies.set("user", JSON.stringify(user));
        console.log(res.data.user);
        navigate("/");
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have successfully logged in.",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Invalid email or password.",
        });
      });
  };
  const handleSearchTitle = (e) => {
    setSearchTitle(e.target.value);
  };
  const handleFilterTitle = (event) => {
    const title = event.target.value;
    setFilterTitle(title);
  };

  const handleFilterCity = (event) => {
    const city = event.target.value;
    setFilterCity(city);
  };

  const handleFilterCompany = (event) => {
    const company = event.target.value;
    setFilterCompany(company);
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Logout",
      text: "Are you sure you want to log out?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out",
    }).then((result) => {
      if (result.isConfirmed) {
        Cookies.remove("token");
        navigate("/login");
      }
    });
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };
  const handleDropdownToggleSide = () => {
    setShowDropdownSide(!showDropdownSide);
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleConvertRupiah = (number) => {
    if (number !== null) {
      const formattedNumber = number.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      });

      const formattedDecimal = formattedNumber.replace(/,00$/, "");

      return formattedDecimal;
    } else {
      return "0";
    }
  };
  let state = {
    input,
    setInput,
    data,
    setData,
    fetchStatus,
    setFetchStatus,
    currentId,
    setCurrentId,
    searchTitle,
    setSearchTitle,
    showDropdown,
    setShowDropdown,
    filterTitle,
    filterCity,
    filterCompany,
    setShowDropdownSide,
    showDropdownSide,
    isDrawerOpen,
    setIsDrawerOpen,
  };

  const handle = {
    handlerInput,
    handlerSubmit,
    handleEdit,
    handleDelete,
    handleLimitWords,
    handleInput,
    handleCreate,
    handleLogin,
    handleChange,
    handleSearchTitle,
    handleFilterTitle,
    handleFilterCompany,
    handleFilterCity,
    handleLogout,
    handleDropdownToggle,
    handleDropdownToggleSide,
    toggleDrawer,
    handleConvertRupiah
  };
  return (
    <GlobalContext.Provider
      value={{
        state,
        handle,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
