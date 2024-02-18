import React from "react";
import Headaer from "../landing-page/header ";
import Footer from "../landing-page/footer";
const LayoutUser = (props) => {
  return (
    <>
      <Headaer />
      {props.children}
      <Footer />
    </>
  );
};

export default LayoutUser;
