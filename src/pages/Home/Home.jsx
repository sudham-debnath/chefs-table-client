/* eslint-disable no-unused-vars */
import React from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <h1 className="text-3xl font-bold underline">Home</h1>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
