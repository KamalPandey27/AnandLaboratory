import React from "react";
import { NavLink } from "react-router-dom";
import heroImage from "../assets/heroImage.png";
function Home() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section
          className={` overflow-x-hidden h-[calc(100vh-60px)] w-screen  bg-cover bg-center relative  `}
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="md:translate-25 md:h-[70%] h-[100%] flex flex-col gap-10 justify-center md:items-start items-center relative p-2">
            <div>
              <h1 className="md:text-5xl sm:text-4xl text-[20px] font-semibold text-white">
                We Can Provide{" "}
                <span className="text-blue-500 md:text-5xl sm:text-4xl text-2xl">
                  Medical
                </span>{" "}
                Services <br /> That You Can
                <span className="text-blue-500 md:text-5xl sm:text-4xl text-2xl">
                  {" "}
                  Trust!
                </span>
              </h1>
            </div>
            <div className="md:pb-3 text-wrap text-white font-semibold md:text-[15px] sm:text-[13px] hidden sm:block ">
              <h2>
                Manage Patients, Book Lab Tests, Download Reports & Handle
                Everything <br /> Easily with Smart Laboratory System
              </h2>
            </div>
            <div className="md:pb-3 text-center text-white font-semibold text-[13px] block sm:hidden ">
              <h2>
                Manage Patients, Book Lab Tests , <br /> Handle Everything
                Easily with Smart Laboratory System
              </h2>
            </div>
            <div className="flex items-center">
              <button className="cursor-pointer w-[160px] ">
                <NavLink
                  to="/AppointmentForm"
                  className="w-full bg-blue-500  text-white px-4 py-3 rounded hover:bg-white hover:text-blue-800   hover:border-1"
                >
                  Get Appointment
                </NavLink>
              </button>
              <button className="cursor-pointer w-[140px] ">
                <NavLink
                  to="/AppointmentForm"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "bg-blue-800 text-white font-semibold"
                        : "bg-gray-700 text-white"
                    } w-full  px-4 py-3 rounded hover:bg-blue-600 hover:text-white hover:font-semibold   `
                  }
                >
                  Learn More
                </NavLink>
              </button>
            </div>
          </div>
        </section>
        {/* Hero Section Ends Here */}

        {/* Lab Time Section  */}
        <section>
          <div></div>
        </section>
        {/* Lab Time Section Ends */}
      </main>
    </>
  );
}

export default Home;
