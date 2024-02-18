import React from "react";
import Header from "../dashboard/header";
import Sidebar from "../dashboard/sidebar";
 const LayoutAdmin =(props)=>{

    return(<>
    <Header />
    <Sidebar />
    {props.children}
    </>)
 }

 export default LayoutAdmin;