import React from "react";
import Hero from "./Hero";
import { UpdateFollower } from "react-mouse-follower";
import Service from "./Components/Service";
import Banner from "./Components/Banner";
import BannerTxt from "./Components/BannerTxt";
import Blog from "./Components/Blog";

const Index = () => {
  return (
    <div>
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
        <Hero />
      </UpdateFollower>
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "black",
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
        <Service />
      </UpdateFollower>
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "black",
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
        <Banner />
      </UpdateFollower>
      <BannerTxt />
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "black",
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
        <Blog />
      </UpdateFollower>
    </div>
  );
};

export default Index;
