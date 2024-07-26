import React from "react";
import Hero from "./Hero";
import { UpdateFollower } from "react-mouse-follower";
import Service from "./Components/Service";

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
    </div>
  );
};

export default Index;
