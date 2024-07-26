import React from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { SlEarphones } from "react-icons/sl";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";

const Navbar = () => {
  const NavbarMenu = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Categories",
      link: "/",
    },
    {
      id: 3,
      title: "Blog",
      link: "/",
    },
    {
      id: 4,
      title: "About",
      link: "/",
    },
    {
      id: 5,
      title: "Contact",
      link: "/",
    },
  ];
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="bg-BrandDarkL text-white py-8 font-Varela"
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <h2>
              <Link to="/" className="text-xl font-bold uppercase">
                {" "}
                Playing /{" "}
                <span className="font-extralight text-white/70">Market</span>
              </Link>
            </h2>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-4">
              {NavbarMenu.map((item) => (
                <li key={item.id} className="">
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: "white",
                      zIndex: 999,
                      followSpeed: 1.5,
                      scale: 5,
                      mixBlendMode: "difference",
                    }}
                  >
                    <Link
                      className="inline-block text-sm py-2 px-3 uppercase"
                      to={item.link}
                    >
                      {item.title}
                    </Link>
                  </UpdateFollower>
                </li>
              ))}
              <button className="text-xl ps-14">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 999,
                    followSpeed: 1.5,
                    scale: 5,
                    mixBlendMode: "difference",
                  }}
                >
                  <SlEarphones />
                </UpdateFollower>
              </button>
            </ul>
          </div>
          <div className="md:hidden ">
            <CiMenuBurger className="text-4xl" />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
