import React, { useEffect, useState } from "react";
import Icon1 from "../assets/icons/obj1.png";
import Icon2 from "../assets/icons/obj2.png";
import Icon3 from "../assets/icons/obj3.png";
import { UpdateFollower } from "react-mouse-follower";
import Aos from "aos";
import "aos/dist/aos.css";

const ServiceData = [
  {
    id: 1,
    title: "Security",
    icon: Icon1,
    desc: " dolor sit amet consectetur adipisicing elit. Aut debitis repellendus nemo atque quos repudiandae sit amet consectetur adipisicing elit. Aut.",
    delay: 200,
  },
  {
    id: 2,
    title: "Ourantee",
    icon: Icon2,
    desc: " dolor sit amet consectetur adipisicing elit. Aut debitis repellendus nemo atque quos repudiandae sit amet consectetur adipisicing elit. Aut.",
    delay: 250,
  },
  {
    id: 3,
    title: "Affordability",
    icon: Icon3,
    desc: " dolor sit amet consectetur adipisicing elit. Aut debitis repellendus nemo atque quos repudiandae sit amet consectetur adipisicing elit. Aut.",
    delay: 300,
  },
];

const Service = () => {
  let [ActiveService, SetactiveService] = useState([0]);

  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <section className="bg-gray-100 font-Poppins py-8">
        <div className="container py-14">
          <div>
            <h1 className="text-3xl font-bold text-center pb-10">Service</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ServiceData.map((data) => (
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 9999,
                  followSpeed: 0.5,
                  rotate: -720,
                  scale: 5,
                  backgroundElement: (
                    <div>
                      <img src={data.icon} />
                    </div>
                  ),
                }}
              >
                <div
                  data-aos="fade-up"
                  data-aos-delay="350"
                  className="flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white"
                >
                  <img
                    className="w-[100px] mb-4"
                    src={data.icon}
                    alt={data.id}
                  />
                  <div>
                    <h1 className="text-2xl font-bold text-center mb-2">
                      {data.title}
                    </h1>
                    <p className="text-center text-sm text-black/75">
                      {data.desc}
                    </p>
                  </div>
                </div>
              </UpdateFollower>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
