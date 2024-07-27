import React, { useEffect } from "react";
import Headphones4 from "../assets/headphone4.png";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion/dom";
import { UpdateFollower } from "react-mouse-follower";
import Aos from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-14 space-y-6 md:space-y-0 gap-12">
            {/*------------banner img-------*/}
            <div>
              <motion.img
                initial={{ opacity: 0, x: -100, rotate: -180 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: easeInOut }}
                className="w-[300px] md:w-[400px]"
                src={Headphones4}
                alt="headphones 4"
              />
            </div>
            {/*------------banner text-------*/}
            <div className="flex flex-col justify-center">
              <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
                <h1
                  data-aos="fade-up"
                  data-aos-delay="150"
                  className="text-3xl lg:text-4xl font-semibold font-Poppins"
                >
                  THe Latest Headphones With Latest Technology
                </h1>
                <p data-aos="fade-up" data-aos-delay="200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione recusandae quis dolorum amet pariatur tenetur, magni
                  ad doloremque tempora temporibus?
                </p>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    mixBlendMode: "difference",
                    scale: 5,
                  }}
                >
                  <button
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="border-2 border-[#e33343] text-[#e33343] 
                    px-6 py-2 rounded-md hover:bg-[#e33343] hover:text-white duration-500"
                  >
                    Shop Now
                  </button>
                </UpdateFollower>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
