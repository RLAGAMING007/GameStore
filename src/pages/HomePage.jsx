import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import Discover from "../components/Discover";

const HomePage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/discover" element={<Discover />} />
      </Routes>
    </>
  );
};

export default HomePage;
