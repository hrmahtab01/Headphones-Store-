import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import paymentimg from "../assets/credit-cards.webp";

const Footer = () => {
  return (
    <>
      <footer className="bg-Primary pt-12 pb-8 text-white overflow-hidden">
        <div className="container">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-2 md:space-y-2 lg:space-y-0 ">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold uppercase">Playing</h2>
              <p className="text-sm max-w-[300px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                recusandae cum cupiditate laboriosam itaque? Possimus at illum
                repudiandae labore vitae?
              </p>
              <div>
                <p className="flex items-center gap-2">
                  <FaPhone />
                  01723473565
                </p>
                <p className="flex items-center gap-2">
                  <FaMapLocation />
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">Quick Links</h1>
              <div className="grid grid-cols-2 ">
                <div className="">
                  <ul className="space-y-2">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact US</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact US</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold">Follow Us</h1>
              <div className="flex items-center gap-3 mt-1">
                <FaFacebook className="text-3xl hover:scale-105 duration-300" />
                <FaInstagram className="text-3xl hover:scale-105 duration-300" />
                <FaTelegram className="text-3xl hover:scale-105 duration-300" />
                <FaGoogle className="text-3xl hover:scale-105 duration-300" />
              </div>
              <div className="mt-3">
                <p>Payment Method</p>
                <img
                  src={paymentimg}
                  alt="payment img"
                  className="w-[80%] mt-1"
                />
              </div>
            </div>
          </div>
            <p className="text-center text-white mt-8 pt-8 border-t-2">© 2024. All Right Reserved ।। Mahtab </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
