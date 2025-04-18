import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { menu, closeMenu } from "../assets/index";
function Header() {
  const [Navlist, setNavlist] = useState("translate-x-[200%]");

  const OpenMenu = () => {
    setNavlist("translate-x-0");
  };
  const CloseMenu = () => {
    setNavlist("translate-x-[200%]");
  };
  return (
    <>
      {/* navbar start */}

      <nav className=" bg-white sticky top-0 z-50 flex justify-between items-center w-full h-[60px] px-4">
        {/* navbarLogo */}

        <div className="text-blue-600 font-bold cursor-pointer lg:text-[25px] md:text-[16px] text-[17px]">
          <Link to="/">
            Anand <span className="text-gray-700">Lab</span>
          </Link>
        </div>
        {/* Navbar List and this is for laptop and tablet */}
        <div className=" hidden sm:flex justify-center items-center md:gap-5   sm:gap-3 h-full">
          <li className="list-none cursor-pointer  text-center lg:w-[100px] md:w-[80px] sm:w-[70px]  lg:text-[17px] md:text-[16px] sm:text-[14px]  h-full ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-blue-800 font-semibold border-b-[3px] border-blue-800  "
                    : "text-black"
                }  h-full flex items-center justify-center  hover:border-b-[3px] hover:font-semibold  hover:border-blue-800  hover:text-blue-800 transition-all duration-100 ease-in-out`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="list-none cursor-pointer  text-center lg:w-[100px] md:w-[80px] sm:w-[70px]  lg:text-[17px] md:text-[16px] sm:text-[15px]  h-full ">
            {" "}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-blue-800 font-semibold border-b-[3px] border-blue-800  "
                    : "text-black"
                }  h-full flex items-center justify-center  hover:border-b-[3px] hover:font-semibold  hover:border-blue-800  hover:text-blue-800 transition-all duration-100 ease-in-out`
              }
            >
              About Us
            </NavLink>
          </li>
          <li className="list-none cursor-pointer  text-center lg:w-[100px] md:w-[80px] sm:w-[70px]  lg:text-[17px] md:text-[16px] sm:text-[15px]  h-full ">
            {" "}
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-blue-800 font-semibold border-b-[3px] border-blue-800  "
                    : "text-black"
                }  h-full flex items-center justify-center  hover:border-b-[3px] hover:font-semibold  hover:border-blue-800  hover:text-blue-800 transition-all duration-100 ease-in-out`
              }
            >
              Services
            </NavLink>
          </li>
          <li className="list-none cursor-pointer  text-center lg:w-[100px] md:w-[80px] sm:w-[75px]  lg:text-[17px] md:text-[16px] sm:text-[15px]  h-full ">
            {" "}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-blue-800 font-semibold border-b-[3px] border-blue-800  "
                    : "text-black"
                }  h-full flex items-center justify-center  hover:border-b-[3px] hover:font-semibold  hover:border-blue-800  hover:text-blue-800 transition-all duration-100 ease-in-out`
              }
            >
              Contact Us
            </NavLink>
          </li>
        </div>

        {/* navbar book appoinment button for laptop and tab */}

        <div className="md:block hidden">
          <button className=" cursor-pointer lg:w-[180px] md:w-[160px] md:text-[15px] ">
            <NavLink
              to="/AppointmentForm"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-white text-blue-800 font-semibold border-1"
                    : "bg-blue-600 text-white"
                } w-full lg:px-4 lg:py-3 px-4 py-3 md:px-3 md:py-2 rounded hover:border-1 hover:bg-white hover:text-blue-800 hover:font-semibold transition-all duration-600 ease-in-out `
              }
            >
              Book Appointment
            </NavLink>
          </button>
        </div>

        {/* menu bar  */}

        <div onClick={OpenMenu} className="sm:hidden cursor-pointer">
          <img className="w-8" src={menu} alt="menu" />
        </div>

        {/* navbar list for mobile phone */}

        <div
          className={`flex flex-col justify-between py-5 px-7 fixed top-0 left-0  transition-all duration-300 ease-in-out  bg-white w-screen h-screen cursor-pointer ${Navlist}`}
        >
          <div
            onClick={CloseMenu}
            className="sm:hidden cursor-pointer absolute right-5"
          >
            <img className="w-7" src={closeMenu} alt="closeMenu" />
          </div>
          <div className="flex flex-col gap-5">
            <li className="list-none text-lg">
              <NavLink
                onClick={closeMenu}
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-blue-800 font-semibold border-b-[3px] border-blue-800  "
                      : "text-black"
                  } hover:border-b-[3px] hover:font-semibold  hover:border-blue-800  hover:text-blue-800 transition-all duration-100 ease-in-out`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="list-none text-lg">
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-blue-800 font-semibold border-b-[3px] border-blue-800  "
                      : "text-black"
                  } hover:border-b-[3px] hover:font-semibold  hover:border-blue-800  hover:text-blue-800 transition-all duration-100 ease-in-out`
                }
              >
                About
              </NavLink>
            </li>
            <li className="list-none text-lg">
              <NavLink
                onClick={closeMenu}
                to="/services"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-blue-800 font-semibold border-b-[3px] border-blue-800  "
                      : "text-black"
                  } hover:border-b-[3px] hover:font-semibold  hover:border-blue-800  hover:text-blue-800 transition-all duration-100 ease-in-out`
                }
              >
                Services
              </NavLink>
            </li>
            <li className="list-none text-lg">
              <NavLink
                onClick={closeMenu}
                to="/contact"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-blue-800 font-semibold border-b-[3px] border-blue-800  "
                      : "text-black"
                  } hover:border-b-[3px] hover:font-semibold  hover:border-blue-800  hover:text-blue-800 transition-all duration-100 ease-in-out`
                }
              >
                Contact Us
              </NavLink>
            </li>
          </div>
          <div>
            <button className="cursor-pointer w-[180px] pb-8 ">
              <NavLink
                to="/AppointmentForm"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-white text-blue-800 font-semibold"
                      : "bg-blue-600 text-white"
                  } w-full  px-4 py-3 rounded hover:bg-white hover:text-blue-800 hover:font-semibold transition-all duration-600 ease-in-out hover:border-1 `
                }
              >
                Book Appointment
              </NavLink>
            </button>
          </div>
        </div>
      </nav>

      {/* Navbar Ends here */}
    </>
  );
}

export default Header;
