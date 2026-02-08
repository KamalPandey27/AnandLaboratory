import React from "react";

function AboutUs() {
  return (
    <>
      {/*  */}
      <div className="bg-[url(/images/bg.jpg)] w-[100vw] h-[50vh] relative flex justify-center items-center bg-center bg-no-repeat bg-cover">
        <div className="absolute h-[50vh] w-[100vw]  bg-blue-700 opacity-60 z-0"></div>
        <div className="z-1 justify-center  flex items-center  relative text-5xl font-bold text-white">
          <div className=""> About Us</div>
        </div>
      </div>
      {/*  */}

      {/*  */}
      <div className=" lg:flex-row lg:items-start  lg:justify-between w-screen   mx-auto justify-center items-center  flex flex-col-reverse  ">
        <div className="lg:w-[40%] w-[100%]  px-10 py-5">
          <h1 className="text-2xl  mb-5 font-semibold">About Us</h1>
          <p className="text-lg text-justify ">
            At Anand lab, we specialize in convenient, at-home blood testing
            services designed to fit your busy lifestyle. Our mission is to make
            healthcare more accessible by allowing you to book blood tests
            online and have our certified phlebotomists collect samples directly
            from your home—no waiting rooms, no hassle. Backed by a team of
            trusted lab professionals and advanced diagnostic technology, we
            ensure fast, accurate, and reliable test results delivered securely
            to your inbox. Whether it’s a routine checkup or a specialized test,
            we’re committed to providing quality care, privacy, and exceptional
            service every step of the way. Experience healthcare on your terms —
            simple, secure, and right at your doorstep.
          </p>
          <p className="mt-7  text-lg">
            We make lab testing simple and stress-free by bringing expert sample
            collection and advanced diagnostics right to your home — saving you
            time while ensuring your health is in trusted hands.
          </p>
        </div>

        <div className=" lg:w-[55%]   w-[100%]  mb-10">
          <img src="images/micro.jpg" alt="" className=" " />
        </div>
      </div>
      {/*  */}

      {/*  */}
      <div className=" p-5  sm:p-10 flex  sm:justify-around justify-between bg-blue-500">
        <div className="sm:p-3  text-center ">
          <h1 className="sm:text-4xl text-center text-2xl text-white font-semibold">
            7+
          </h1>
          <p className="font-medium sm:text-2xl text-lg">Years of Experience</p>
        </div>

        <div className=" sm:p-3 text-center ">
          <h1 className="sm:text-4xl text-white text-2xl text-center font-semibold">
            10,000+
          </h1>
          <p className="font-medium sm:text-2xl text-lg">Tests Done So Far</p>
        </div>

        <div className="sm:p-3 text-center">
          <h1 className="sm:text-4xl text-2xl text-white font-semibold text-center">
            1,000+
          </h1>
          <p className="font-medium text-lg sm:text-2xl">Satisfied Customers</p>
        </div>
      </div>
      {/*  */}

      {/*  */}

      <div className="flex flex-col p-5 mt-5 w-screen mx-auto items-center md:flex-row md:justify-between md:items-center">
        <div className=" flex flex-col items-center w-1/2 ">
          <div className="border-10 lg:border-20 border-yellow-600 p-3 md:p-5 xl:w-[13vw] rounded-full w-[25vw] sm:w-[20vw] md:w-[15vw]">
            <img src="images/vision.jpg" alt="" />
          </div>

          <div className="mt-5 w-[70vw] md:w-[100%]">
            <h1 className="text-3xl font-bold text-center ">OUR VISION</h1>
            <p className="text-lg text-center mt-3">
              Be the most trusted healthcare partner, enabling healthier lives.
            </p>
          </div>
        </div>

        <div className=" flex flex-col mt-5  items-center w-1/2 ">
          <div className="border-10 lg:border-20 border-blue-800 p-3 md:p-5 xl:w-[13vw] rounded-full w-[25vw] sm:w-[20vw] md:w-[15vw]">
            <img src="images/mission.jpg" alt="" />
          </div>
          <div className="mt-5 flex items-center flex-col w-[70vw] md:w-[100%]">
            <h1 className="text-3xl font-bold text-center ">OUR MISSION</h1>
            <div className="text-lg text-center w-[90%] mt-3">
              To be the undisputed market leader by providing accessible,
              affordable, timely and quality healthcare diagnostics, applying
              insights and cutting edge technology to create value for all
              stakeholders.
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      {/*  */}
      <div className="mt-5  p-10 w-screen  ">
        <h1 className="text-3xl sm:text-4xl text-center font-semibold">
          Testing Portfolio
        </h1>
      </div>

      <div className="flex justify-center">
        <div className="w-screen sm:p-5 mt-5 flex flex-col items-center sm:flex sm:flex-row sm:justify-around mb-5  ">
          <span className="w-[90vw] block sm:w-[30vw]  ">
            <img
              src="images/lab.jpg"
              alt=""
              className="rounded-lg hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out"
            />
            <h1 className="bg-blue-700 mt-5 text-xl text-white font-semibold p-1 text-center rounded-lg  ">
              Laboratory
            </h1>
          </span>

          <span className="w-[90vw] sm:mt-0 block mt-10 sm:w-[30vw]  ">
            <img
              src="images/pathology.jpg"
              alt=""
              className="rounded-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            />
            <h1 className="bg-blue-700 mt-5 text-xl text-center text-white font-semibold p-1 rounded-lg ">
              Pathology
            </h1>
          </span>

          <span className="w-[90vw] mt-10 block sm:mt-0 sm:w-[30vw] ">
            <img
              src="images/highend.png"
              alt=""
              className="rounded-lg hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out"
            />
            <h1 className="bg-blue-700 mt-5 text-xl text-white font-semibold p-1 rounded-lg text-center">
              High end pathology
            </h1>
          </span>
        </div>
      </div>
      {/*  */}
    </>
  );
}

export default AboutUs;
