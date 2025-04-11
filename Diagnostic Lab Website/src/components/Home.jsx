import React from "react";
import { NavLink } from "react-router-dom";
import heroImage from "../assets/heroImage.png";
function Home() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section
          className={` overflow-x-hidden h-screen w-screen  bg-cover bg-center relative  `}
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
                  className="w-full bg-blue-500  text-white sm:px-4 sm:py-3 px-2 py-2 rounded hover:bg-white hover:text-blue-800   hover:border-1"
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
        <section className="w-screen h-screen p-5 bg-white sm:relative md:h-[45vh] sm:h-[55vh]">
          <div className=" flex justify-center items-center flex-wrap lg:gap-30 md:gap-15 gap-8 sm:absolute sm:-top-13 h-full ">
            <div className="bg-blue-500 rounded text-white md:p-7 sm:w-[40%] w-full p-5  h-[280px] md:h-[280px] sm:h-[290px] flex flex-col gap-7">
              <div className="font-bold text-xl">Opening Time</div>

              <div className="flex flex-col gap-2">
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
              <button className="bg-white w-[120px] rounded m-auto text-blue-500 font-semibold px-3 py-2">
                Learn More
              </button>
            </div>

            <div className="bg-blue-500 rounded text-white md:p-7 sm:w-[40%] w-full p-5 h-[265px] md:h-[280px] sm:h-[290px] flex flex-col justify-between  lg:gap-7 gap-3">
              <div className="font-bold text-xl">Emergency Cases</div>
              <div className="md:text-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                fugit repellat distinctio. Possimus quos quasi voluptas
                doloribus,Lorem ipsum dolor sit amet consectetur adipisicing
                elit.
              </div>
              <div className="flex justify-center items-center">
                <button className="bg-white w-[120px] rounded m-auto text-blue-500 font-semibold px-3 py-2">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Lab Time Section Ends */}
      </main>
    </>
  );
}

export default Home;
