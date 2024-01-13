import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div className="flex flex-col justify-start  min-h-screen bg-gray-200 m-0">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
