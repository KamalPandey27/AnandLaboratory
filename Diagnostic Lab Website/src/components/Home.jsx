import React from "react";
import { NavLink } from "react-router-dom";
import heroImage from "../assets/heroImage.png";
import clock from "../assets/clock.svg";
import emergency from "../assets/emergency.svg";
function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section
          className={`  h-screen w-screen  bg-cover bg-center relative  `}
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
              <button className="cursor-pointer sm:w-[160px] w-[130px] sm:text-[16px] text-[14px] ">
                <NavLink
                  to="/AppointmentForm"
                  className="w-full bg-blue-600  text-white sm:px-4 sm:py-3 px-2 py-2 rounded hover:bg-white hover:text-blue-800   hover:border-1"
                >
                  Get Appointment
                </NavLink>
              </button>
              <button className="cursor-pointer w-[140px] sm:text-[16px] text-[14px]  ">
                <NavLink
                  to="/AppointmentForm"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "bg-blue-800 text-white font-semibold"
                        : "bg-gray-700 text-white"
                    } w-full sm:px-4 sm:py-3 px-2 py-2 rounded hover:bg-blue-600 hover:text-white hover:font-semibold   `
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
        <section className="w-screen h-screen p-5 flex justify-center bg-white sm:relative md:h-[45vh] sm:h-[55vh]">
          <div className="  flex flex-col gap-5 justify-center items-center sm:flex-wrap lg:gap-18 md:gap-15 sm:absolute sm:-top-13 h-full ">
            <div className="overflow-hidden cursor-pointer bg-blue-600 rounded text-white md:p-7 sm:w-[35%] w-full p-5  h-[280px] md:h-[280px] sm:h-[265px] flex flex-col justify-between relative hover:-translate-y-2 transition-all duration-400 ease-in-out hover:shadow-xl/40 hover:shadow-blue-900 ">
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-10"></div>
              <div className="font-bold lg:text-xl md:text-lg z-20">
                Opening Time
              </div>

              <div className="flex flex-col gap-2 lg:text-[16px] text-[14px] z-20">
                <div className="flex justify-between">
                  <div>Monday - Friday</div>
                  <div>8AM - 9PM</div>
                </div>

                <div className="flex justify-between">
                  <div>Saturday</div>
                  <div>9AM - 6PM</div>
                </div>
                <div className="flex justify-between">
                  <div>Sunday</div>
                  <div>Holiday</div>
                </div>
              </div>
              <button className="z-20">
                <NavLink
                  to="/AppointmentForm"
                  className={({ isActive }) =>
                    ` ${
                      isActive
                        ? "bg-blue-300 text-white border-1 border-blue-600"
                        : "bg-white text-blue-500"
                    } w-[120px] rounded m-auto  font-semibold px-3 py-2 hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out`
                  }
                >
                  Learn More
                </NavLink>
              </button>
              <img
                className="w-30 absolute -bottom-11 -right-10"
                src={clock}
                alt=""
              />
            </div>

            <div className="overflow-hidden  cursor-pointer bg-blue-600 rounded text-white md:p-7 sm:w-[35%] w-full p-5 h-[265px] md:h-[280px] sm:h-[265px] flex flex-col justify-between relative hover:-translate-y-2 transition-all duration-400 ease-in-out hover:shadow-xl/40 hover:shadow-blue-900">
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-10"></div>
              <div className="font-bold lg:text-xl md:text-lg z-20">
                Emergency Cases
              </div>
              <div className=" lg:text-[16px] text-[14px] z-20">
                In case of any medical emergency, our laboratory is always ready
                to assist you with quick and accurate diagnostic services.
                Contact us immediately
              </div>
              <div className="flex justify-center items-center z-20">
                <button>
                  <NavLink
                    to="/AppointmentForm"
                    className={({ isActive }) =>
                      ` ${
                        isActive
                          ? "bg-blue-300 text-white border-1 border-blue-600"
                          : "bg-white text-blue-500"
                      } w-[120px] rounded m-auto  font-semibold px-3 py-2 hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out`
                    }
                  >
                    Learn More
                  </NavLink>
                </button>
              </div>
              <img
                className="w-30 absolute -bottom-11 -right-9"
                src={emergency}
                alt=""
              />
            </div>
          </div>
        </section>
        {/* Lab Time Section Ends */}
      </main>
    </>
  );
}

export default Home;
