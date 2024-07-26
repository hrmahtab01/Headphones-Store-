import React, { useState } from "react";
import Headphone1 from "../src/assets/headphone.png";
import Headphone2 from "../src/assets/headphone2.png";
import Headphone3 from "../src/assets/headphone3.png";
import { FaWhatsapp } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

const HeadphoneData = [
  {
    id: 1,
    image: Headphone1,
    title: "Headphones Wireless 1",
    Subttile:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat non hic sed architecto commodi maxime?",
    price: "$100",
    Modal: "Modal Brown",
    bgcolor: "#8b5958",
  },
  {
    id: 2,
    image: Headphone2,
    title: "Headphones Wireless 2",
    Subttile:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat non hic sed architecto commodi maxime?",
    price: "$100",
    Modal: "Lime Green",
    bgcolor: "#638153",
  },
  {
    id: 3,
    image: Headphone3,
    title: "Headphones Wireless 3",
    Subttile:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat non hic sed architecto commodi maxime?",
    price: "$100",
    Modal: "Ocean Blue",
    bgcolor: "#5d818c",
  },
];

const fadeup = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 0,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        case: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.5,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};

const Hero = () => {
  const [ActiveData, SetActiveData] = useState(HeadphoneData[0]);

  let HandleActiveData = (headphonesdata) => {
    SetActiveData(headphonesdata);
  };

  return (
    <>
      <section className="bg-BrandDarkL text-white font-Varela">
        <div className="container">
          <div className="grid  grid-cols-1  md:grid-cols-2 min-h-[700px]">
            <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
              <div className="space-y-5 text-center md:text-left">
                <AnimatePresence mode="wait">
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: "white",
                      zIndex: 9999,
                      followSpeed: 0.5,
                      rotate: -720,
                      mixBlendMode: "difference",
                      scale: 10,
                    }}
                  >
                    <motion.h1
                      key={ActiveData.id}
                      variants={fadeup(0.2)}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className="text-3xl lg:text-6xl font-bold font-Varela"
                    >
                      {ActiveData.title}
                    </motion.h1>
                  </UpdateFollower>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={ActiveData.id}
                    variants={fadeup(0.4)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-sm leading-loose text-white/80"
                  >
                    {ActiveData.Subttile}
                  </motion.p>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: ActiveData.bgcolor,
                      zIndex: 9999,
                      followSpeed: 0.5,
                      rotate: -720,
                      scale: 6,
                      backgroundElement: (
                        <div>
                          <img src={ActiveData.image} />
                        </div>
                      ),
                    }}
                  >
                    <motion.button
                      key={ActiveData.id}
                      variants={fadeup(0.5)}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      style={{ backgroundColor: ActiveData.bgcolor }}
                      className="px-4 py-2 font-normal rounded-sm"
                    >
                      Buy And Listen
                    </motion.button>
                  </UpdateFollower>
                </AnimatePresence>
                <div className="flex items-center justify-center md:justify-start gap-4 !mt-24">
                  <div className="w-20 h-[1px] bg-white"></div>
                  <p className="uppercase text-sm">Top Headphones for you</p>
                  <div className="w-20 h-[1px] bg-white"></div>
                </div>
                <div className="grid grid-cols-3 gap-10">
                  {HeadphoneData.map((item) => (
                    <UpdateFollower 
                    mouseOptions={{
                        backgroundColor:item.bgcolor,
                        zIndex:9999,
                        followSpeed:0.5,
                        rotate:-720,
                        scale:4,
                        text:"View Details",
                        textFontSize:"3px"

                    }}
                    >
                      <div
                        key={item.id}
                        onClick={() => HandleActiveData(item)}
                        className="grid grid-cols-2 place-items-center cursor-pointer md:space-x-8"
                      >
                        <div>
                          <img
                            className="w-[200px]"
                            src={item.image}
                            alt={item.id}
                          />
                        </div>
                        <div className="space-y-2  ">
                          <p className="text-base font-bold">{item.price}</p>
                          <p className="text-xs font-normal text-nowrap">
                            {item.Modal}
                          </p>
                        </div>
                      </div>
                    </UpdateFollower>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end items-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={ActiveData.id}
                  initial={{ opacity: 0, scale: 0.9, y: 100 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2, ease: easeInOut }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    y: 100,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                  className="w-[300px] md:w-[400px] xl:w-[550px]"
                  src={ActiveData.image}
                  alt={ActiveData.id}
                />
              </AnimatePresence>
            </div>
            <div className="text-3xl text-black fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[999] mix-blend-difference">
              <a href="#">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
