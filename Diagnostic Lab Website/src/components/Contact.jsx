import React from "react";
import { testimonial, clock, call, location } from "../assets/index.jsx";
import AppointmentForm from "./AppointmentForm.jsx";
function Contact() {
  return (
    <>
      <main>
        <section
          className="w-screen lg:h-[50vh] h-[40vh] relative flex justify-center items-center"
          style={{ backgroundImage: `url(${testimonial})` }}
        >
          <div className="absolute top-0 left-0 bg-blue-600 opacity-70 w-full h-full z-0"></div>
          <h1 className="text-5xl font-semibold text-white relative">
            Contact Us
          </h1>
        </section>
        {/* contact us form start */}
        <AppointmentForm />
        {/* contact us section end  */}
        <section className="w-screen sm:h-[25vh] h-screen sm:p-0 py-3">
          <div className="    w-[90%] h-full m-auto flex sm:flex-row sm:gap-0 gap-3 flex-col items-center justify-evenly py-2">
            <div className=" bg-blue-600 text-white rounded h-full sm:w-[30%] w-[80%] flex items-center justify-evenly gap-2 p-3 cursor-pointer hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-xl/40 hover:shadow-blue-900">
              <img src={call} alt="call" className="w-[50px]" />
              <div className="flex flex-col md:gap-2 sm:gap-0 lg:text-[16px] md:text-[14px] sm:text-[13px]">
                <span>+(91) 8708949157</span>
                <span className="break-all lg:text-[16px] md:text-[14px] sm:text-[13px] ">
                  kamalpandey0009@gmail.com
                </span>
              </div>
            </div>
            <div className="bg-blue-600 text-white rounded h-full sm:w-[30%] w-[80%] flex items-center justify-evenly gap-2 p-3 cursor-pointer hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-xl/40 hover:shadow-blue-900">
              <img src={clock} alt="call" className="w-[50px]" />
              <div className="flex flex-col md:gap-2 sm:gap-0">
                <span className=" lg:text-[16px] md:text-[14px] sm:text-[13px]">
                  Mon - Sat : 9AM To 6PM
                </span>
                <span className=" lg:text-[16px] md:text-[14px] sm:text-[13px]">
                  Sunday Closed
                </span>
              </div>
            </div>
            <div className="bg-blue-600 text-white rounded h-full sm:w-[30%] w-[80%] flex items-center justify-evenly gap-2 p-3 cursor-pointer hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-xl/40 hover:shadow-blue-900">
              <img src={location} alt="call" className="w-[50px]" />
              <div className="flex flex-col md:gap-2 sm:gap-0 w-[60%]">
                <span className=" lg:text-[16px] md:text-[14px] sm:text-[13px]">
                  Devi mandir road , bhawna chown , Panipat (132103)
                </span>
                <span className=" lg:text-[16px] md:text-[14px] sm:text-[13px]">
                  Haryana , India
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;
