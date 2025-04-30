import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
function Footer() {
  let Location =
    "https://www.google.com/maps?ll=29.404426,76.97936&z=17&t=m&hl=en&gl=IN&mapclient=embed&q=Bhawna+Chowk+Tehsil+Camp+Panipat+Taraf+Ansar,+Panipat,+Haryana+132103";
  let insta = "https://www.instagram.com/kamal_pandey_27/?hl=en";
  let fb = "https://www.facebook.com/profile.php?id=100025514138525";
  let twitter = "https://x.com/?lang=en";
  let linkdin = "https://www.linkedin.com/in/kamal-pandey-132733262/";

  return (
    <>
      <footer className="w-screen  grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1   bg-blue-600 text-white">
        <div className=" flex flex-col gap-5 p-3 items-center md:border-r lg:border-b-0 border-b">
          <div className="text-xl/15 font-semibold border-b-2 w-fit ">
            About Lab
          </div>
          <div className="text-center lg:text-[16px] md:text-[15px] text-[14px]">
            {" "}
            We are a NABL-certified diagnostic lab committed to accurate and
            timely test results, trusted by 10,000+ patients.
          </div>
        </div>
        <div className=" flex flex-col gap-5 p-3 items-center lg:border-r lg:border-b-0 border-b">
          <div className="text-xl/15 font-semibold border-b-2 w-fit">
            Quick Links
          </div>
          <div className="flex flex-col gap-2 lg:text-[16px] md:text-[15px] text-[14px]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive ? "border-b-2" : "border-b-0"
                } w-fit hover:border-b-2 hover:border-white transition-all duration-100 ease-in-out`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `${
                  isActive ? "border-b-2" : "border-b-0"
                } w-fit hover:border-b-2 hover:border-white transition-all duration-100 ease-in-out`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/AppointmentForm"
              className={({ isActive }) =>
                `${
                  isActive ? "border-b-2" : "border-b-0"
                } w-fit hover:border-b-2 hover:border-white transition-all duration-100 ease-in-out`
              }
            >
              Book Test
            </NavLink>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                `${
                  isActive ? "border-b-2" : "border-b-0"
                } w-fit hover:border-b-2 hover:border-white transition-all duration-100 ease-in-out`
              }
            >
              Contact Us
            </NavLink>
            <NavLink
              to={Location}
              target="_blank"
              className={({ isActive }) =>
                `${
                  isActive ? "border-b-2" : "border-b-0"
                } w-fit hover:border-b-2 hover:border-white transition-all duration-100 ease-in-out`
              }
            >
              Location
            </NavLink>
          </div>
        </div>
        <div className=" flex flex-col gap-5 p-3  items-center sm:border-r sm:border-b-0 border-b">
          <div className="text-xl/15 font-semibold border-b-2 w-fit">
            Open Hours
          </div>
          <div className="flex flex-col gap-2 lg:text-[16px] md:text-[15px] text-[14px] w-[90%]">
            <div className="text-center">
              We’re here to serve you with expert care and support during the
              following hours:
            </div>
            <div className="flex justify-between">
              <span>Monday - Friday</span>
              <span>8:00AM - 9:00PM</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday</span>
              <span>9:00AM - 6:00PM</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday</span>
              <span>Holiday</span>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-5 p-3 items-center">
          <div className="text-xl/15 font-semibold border-b-2 w-fit">
            Social Links
          </div>
          <div className="flex flex-col gap-2">
            <NavLink
              to={twitter}
              className="lg:text-2xl text-xl  p-3 border w-fit border-white rounded-full cursor-pointer hover:bg-white hover:text-blue-600 transition-all duration-300 ease-in-out"
              target="_blank"
            >
              <FaTwitter />
            </NavLink>
            <NavLink
              to={insta}
              className="lg:text-2xl text-xl p-3 border  w-fit border-white rounded-full cursor-pointer hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 transition-all duration-300 ease-in-out"
              target="_blank"
            >
              <FaInstagram />
            </NavLink>
            <NavLink
              to={fb}
              className="lg:text-2xl text-xl p-3 border  w-fit border-white rounded-full cursor-pointer  hover:bg-white hover:text-blue-600 transition-all duration-300 ease-in-out"
              target="_blank"
            >
              <FaFacebookF />
            </NavLink>
            <NavLink
              to={linkdin}
              className="lg:text-2xl text-xl p-3 border  w-fit border-white rounded-full cursor-pointer  hover:bg-white hover:text-blue-600 transition-all duration-300 ease-in-out"
              target="_blank"
            >
              <FaLinkedinIn />
            </NavLink>
          </div>
        </div>
      </footer>
      <div className="text-center bg-blue-700 w-screen p-3 text-white">
        © 2025 AnandLab. All Rights Reserved.
      </div>
    </>
  );
}

export default Footer;
