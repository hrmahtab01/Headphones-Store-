import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { UpdateFollower } from "react-mouse-follower";

const Home = () => {
  return (
    <div>
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "#FFCC00",
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
        <Navbar />
      </UpdateFollower>
      <Outlet />
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "#FFCC00",
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
        <Footer />
      </UpdateFollower>
    </div>
  );
};

export default Home;
